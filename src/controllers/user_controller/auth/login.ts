/*****************************************************
 *
 *  This file contains login logics:
 * - check if user exists
 * - generate tokens if no error occurs
 *
 *****************************************************/

import { Request, Response } from 'express';
import IPayload from '../../../interfaces/payload_interface';
import IUser from '../../../interfaces/user_interface';
import IReqLogin from '../../../interfaces/req_login_interface';
import User from '../../../models/user';
import genericError from '../../../utils/generic_error';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import {
  accessTokenSecret,
  refreshTokenSecret,
  accessTokenExpiry,
  refreshTokenExpiry,
} from '../../../configs/jwt.config';
import Logger from '../../../loaders/winston';

/**
 *
 * @param req Request
 * @param res Response
 */

const Login = (req: Request, res: Response): void => {
  const { email, password }: IReqLogin = req.body;

  User.findOne({ email }, (error: any, user: IUser): any => {
    if (error) {
      return genericError(res, error);
    }

    if (!user) {
      return res.status(401).json({
        error: true,
        message: 'votre email ou password est erroné ',
      });
    }

    if (user) {
      // Attempt on login max = 10
      // Check if the max attempt is reached and block the execution if it is reached
      if (user.attemptLogin >= 10) {
        // Reset user.attemptLogin to 0
        setTimeout((): any => {
          user.attemptLogin = 0;
          user.save((error: any): any => {
            if (error) {
              return genericError(res, error);
            }
          });
        }, 3600000); // <-- 3600000ms = 1h

        return res.status(429).json({
          error: true,
          message: `Trop de tentative sur l'email: ${email}, veillez patientez 1h`,
        });
      }

      bcrypt.compare(
        password,
        user.password,
        async (error: any, isMatch: boolean): Promise<any> => {
          if (error) {
            return genericError(res, error);
          }

          if (!isMatch) {
            // If wrong password, increase attemptLogin value
            user.attemptLogin += 1;

            user.save((error: any) => {
              if (error) {
                return genericError(res, error);
              }
              return res.status(401).json({
                error: true,
                message: 'votre email ou password est erroné',
              });
            });
          }

          if (isMatch) {
            const payload: IPayload = {
              sub: user._id,
              email: user.email,
            };

            try {
              // generate access-token
              const accessToken: string = await jwt.sign(
                payload,
                accessTokenSecret,
                {
                  expiresIn: accessTokenExpiry,
                },
              );

              // generate refresh-token
              const refreshToken: string = jwt.sign(
                payload,
                refreshTokenSecret,
                {
                  expiresIn: refreshTokenExpiry,
                },
              );

              Logger.info(`Tokens generated on Login`);

              return res.status(200).json({
                error: false,
                message: "L'utilisateur a ete authentifie succès",
                tokens: {
                  token: accessToken,
                  'refresh-token': refreshToken,
                  createdAt: new Date(Date.now()),
                },
              });
            } catch (error) {
              return genericError(res, error);
            }
          }
        },
      );
    }
  });
};

export default Login;

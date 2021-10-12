/*****************************************************
 *
 *  This file contains register logics:
 * - store the user (contained inside the body of the request)
 * - and generate tokens if no error occurs
 *
 *****************************************************/

import { Request, Response } from 'express';
import IReqRegister from '../../../interfaces/req_register_interface';
import IUser from '../../../interfaces/user_interface';
import IPayload from '../../../interfaces/payload_interface';
import User from '../../../models/user';
import genericError from '../../../utils/generic_error';
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

const Register = (req: Request, res: Response): void => {
  // Get all the body request
  const {
    firstname,
    lastname,
    email,
    password,
    date_naissance,
    sexe,
  }: IReqRegister = req.body;

  // Save the user inside DB
  const newUser: IUser = new User({
    firstname,
    lastname,
    email,
    password,
    dateOfBirth: date_naissance,
    gender: sexe,
  });

  newUser.save(async (error: any): Promise<any> => {
    if (error) {
      return genericError(res, error);
    }

    // If there is no error, generate access & refresh tokens
    // define payload inside tokens
    const payload: IPayload = {
      sub: newUser._id,
      email: newUser.email,
    };

    try {
      // generate access-token
      const accessToken: string = jwt.sign(payload, accessTokenSecret, {
        expiresIn: accessTokenExpiry,
      });

      // generate refresh-token
      const refreshToken: string = jwt.sign(payload, refreshTokenSecret, {
        expiresIn: refreshTokenExpiry,
      });

      Logger.info(`Tokens generated on Register`);

      return res.status(201).json({
        error: false,
        message: "L'utilisateur a bien ete cree avec succes",
        tokens: {
          token: accessToken,
          'refresh-token': refreshToken,
          createdAt: new Date(Date.now()),
        },
      });
    } catch (error: any) {
      return genericError(res, error);
    }
  });
};

export default Register;

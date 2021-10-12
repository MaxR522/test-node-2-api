/*****************************************************
 *
 *  This file contains middlewares to check if the email already exists inside mongoDB
 *
 *****************************************************/

import { Request, Response, NextFunction } from 'express';
import User from '../../models/user';
import IUser from '../../interfaces/user_interface';
import genericError from '../../utils/generic_error';

/**
 *
 * @param req Request
 * @param res Response
 * @param next NextFunction
 */

const checkUserDuplicate = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const email: string = req.body.email;

  if (email) {
    User.findOne({ email }, (error: any, user: IUser): any => {
      if (error) {
        return genericError(res, error);
      }

      if (user) {
        return res.status(409).json({
          error: true,
          message: 'Email deja utilisée',
        });
      }

      if (!user) {
        next();
      }
    });
  }
};

export default checkUserDuplicate;

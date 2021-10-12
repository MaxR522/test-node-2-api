/*****************************************************
 *
 *  This file contains middlewares to check the result of field_validators and display if there is some the errors
 *
 *****************************************************/

import { validationResult } from 'express-validator';
import { Request, Response } from 'express';
import Logger from '../../loaders/winston';

const checkLoginValidationResult = (
  req: Request,
  res: Response,
  next: any,
): any => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    Logger.error('Wrong or missing params');

    return res.status(401).json({
      error: true,
      message: 'email/password est manquant',
      errors: errors.array(),
    });
  }

  return next();
};

export default checkLoginValidationResult;

/*****************************************************
 *
 *  This file contains middlewares to check the result of field_validators and display if there is some the errors
 *
 *****************************************************/

import { validationResult } from 'express-validator';
import { Request, Response } from 'express';
import Logger from '../../loaders/winston';

const checkValidationResult = (req: Request, res: Response, next: any): any => {
  const errors: any = validationResult(req);

  if (!errors.isEmpty()) {
    // To check if some params is blank
    const isBlank = errors
      .array()
      .some(
        (element: any) =>
          element.msg.split(' ')[element.msg.split(' ').length - 1] === 'blank',
      );

    Logger.error('Wrong or missing params');
    if (isBlank) {
      return res.status(422).json({
        error: true,
        message: "L'un ou plusieur donnees obligatoire sont manquantes",
        errors: errors.array(),
      });
    }
    return res.status(422).json({
      error: true,
      message: "L'un ou plusieur donnees obligatoire ne sont pas conformes",
      errors: errors.array(),
    });
  }

  return next();
};

export default checkValidationResult;

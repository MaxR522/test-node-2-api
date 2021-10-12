/*****************************************************
 *
 *  This file contains middlewares to check if the JWT token inside header is valid
 *
 *****************************************************/

import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { accessTokenSecret } from '../../configs/jwt.config';

/**
 *
 * @param req Request
 * @param res Response
 * @param next NextFunction
 */

const JwtVerify = (req: Request, res: Response, next: NextFunction) => {
  // extract the jwt inside headers of the request
  const token = req.headers.authorization?.split(' ')[1];

  if (token) {
    // verify the validity of JWT
    jwt.verify(token, accessTokenSecret, (error: any, decoded: any) => {
      if (error) {
        return res.status(401).json({
          error: true,
          message: "le token envoyé n'est pas conforme",
          errors: error,
        });
      }

      if (decoded) {
        // if token valid, inject inside req.userData the decoded data & req.token the token
        req.userData = decoded;
        req.token = token;
        next();
      }
    });
  } else {
    // If no token inside headers
    return res.status(401).json({
      error: true,
      message: "le token envoyé n'existe pas",
    });
  }
};

export default JwtVerify;

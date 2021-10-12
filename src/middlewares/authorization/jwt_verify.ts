import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { accessTokenSecret } from '../../configs/jwt.config';

const JwtVerify = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (token) {
    jwt.verify(token, accessTokenSecret, (error: any, decoded: any) => {
      if (error) {
        return res.status(401).json({
          error: true,
          message: "le token envoyé n'est pas conforme",
          errors: error,
        });
      }

      if (decoded) {
        next();
      }
    });
  } else {
    return res.status(401).json({
      error: true,
      message: "le token envoyé n'existe pas",
    });
  }
};

export default JwtVerify;

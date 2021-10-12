import { Request, Response, NextFunction } from 'express';
import BlacklistToken from '../../models/blacklist_token';
import IBlacklistToken from '../../interfaces/blacklist_token_interface';
import genericError from '../../utils/generic_error';

const checkBlacklistToken = (
  req: Request,
  res: Response,
  next: NextFunction,
): any => {
  // req.token from JwtVerify middlewares
  const token: string = req.token;

  // Check inside DB if the token is blacklisted or not
  BlacklistToken.findOne(
    { token },
    (error: any, token: IBlacklistToken): any => {
      if (error) {
        return genericError(res, error);
      }

      if (token) {
        return res.status(401).json({
          error: true,
          message: "Votre token n'est plus valide, veillez le reinitialiser",
        });
      }

      if (!token) {
        next();
      }
    },
  );
};

export default checkBlacklistToken;

/*****************************************************
 *
 *  This file contains logout logics:
 * - Revoke access-token by adding it inside BlacklistToken
 * - When performing action, check if the access-token is already revoked
 *
 *****************************************************/

import { Request, Response } from 'express';
import Logger from '../../../loaders/winston';
import genericError from '../../../utils/generic_error';
import BlacklistToken from '../../../models/blacklist_token';
import IBlacklistToken from '../../../interfaces/blacklist_token_interface';

/**
 *
 * @param req Request
 * @param res Response
 */

const Logout = (req: Request, res: Response): void => {
  // token from JwtVerify
  const token: string = req.token;

  const addBlacklistToken: IBlacklistToken = new BlacklistToken({
    token,
  });

  addBlacklistToken.save((error: any): any => {
    if (error) {
      return genericError(res, error);
    }

    Logger.info('Access-token blacklisted');

    return res.status(200).json({
      error: false,
      message: "L'utilisateur a ete deconnectee succès",
    });
  });
};

export default Logout;

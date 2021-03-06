/*****************************************************
 *
 *  This file contains get all users logics:
 * - Query inside mongoDB all the users by using mongoose method
 *
 *****************************************************/

import { Request, Response } from 'express';
import IUser from '../../interfaces/user_interface';
import User from '../../models/user';
import genericError from '../../utils/generic_error';

/**
 *
 * @param req Request
 * @param res Response
 */

const GetAllUsers = async (req: Request, res: Response): Promise<any> => {
  try {
    const users: Array<IUser> = await User.find({}).select(
      'firstname lastname email gender',
    );

    return res.status(200).json({
      error: false,
      users,
    });
  } catch (error) {
    genericError(res, error);
  }
};

export default GetAllUsers;

import { Request, Response } from 'express';
import IReqRegister from '../../../interfaces/req_register_interface';
import IUser from '../../../interfaces/user_interface';
import User from '../../../models/user';

/**
 *
 * @param req
 * @param res
 */

const Register = (req: Request, res: Response): void => {
  const {
    firstname,
    lastname,
    email,
    password,
    dateOfBirth,
    gender,
  }: IReqRegister = req.body;

  try {
    const user: IUser = new User({
      firstname,
      lastname,
      email,
      password,
      dateOfBirth,
      gender,
    });
  } catch (error) {}
};

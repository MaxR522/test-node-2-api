import { Request, Response } from 'express';
import IUser from '../../interfaces/user_interface';
import User from '../../models/user';
import genericError from '../../utils/generic_error';

const GetOne = (req: Request, res: Response) => {
  const id: string = req.params.id;

  User.findOne({ _id: id }, (error: any, user: IUser) => {
    if (error) {
      return genericError(res, error);
    }

    if (!user) {
      return res.status(404).json({
        error: true,
        message: 'user not found',
      });
    }

    if (user) {
      // Filtered user's data
      interface UserData {
        firstname: string;
        lastname: string;
        email: string;
        date_naissance: Date;
        sexe: 'male' | 'female' | 'others';
        createdAt: Date;
      }

      const userData: UserData = {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        date_naissance: user.dateOfBirth,
        sexe: user.gender,
        createdAt: user.createdAt,
      };

      return res.status(200).json({
        error: false,
        user: userData,
      });
    }
  });
};

export default GetOne;

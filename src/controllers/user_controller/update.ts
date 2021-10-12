import { Request, Response } from 'express';
import User from '../../models/user';
import genericError from '../../utils/generic_error';
import IUser from '../../interfaces/user_interface';
import IUpdateReq from '../../interfaces/update_user_interface';
import IPayload from '../../interfaces/payload_interface';

const UpdateUser = (req: Request, res: Response): any => {
  // req.userData store the decoded data (payload) from VerifyJWT method
  const userData: IPayload = req.userData;

  // Extract user's ID from query params
  const userId: string = req.params.id;

  const { firstname, lastname, date_naissance, sexe }: IUpdateReq = req.body;

  // The user can only update his own information
  // Block the execution of the function if user ID inside payload different userId params
  if (userData.sub !== userId) {
    return res.status(403).json({
      error: true,
      message:
        "Vous n'avez pas le droit de modifier d'autre information utilisateur",
    });
  }

  // Check if the user didn't send any data
  const isBodyEmpty = Object.keys(req.body).length === 0;
  if (isBodyEmpty) {
    return res.status(401).json({
      error: true,
      message: "aucune donnee n'a ete envoyée",
    });
  }

  // Find the User that need update
  User.findOne({ _id: userId }, (error: any, user: IUser): any => {
    if (error) {
      return genericError(res, error);
    }

    // If user not found, throw an error
    if (!user) {
      return res.status(404).json({
        error: true,
        message: `Utilisateur avec ID: ${userId} n'existe pas`,
      });
    }

    if (user) {
      // Update the user property value if the data is provided in the body and keep the old value if data not provided
      user.firstname = firstname ? firstname : user.firstname;
      user.lastname = lastname ? lastname : user.lastname;
      user.dateOfBirth = date_naissance ? date_naissance : user.dateOfBirth;
      user.gender = sexe ? sexe : user.gender;

      user.save((error: any): any => {
        if (error) {
          return genericError(res, error);
        }

        // If everything OK, return success
        return res.status(200).json({
          error: false,
          message: "L'utilisateur a ete modifies succes",
        });
      });
    }
  });
};

export default UpdateUser;

import { Request, Response } from 'express';
import User from '../../models/user';
import genericError from '../../utils/generic_error';
import IUser from '../../interfaces/user_interface';
import IPayload from '../../interfaces/payload_interface';
import * as bcrypt from 'bcrypt';

/**
 * To change user's password, the user need to :
 * - provide his current password & the new password
 * - Then we check if the current password is valid (match with the hashed stored)
 * - if valid, change his password
 */

const UpdateUserPassword = (req: Request, res: Response): any => {
  // req.userData store the decoded data (payload) from VerifyJWT method
  const userData: IPayload = req.userData;

  // Extract user's ID from query params
  const userId: string = req.params.id;

  const currentPassword: string = req.body.currentPassword;
  const newPassword: string = req.body.newPassword;

  // The user can only update his own information
  // Block the execution of the function if user ID inside payload different userId params
  if (userData.sub !== userId) {
    return res.status(403).json({
      error: true,
      message:
        "Vous n'avez pas le droit de modifier d'autre information utilisateur",
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
      // Block the password update if the user provide wrong password
      bcrypt.compare(
        currentPassword,
        user.password,
        (error: any, isMatch: boolean): any => {
          if (error) {
            return genericError(res, error);
          }

          if (!isMatch) {
            return res.status(401).json({
              error: true,
              message: 'current password erroné',
            });
          }

          if (isMatch) {
            user.password = newPassword;

            user.save((error: any): any => {
              if (error) {
                return genericError(res, error);
              }

              // If everything OK, return success
              return res.status(200).json({
                error: false,
                message: 'Votre password a ete modifies avec succès',
              });
            });
          }
        },
      );
    }
  });
};

export default UpdateUserPassword;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const generic_error_1 = require("../../utils/generic_error");
const UpdateUser = (req, res) => {
    const userData = req.userData;
    const userId = req.params.id;
    const { firstname, lastname, date_naissance, sexe } = req.body;
    if (userData.sub !== userId) {
        return res.status(403).json({
            error: true,
            message: "Vous n'avez pas le droit de modifier d'autre information utilisateur",
        });
    }
    const isBodyEmpty = Object.keys(req.body).length === 0;
    if (isBodyEmpty) {
        return res.status(401).json({
            error: true,
            message: "aucune donnee n'a ete envoyée",
        });
    }
    user_1.default.findOne({ _id: userId }, (error, user) => {
        if (error) {
            return (0, generic_error_1.default)(res, error);
        }
        if (!user) {
            return res.status(404).json({
                error: true,
                message: `Utilisateur avec ID: ${userId} n'existe pas`,
            });
        }
        if (user) {
            user.firstname = firstname ? firstname : user.firstname;
            user.lastname = lastname ? lastname : user.lastname;
            user.dateOfBirth = date_naissance ? date_naissance : user.dateOfBirth;
            user.gender = sexe ? sexe : user.gender;
            user.save((error) => {
                if (error) {
                    return (0, generic_error_1.default)(res, error);
                }
                return res.status(200).json({
                    error: false,
                    message: "L'utilisateur a ete modifies succes",
                });
            });
        }
    });
};
exports.default = UpdateUser;
//# sourceMappingURL=update.js.map
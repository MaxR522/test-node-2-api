"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const generic_error_1 = require("../../utils/generic_error");
const bcrypt = require("bcrypt");
const UpdateUserPassword = (req, res) => {
    const userData = req.userData;
    const userId = req.params.id;
    const currentPassword = req.body.currentPassword;
    const newPassword = req.body.newPassword;
    if (userData.sub !== userId) {
        return res.status(403).json({
            error: true,
            message: "Vous n'avez pas le droit de modifier d'autre information utilisateur",
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
            bcrypt.compare(currentPassword, user.password, (error, isMatch) => {
                if (error) {
                    return (0, generic_error_1.default)(res, error);
                }
                if (!isMatch) {
                    return res.status(401).json({
                        error: true,
                        message: 'current password erroné',
                    });
                }
                if (isMatch) {
                    user.password = newPassword;
                    user.save((error) => {
                        if (error) {
                            return (0, generic_error_1.default)(res, error);
                        }
                        return res.status(200).json({
                            error: false,
                            message: 'Votre password a ete modifies avec succès',
                        });
                    });
                }
            });
        }
    });
};
exports.default = UpdateUserPassword;
//# sourceMappingURL=update_password.js.map
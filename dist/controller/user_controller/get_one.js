"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const generic_error_1 = require("../../utils/generic_error");
const GetOne = (req, res) => {
    const id = req.params.id;
    user_1.default.findOne({ _id: id }, (error, user) => {
        if (error) {
            return (0, generic_error_1.default)(res, error);
        }
        if (!user) {
            return res.status(404).json({
                error: true,
                message: 'user not found',
            });
        }
        if (user) {
            const userData = {
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
exports.default = GetOne;
//# sourceMappingURL=get_one.js.map
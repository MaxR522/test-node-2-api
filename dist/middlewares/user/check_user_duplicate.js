"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const generic_error_1 = require("../../utils/generic_error");
const checkUserDuplicate = (req, res, next) => {
    const email = req.body.email;
    if (email) {
        user_1.default.findOne({ email }, (error, user) => {
            if (error) {
                return (0, generic_error_1.default)(res, error);
            }
            if (user) {
                return res.status(409).json({
                    error: true,
                    message: 'Email deja utilisée',
                });
            }
            if (!user) {
                next();
            }
        });
    }
};
exports.default = checkUserDuplicate;
//# sourceMappingURL=check_user_duplicate.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const fieldValidatorFor = (route) => {
    switch (route) {
        case 'register':
            return [
                (0, express_validator_1.body)('firstname', 'firstname must be a string').isString(),
                (0, express_validator_1.body)('firstname', 'firstname cannot be blank').notEmpty(),
                (0, express_validator_1.body)('lastname', 'lastname must be a string').isString(),
                (0, express_validator_1.body)('lastname', 'lastname cannot be blank').notEmpty(),
                (0, express_validator_1.body)('email', 'email cannot be blank').notEmpty(),
                (0, express_validator_1.body)('email', 'Invalid email format').isEmail(),
                (0, express_validator_1.body)('password', 'password cannot be blank').isString().notEmpty(),
                (0, express_validator_1.body)('password', 'password is too short, at least 6 chars')
                    .isString()
                    .isLength({
                    min: 6,
                }),
                (0, express_validator_1.body)('password', 'password must contain digit, lower case and upper case letter').custom((value) => {
                    const passwordRgxp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;
                    return passwordRgxp.test(value);
                }),
                (0, express_validator_1.body)('date_naissance', 'date_naissance cannot be blank').notEmpty(),
                (0, express_validator_1.body)('date_naissance', 'Wrong format of date in date_naissance').isISO8601(),
                (0, express_validator_1.body)('sexe', 'sexe cannot be blank').notEmpty(),
                (0, express_validator_1.body)('sexe', 'sexe need to be male, female or others')
                    .isString()
                    .isIn(['male', 'female', 'others']),
            ];
        case 'login':
            return [
                (0, express_validator_1.body)('email', 'email cannot be blank').notEmpty(),
                (0, express_validator_1.body)('password', 'password cannot be blank').notEmpty(),
            ];
        case 'update':
            return [
                (0, express_validator_1.body)('firstname', 'firstname must be a String').isString().optional(),
                (0, express_validator_1.body)('lastname', 'lastname must be a String').isString().optional(),
                (0, express_validator_1.body)('date_naissance', 'Wrong format of date in date_naissance')
                    .isISO8601()
                    .optional(),
                (0, express_validator_1.body)('sexe', 'sexe must be male or female')
                    .isString()
                    .isIn(['male', 'female'])
                    .optional(),
            ];
        case 'pwd_change':
            return [
                (0, express_validator_1.body)('currentPassword', 'currentPassword cannot be blank').notEmpty(),
                (0, express_validator_1.body)('newPassword', 'newPassword cannot be blank')
                    .isString()
                    .notEmpty(),
                (0, express_validator_1.body)('newPassword', 'newPassword is too short, at least 6 chars')
                    .isString()
                    .isLength({
                    min: 6,
                }),
                (0, express_validator_1.body)('newPassword', 'newPassword must contain digit, lower case and upper case letter').custom((value) => {
                    const passwordRgxp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;
                    return passwordRgxp.test(value);
                }),
            ];
        default:
            return [];
    }
};
exports.default = fieldValidatorFor;
//# sourceMappingURL=field_validators.js.map
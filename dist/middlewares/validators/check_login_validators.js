"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const winston_1 = require("../../loaders/winston");
const checkLoginValidationResult = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        winston_1.default.error('Wrong or missing params');
        return res.status(401).json({
            error: true,
            message: 'email/password est manquant',
            errors: errors.array(),
        });
    }
    return next();
};
exports.default = checkLoginValidationResult;
//# sourceMappingURL=check_login_validators.js.map
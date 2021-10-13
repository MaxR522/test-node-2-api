"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const winston_1 = require("../../loaders/winston");
const checkValidationResult = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const isBlank = errors
            .array()
            .some((element) => element.msg.split(' ')[element.msg.split(' ').length - 1] === 'blank');
        winston_1.default.error('Wrong or missing params');
        if (isBlank) {
            return res.status(422).json({
                error: true,
                message: "L'un ou plusieur donnees obligatoire sont manquantes",
                errors: errors.array(),
            });
        }
        return res.status(422).json({
            error: true,
            message: "L'un ou plusieur donnees obligatoire ne sont pas conformes",
            errors: errors.array(),
        });
    }
    return next();
};
exports.default = checkValidationResult;
//# sourceMappingURL=check_field_validators.js.map
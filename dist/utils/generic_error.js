"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("../loaders/winston");
const genericError = (res, error = {}) => {
    winston_1.default.error(error);
    return res.status(400).json({
        error: true,
        message: 'Something went wrong !',
        errors: error,
    });
};
exports.default = genericError;
//# sourceMappingURL=generic_error.js.map
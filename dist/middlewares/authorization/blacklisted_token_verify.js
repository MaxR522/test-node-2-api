"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blacklist_token_1 = require("../../models/blacklist_token");
const generic_error_1 = require("../../utils/generic_error");
const checkBlacklistToken = (req, res, next) => {
    const token = req.token;
    blacklist_token_1.default.findOne({ token }, (error, token) => {
        if (error) {
            return (0, generic_error_1.default)(res, error);
        }
        if (token) {
            return res.status(401).json({
                error: true,
                message: "Votre token n'est plus valide, veillez le reinitialiser",
            });
        }
        if (!token) {
            next();
        }
    });
};
exports.default = checkBlacklistToken;
//# sourceMappingURL=blacklisted_token_verify.js.map
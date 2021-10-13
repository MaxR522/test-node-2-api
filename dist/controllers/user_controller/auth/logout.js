"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("../../../loaders/winston");
const generic_error_1 = require("../../../utils/generic_error");
const blacklist_token_1 = require("../../../models/blacklist_token");
const Logout = (req, res) => {
    const token = req.token;
    const addBlacklistToken = new blacklist_token_1.default({
        token,
    });
    addBlacklistToken.save((error) => {
        if (error) {
            return (0, generic_error_1.default)(res, error);
        }
        winston_1.default.info('Access-token blacklisted');
        return res.status(200).json({
            error: false,
            message: "L'utilisateur a ete deconnectee succès",
        });
    });
};
exports.default = Logout;
//# sourceMappingURL=logout.js.map
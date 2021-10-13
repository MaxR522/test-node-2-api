"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const jwt_config_1 = require("../../configs/jwt.config");
const JwtVerify = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (token) {
        jwt.verify(token, jwt_config_1.accessTokenSecret, (error, decoded) => {
            if (error) {
                return res.status(401).json({
                    error: true,
                    message: "le token envoyé n'est pas conforme",
                    errors: error,
                });
            }
            if (decoded) {
                req.userData = decoded;
                req.token = token;
                next();
            }
        });
    }
    else {
        return res.status(401).json({
            error: true,
            message: "le token envoyé n'existe pas",
        });
    }
};
exports.default = JwtVerify;
//# sourceMappingURL=jwt_verify.js.map
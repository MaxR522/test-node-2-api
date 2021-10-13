"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../../models/user");
const generic_error_1 = require("../../../utils/generic_error");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwt_config_1 = require("../../../configs/jwt.config");
const winston_1 = require("../../../loaders/winston");
const Login = (req, res) => {
    const { email, password } = req.body;
    user_1.default.findOne({ email }, (error, user) => {
        if (error) {
            return (0, generic_error_1.default)(res, error);
        }
        if (!user) {
            return res.status(401).json({
                error: true,
                message: 'votre email ou password est erroné ',
            });
        }
        if (user) {
            if (user.attemptLogin >= 10) {
                setTimeout(() => {
                    user.attemptLogin = 0;
                    user.save((error) => {
                        if (error) {
                            return (0, generic_error_1.default)(res, error);
                        }
                    });
                }, 3600000);
                return res.status(429).json({
                    error: true,
                    message: `Trop de tentative sur l'email: ${email}, veillez patientez 1h`,
                });
            }
            bcrypt.compare(password, user.password, (error, isMatch) => __awaiter(void 0, void 0, void 0, function* () {
                if (error) {
                    return (0, generic_error_1.default)(res, error);
                }
                if (!isMatch) {
                    user.attemptLogin += 1;
                    user.save((error) => {
                        if (error) {
                            return (0, generic_error_1.default)(res, error);
                        }
                        return res.status(401).json({
                            error: true,
                            message: 'votre email ou password est erroné',
                        });
                    });
                }
                if (isMatch) {
                    const payload = {
                        sub: user._id,
                        email: user.email,
                    };
                    try {
                        const accessToken = yield jwt.sign(payload, jwt_config_1.accessTokenSecret, {
                            expiresIn: jwt_config_1.accessTokenExpiry,
                        });
                        const refreshToken = jwt.sign(payload, jwt_config_1.refreshTokenSecret, {
                            expiresIn: jwt_config_1.refreshTokenExpiry,
                        });
                        winston_1.default.info(`Tokens generated on Login`);
                        return res.status(200).json({
                            error: false,
                            message: "L'utilisateur a ete authentifie succès",
                            tokens: {
                                token: accessToken,
                                'refresh-token': refreshToken,
                                createdAt: new Date(Date.now()),
                            },
                        });
                    }
                    catch (error) {
                        return (0, generic_error_1.default)(res, error);
                    }
                }
            }));
        }
    });
};
exports.default = Login;
//# sourceMappingURL=login.js.map
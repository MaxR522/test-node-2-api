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
const jwt = require("jsonwebtoken");
const jwt_config_1 = require("../../../configs/jwt.config");
const winston_1 = require("../../../loaders/winston");
const Register = (req, res) => {
    const { firstname, lastname, email, password, date_naissance, sexe, } = req.body;
    const newUser = new user_1.default({
        firstname,
        lastname,
        email,
        password,
        dateOfBirth: date_naissance,
        gender: sexe,
    });
    newUser.save((error) => __awaiter(void 0, void 0, void 0, function* () {
        if (error) {
            return (0, generic_error_1.default)(res, error);
        }
        const payload = {
            sub: newUser._id,
            email: newUser.email,
        };
        try {
            const accessToken = jwt.sign(payload, jwt_config_1.accessTokenSecret, {
                expiresIn: jwt_config_1.accessTokenExpiry,
            });
            const refreshToken = jwt.sign(payload, jwt_config_1.refreshTokenSecret, {
                expiresIn: jwt_config_1.refreshTokenExpiry,
            });
            winston_1.default.info(`Tokens generated on Register`);
            return res.status(201).json({
                error: false,
                message: "L'utilisateur a bien ete cree avec succes",
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
    }));
};
exports.default = Register;
//# sourceMappingURL=register.js.map
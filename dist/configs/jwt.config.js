"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTokenExpiry = exports.accessTokenExpiry = exports.refreshTokenSecret = exports.accessTokenSecret = void 0;
require('dotenv').config();
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || 'myaccesstoken';
exports.accessTokenSecret = accessTokenSecret;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || 'myRefreshToken';
exports.refreshTokenSecret = refreshTokenSecret;
const accessTokenExpiry = process.env.ACCESS_TOKEN_EXPIRY || '24h';
exports.accessTokenExpiry = accessTokenExpiry;
const refreshTokenExpiry = process.env.REFRESH_TOKEN_EXPIRY || '60d';
exports.refreshTokenExpiry = refreshTokenExpiry;
//# sourceMappingURL=jwt.config.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const requestOrigin = process.env.ORIGIN || '*';
const corsOption = {
    origin: requestOrigin,
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
        'Authorization',
        'Content-Security-Policy',
    ],
    exposedHeaders: 'Content-Security-Policy',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
};
exports.default = corsOption;
//# sourceMappingURL=cors.config.js.map
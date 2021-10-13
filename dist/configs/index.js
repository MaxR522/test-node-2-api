"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = exports.port = void 0;
require('dotenv').config();
const port = parseInt(process.env.PORT || '7777');
exports.port = port;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const env = process.env.NODE_ENV;
exports.env = env;
//# sourceMappingURL=index.js.map
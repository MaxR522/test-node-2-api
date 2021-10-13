"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDBURI = exports.mongoOptions = void 0;
require('dotenv').config();
const index_1 = require("./index");
if (index_1.env === 'test') {
    process.env.MONGOOSE_URL = process.env.MONGODB_URI_TEST;
}
else {
    process.env.MONGOOSE_URL = process.env.MONGODB_URI;
}
const mongoOptions = {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4,
};
exports.mongoOptions = mongoOptions;
const mongoDBURI = process.env.MONGOOSE_URL || '';
exports.mongoDBURI = mongoDBURI;
//# sourceMappingURL=mongo.config.js.map
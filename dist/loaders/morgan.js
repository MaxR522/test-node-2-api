"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const morgan = require("morgan");
const winston_1 = require("./winston");
const stream = {
    write: (message) => winston_1.default.http(message),
};
const morganMiddleware = morgan(':method :url :status :res[content-length] from: :remote-addr - :response-time ms ', { stream });
exports.default = morganMiddleware;
//# sourceMappingURL=morgan.js.map
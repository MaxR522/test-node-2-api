"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const BlacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        require: true,
        unique: true,
    },
}, { timestamps: true });
const BlacklistToken = mongoose.model('BlacklistToken', BlacklistTokenSchema);
exports.default = BlacklistToken;
//# sourceMappingURL=blacklist_token.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        max: 255,
    },
    lastname: {
        type: String,
        required: true,
        max: 255,
    },
    email: {
        trim: true,
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'others'],
    },
    attemptLogin: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });
UserSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password'))
        return next();
    bcrypt.genSalt(10, (err, salt) => {
        if (err)
            return next(err);
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err)
                return next(err);
            user.password = hash;
            next();
        });
    });
});
const User = mongoose.model('User', UserSchema);
exports.default = User;
//# sourceMappingURL=user.js.map
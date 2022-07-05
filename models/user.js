"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Module dependencies.
 */
const mongoose_1 = require("mongoose");
const validator_1 = __importDefault(require("validator"));
/**
 * Модель пользователя
 */
const userSchema = new mongoose_1.Schema({
    login: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, validate: {
            validator: validator_1.default.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false
        }
    },
    password: { type: String, required: true },
    name: { type: String, required: true, unique: false },
    surname: { type: String, required: false, unique: false },
    patronymic: { type: String, required: false, unique: false },
    age: { type: Number, required: false, unique: false },
    created: Date
});
const user = (0, mongoose_1.model)('user', userSchema);
exports.default = user;

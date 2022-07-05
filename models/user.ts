/**
 * Module dependencies.
 */
import {model, Schema} from "mongoose";
import validator from 'validator';

/**
 * Модель пользователя
 */
const userSchema = new Schema({
    login: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true, validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false
        }
    },
    password: {type: String, required: true},
    name: {type: String, required: true, unique: false},
    surname: {type: String, required: false, unique: false},
    patronymic: {type: String, required: false, unique: false},
    age: {type: Number, required: false, unique: false},
    created: Date
})

const user = model('user', userSchema)
export default user

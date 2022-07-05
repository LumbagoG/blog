"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = __importDefault(require("../models/user"));
const router = (0, express_1.Router)();
router.post('/reg', [
    (0, express_validator_1.check)('login', 'Некорректный логин').notEmpty(),
    (0, express_validator_1.check)('email', 'Некорректный email').notEmpty().isEmail(),
    (0, express_validator_1.check)('name', 'Некорректное имя').notEmpty(),
    (0, express_validator_1.check)('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 }).notEmpty()
], async (req, res) => {
    try {
        // Errors
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'
            });
        }
        // Data to frontend
        const { login, email, name, password } = req.body;
        // Проверка на существование пользователя
        const candidateLogin = await user_1.default.findOne({ login });
        const candidateEmail = await user_1.default.findOne({ email });
        if ((candidateLogin || candidateEmail) || (candidateLogin && candidateEmail)) {
            return res.status(400).json({ message: 'Такой пользователь уже существует' });
        }
        // Хэширование
        const hashedPassword = await bcryptjs_1.default.hash(password, 12);
        // Создание пользователя
        const user = new user_1.default({ login, email, name, password: hashedPassword });
        await user.save();
        // Оповещение о создании пользователя
        res.status(400).json({ message: 'Пользователь создан' });
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' + `${e}` });
    }
});
exports.default = router;

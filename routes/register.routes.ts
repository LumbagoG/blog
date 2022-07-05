/**
 * Module dependencies.
 */
import {Router} from "express";
import {check, validationResult} from 'express-validator'
import bcrypt from 'bcryptjs';

// Import models
import User from '../models/user'

const router = Router();

/**
 * Роутер регистрации пользователя
 */
router.post('/reg', [
    check('login', 'Некорректный логин').notEmpty(),
    check('email', 'Некорректный email').notEmpty().isEmail(),
    check('name', 'Некорректное имя').notEmpty(),
    check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6}).notEmpty()
],
async (req: any, res: any) => {
    try {
        // Errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'
            })
        }

        // Data to frontend
        const {login, email, name, password} = req.body;

        // Проверка на существование пользователя
        const candidateLogin = await User.findOne({login});
        const candidateEmail = await User.findOne({email});
        if ((candidateLogin || candidateEmail) || (candidateLogin && candidateEmail)) {
            return res.status(400).json({message: 'Такой пользователь уже существует'})
        }

        // Хэширование
        const hashedPassword = await bcrypt.hash(password, 12);

        // Создание пользователя
        const user = new User({login, email, name, password: hashedPassword})
        await user.save()

        // Оповещение о создании пользователя
        res.status(400).json({message: 'Пользователь создан'})

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова' + `${e}`})
    }
})

export default router;

import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import * as jwt from 'jsonwebtoken'
import config from "../config/config";
class AuthController {

    static async login(req: Request, res: Response) {
        const { email, password } = req.body;
        if (!(email && password)) return res.status(400).json({ message: 'Email & Password are required!' })
        let user: User
        try {
            const userRepo = AppDataSource.getMongoRepository(User)
            user = await userRepo.findOneOrFail({ where: { email } })
        } catch (error) {
            return res.status(400).json({ message: 'Email not fount!' })
        }
        if (!user.checkPassword(password)) return res.status(400).json({ message: 'Password is incorrect!' })
        const token = jwt.sign({ userId: user.id, email: user.email }, config.jwtSecret || process.env.JWT_secret, { expiresIn: '1h' })
        return res.status(200).json({ message: 'OK', token })
    }
}
export default AuthController;
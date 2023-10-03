import { Request, Response } from "express";
import { User } from "../entity/User";
import { validate } from "class-validator";
import { AppDataSource } from "../data-source";

export class UserController {

    static newUser = async (req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body;
            const user = new User();
            user.name = name;
            user.email = email;
            user.password = password;
            const validationOpt = { validationError: { target: false, value: false } }
            const errors = await validate(user, validationOpt)
            if (errors.length > 0) return res.status(400).json(errors)
            const userRepo = AppDataSource.getMongoRepository(User)
            user.hashPassword()
            await userRepo.save(user)
            return res.status(200).json(user)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    

}
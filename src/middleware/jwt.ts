import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken'
import config from "../config/config";
export const checkJwt= (req: Request, res: Response, next: NextFunction) => {

    const token = <string>req.headers["auth"];
    let jwtPayload;
    try {
        jwtPayload = jwt.verify(token, config.jwtSecret || process.env.JWT_secret);
    } catch (error) {
        return res.status(401).json({ message: 'Not authorized!' })
    }
    const {userId, email} = jwtPayload
    // const newToken=jwt.sign({userId, email}, config.jwtSecret || process.env.JWT_secret, {expiresIn:'1h'})
    next()
}
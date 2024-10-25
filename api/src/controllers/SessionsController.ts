import { Request, Response, NextFunction } from 'express';
import { AppError } from '@/utils/AppError';
import { knex } from "../database/knex";
import bcrypt from "bcrypt";

import { authConfig } from '@/configs/auth';
import { sign } from 'jsonwebtoken';



class SessionsController {
    async create(request: Request, response: Response, next: NextFunction) {
        try {
            
            const { email, password } = request.body;
            
            const user = await knex<UsersRepository>("users").where({ email }).first();

            if (!user) {
                throw new AppError("Email or password incorrect", 401);
            }

            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                throw new AppError("Email or password incorrect", 401);
            }
            
            const { secret, expiresIn } = authConfig.jwt;

            const token = sign({ role: user.role }, secret, {
                expiresIn,
                subject: String(user.id),
            });
            
            return response.json({ token, user });
        } catch (error) {
            next(error);
        }
    }
}

export { SessionsController };
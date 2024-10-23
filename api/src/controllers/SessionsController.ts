import { AppError } from '@/utils/AppError';
import { Request, Response, NextFunction } from 'express';

import { authConfig } from '@/configs/auth';
import { sign } from 'jsonwebtoken';



class SessionsController {
    async create(request: Request, response: Response, next: NextFunction) {
        try {
            
            const { username, password } = request.body;
            
            const fakeUser = {
                id: 1,
                username: "admin",
                password: "123456",
                role: "customer",
            }
            
            if (username !== fakeUser.username || password !== fakeUser.password) {
                throw new AppError("Incorrect username or password", 401);
            }
            
            const { secret, expiresIn } = authConfig.jwt;

            const token = sign({ role: fakeUser.role }, secret, {
                expiresIn,
                subject: String(fakeUser.id),
            });
            
            return response.json({ token });
        } catch (error) {
            next(error);
        }
    }
}

export { SessionsController };
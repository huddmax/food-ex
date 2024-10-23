import { Request, Response, NextFunction } from "express";
import { knex } from "../database/knex";
import { z } from "zod";
import { AppError } from "@/utils/AppError";
import bcrypt from "bcrypt";

class UsersController {
    async create(request: Request, response: Response, next: NextFunction) { 
        try {
            const bodySchema = z.object({
                name: z.string().trim().min(3).max(100),
                email: z.string().email(),
                password: z.string().min(3),
            });
            
            const { name, email, password } = bodySchema.parse(request.body);

            if (name.toLocaleLowerCase() === "admin") {
                throw new AppError("Invalid user name", 400);
             }


            const existingUser = await knex<UsersRepository>('users').where({ email }).first();
             
            if (existingUser) { 
                throw new AppError("User already exists", 409);
            };

            const hashedPassword = await bcrypt.hash(password, 10);


            await knex<UsersRepository>("users").insert({
                name,
                email,
                password: hashedPassword,
            });
            return response.status(201).json({ message: "User created" });
        } catch (error) {
            next(error);
        }
    }
}


export { UsersController };
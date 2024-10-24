import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { knex } from "@/database/knex";
import { AppError } from "@/utils/AppError";

class DishesController {
    
    /*
    Controllers devem ter no máximo 5 métodos:
    
    * index - GET para listar vários registros.
    * show - GET para exibir um registro específico.
    * create - POST para criar um registro.
    * update - PUT para atualizar um registro.
    * remove - DELETE para deletar um registro.
    */
   
   async index(request: Request, response: Response, next: NextFunction) {
    
       try {

           const { name } = request.query;
           
           const dishes = await knex<DishRepository>("dishes").select().whereILike("name", `%${name ?? ""}%`).orderBy("name");
           
           return response.status(200).json(dishes);
        
       } catch (error) { 
            next(error);
       }
       
    }
    
    async create(request: Request, response: Response, next: NextFunction) {

        try {

            
            const bodySchema = z.object({
                name: z.string().trim().min(3),
                price: z.number().gt(0, { message: "Price must be greater than 0" }),
                description: z.string().trim().min(12),
                category: z.string().trim(),
            })
            
            const { name, price, description, category } = bodySchema.parse(request.body);
            
            const dishExists = await knex<DishRepository>("dishes").select("id").where({ name }).first();
            
            if (dishExists) {
                return response.status(409).json({ message: "Dish already exists" });
            }

            await knex<DishRepository>("dishes").insert({ name, price, description, category });
            return response.status(201).json({ message: `Dish created successfully \n ${request.user?.role}` });
            
        } catch (error) { 
            next(error);
        }
    }
        
    async update(request: Request, response: Response, next: NextFunction) {
        try {
            const id = z.string()
                .transform((value) => Number(value))
                .refine((value) => !isNaN(value), { message: "id must be a number" })
                .parse(request.params.id);

            const bodySchema = z.object({
                name: z.string().trim().min(3),
                price: z.number().gt(0, { message: "Price must be greater than 0" }),
                description: z.string().trim().min(12),
                category: z.string().trim(),
            })
            
            const { name, price, description, category } = bodySchema.parse(request.body);

            
            const dishExists = await knex<DishRepository>("dishes")
            .select('id')
            .where({ id })
            .first();  // Traz o primeiro resultado

            if (!dishExists) {
                throw new AppError("Dish not found", 404);
            }
            
            
            await knex<DishRepository>("dishes").update({ name, price, description, category }).where({ id })
            return response.status(200).json();
        
        } catch (error) {
            next(error);
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        try {
            const id = z.string()
                .transform((value) => Number(value))
                .refine((value) => !isNaN(value), { message: "id must be a number" })
                .parse(request.params.id);

            const dishExists = await knex<DishRepository>("dishes")
                .select('id')
                .where({ id })
                .first();  // Traz o primeiro resultado

            if (!dishExists) {
                throw new AppError("Dish not found", 404);
            }

            await knex<DishRepository>("dishes").delete().where({ id });
            return response.status(200).json({ message: "Dish deleted successfully" });
        
        } catch (error) {
            next(error);
        }
    }
   
   
}



export { DishesController }
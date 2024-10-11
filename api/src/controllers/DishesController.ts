import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { z } from "zod";
import { knex } from "@/database/knex";

class DishesController {
    
    /*
    Controllers devem ter no máximo 5 métodos:
    
    * index - GET para listar vários registros.
    * show - GET para exibir um registro específico.
    * create - POST para criar um registro.
    * update - PUT para atualizar um registro.
    * remove - DELETE para deletar um registro.
    */
   
   async index(request: Request, response: Response) {
    
       try {
           const dishes = await knex("dishes").select().orderBy("name");
           
           return response.status(200).json(dishes);
        
       } catch (error) { 
            return response.status(500).json({ message: (error as Error).message });
       }
       
    }
    
    async create(request: Request, response: Response) {

        try {
            const { name, price, description, category } = request.body;

            await knex("dishes").insert({ name, price, description, category });
        
            return response.status(201).json();
            
        } catch (error) { 
            return response.status(500).json({ message: (error as Error).message });
        }
        
        // try {
        //     console.log("Passou pelo DishesController");
        //     const bodySchema = z.object({
        //         user: z
        //         .string({ required_error: "User is required!" })
        //         .trim()
        //         .min(3, { message: "User Must be 3 or more characters" }),
                
        //         price: z.number().positive({ message: "Price must be positive" }).nullish(),
        //     });
            
        //     const { user } = bodySchema.parse(request.body);
            
        //     response.status(201).json({ user, user_id: request.user_id });

        // } catch (error) {
        //     return response.status(500).json({ message: (error as Error).message });
        // }
    }
        
        
    async update(request: Request, response: Response, next: NextFunction) {
                try {
        
                    const { name } = request.body;
                    const { id } = request.params;
        
                    // await knex("dishes").update({ name }).where({ id })
                    console.log(`Name: ${name} \n id: ${id}`);
        
                    return response.status(201).json({ message: "Dish updated!" });
        
                } catch (error) {
                    // next(error);
                    throw new AppError("Error updating dish", 500);
                }
    }
   
}



export { DishesController }
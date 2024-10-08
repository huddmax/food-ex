import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { z } from "zod";

class DishesController {

    async update(request: Request, response: Response, next: NextFunction) {
        try {

            const { name } = request.body;
            return response.status(201).json({ message: "Dish updated!" });

        } catch (error) {
            next(error);
        }
    }

    /*
        Controllers devem ter no máximo 5 métodos:

        * index - GET para listar vários registros.
        * show - GET para exibir um registro específico.
        * create - POST para criar um registro.
        * update - PUT para atualizar um registro.
        * remove - DELETE para deletar um registro.
    */
    
    index(request: Request, response: Response) {

        const { user, limit } = request.query;

        console.log("Método GET foi chamado");

        response.send(`Usuário: ${user} \n limit: ${limit}` );

    
    }

    create(request: Request, response: Response) {

        const bodySchema = z.object({
            user: z
                .string({ required_error: "User is required!" })
                .trim()
                .min(3, { message: "User Must be 3 or more characters" }),
            
            price: z.number().positive({ message: "Price must be positive"}).nullish(),
        })

        const { user } = bodySchema.parse(request.body)


        // const { user } = request.body;

        // if (!user || user === true) {
        //     throw new AppError("Nome do usuário é obrigatório!")
        // }

        console.log("Método POST foi chamado");
        response.status(201).json({ user, user_id: request.user_id});
    }

   
}



export { DishesController }
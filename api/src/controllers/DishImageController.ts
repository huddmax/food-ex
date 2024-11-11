import { Request, Response, NextFunction } from 'express';
import { knex } from "../database/knex";
import { AppError } from '@/utils/AppError';
import { DiskStorage } from '@/providers/DiskStorage';

class DishImageController {
    async update(request: Request, response: Response, next: NextFunction) {
        const dish_id = request.params.id;
        const imageFilename = request.file?.filename;

        try {
            const dish = await knex('dishes').where({ id: dish_id }).first();

            if (!dish) {
                throw new AppError('Dish not found', 404);
            }

            const diskStorage = new DiskStorage();

            if (dish.image) {
                await diskStorage.deleteFile(dish.image);
            }

            if (!imageFilename) {
                throw new AppError('Image file is required', 400);
            }

            const filename = await diskStorage.saveFile(imageFilename);
            dish.image = filename;

            await knex("dishes").update(dish).where({ id: dish_id });

            return response.json(dish);
        } catch (error) {
            next(error);
        }
    }
    
    async create(request: Request, response: Response, next: NextFunction) { 
        const imageFilename = request.file?.filename;

    try {
        // Verifique se o arquivo foi enviado
        if (!imageFilename) {
            throw new AppError('Image file is required', 400);
        }

        // Salve o arquivo no sistema de arquivos
        const diskStorage = new DiskStorage();
        const filename = await diskStorage.saveFile(imageFilename);

        // Retorne o caminho da imagem para que ele possa ser usado na criação do prato
        const imageUrl = `/files/${filename}`; // Ajuste para o path real no servidor

        return response.status(201).json({ imageUrl });
    } catch (error) {
        next(error);
    }
}
    

}

export { DishImageController };
import { knex } from "@/database/knex";
import { AppError } from "@/utils/AppError";
import { Request, Response, NextFunction } from "express";
import { z } from "zod";

class TagsController {

    async show(request: Request, response: Response, next: NextFunction) { 
        try {
            const id = z.string()
                .transform((value) => Number(value))
                .refine((value) => !isNaN(value), { message: "id must be a number" })
                .parse(request.params.id);

            const tag = await knex<TagsRepository>("tags").select().where({ dish_id: id });

            if (!tag) {
                throw new AppError("tag dont exists", 404);
            }

            return response.status(200).json(tag);

        } catch (error) {
            next(error);
        }
    }

    async index(request: Request, response: Response, next: NextFunction) {
        try {
            const { name } = request.query;

            const tags = await knex<TagsRepository>("tags")
                .select()
                .whereILike("name", `%${name ?? ""}%`)
                .orderBy("name");

            return response.status(200).json(tags);
            
        } catch (error) {
            next(error);
        }
    }

    async create(request: Request, response: Response, next: NextFunction) {
        try {

            const bodySchema = z.object({
                name: z.string().trim().min(5),
                dish_id: z.number().positive(),
            });
            
            const { name, dish_id } = bodySchema.parse(request.body);

            const tagExists = await knex<TagsRepository>("tags").select("id").where({ name }).first();

            if (tagExists) {
                return response.status(409).json({ message: "Tag already exists" });
            }

            await knex<TagsRepository>("tags").insert({ name, dish_id });

            return response.status(201).json();

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
                name: z.string().trim().min(5)
            })

            const { name } = bodySchema.parse(request.body);

            const tagExists = await knex<TagsRepository>("tags").select("id").where({ id }).first();
            console.log(tagExists);

            if (!tagExists) {
                throw new AppError("tag dont exists", 404);
            }


            await knex<TagsRepository>("tags").update({ name }).where({ id });

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

            const tagExists = await knex<TagsRepository>("tags").select("id").where({ id }).first();

            if (!tagExists) {
                throw new AppError("tag dont exists", 404);
            }

            await knex<TagsRepository>("tags").delete().where({ id });

            return response.status(200).json();
        } catch (error) {
            next(error);
        }
    }

}


export { TagsController };
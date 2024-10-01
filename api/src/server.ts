import express, { Request, Response, NextFunction, response } from "express";
import { knex } from "./database/knex";
import { ZodError } from "zod";

import { routes } from "./routes";
import { AppError } from "./utils/AppError";

const PORT = 3333;
const app = express();

//Para devolver json no response
app.use(express.json());

// tiramos as rotas daqui e deixamos separadas!
app.use(routes);


app.post("/dishes", async (request: Request, response: Response) => {
    const { name, price, description, category } = request.body;

    await knex("dishes").insert({ name, price, description, category });
    // await knex.raw("INSERT INTO courses (name) VALUES (?)", [name]);

    return response.status(201).json();
});

app.get("/dishes", async (request: Request, response: Response) => {
    // const dishes = await knex.raw("SELECT * FROM dishes");

    const dishes = await knex("dishes").select().orderBy("name");
    
   return response.status(200).json(dishes)
})

app.put("/dishes/:id", async (request: Request, response: Response) => {
    
    const { name } = request.body;
    const { id } = request.params;

    await knex("dishes").update({ name }).where({ id })
    
   return response.json()
})

app.delete("/dishes/:id", async (request: Request, response: Response) => {
    const { id } = request.params;

    await knex("dishes").delete().where({ id });

    return response.json()
 })



/*
    Tipos de Erro:
    400 (Bad Request): Erro do cliente.
    500 (Internal Server Error): Erro interno do servidor.
*/

// esse tem que ficar abaxio de todos e logo acima do listen, para poder capturar os erros
app.use((error: any, request: Request, response: Response, _: NextFunction) => {
    
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({ message: error.message })
    }

    if (error instanceof ZodError) {
       return response.status(400).json({ message: "Validation error!", issues: error.format() })
    }

    response.status(500).json({ message: error.message });
})

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
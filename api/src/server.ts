import express, { Request, Response, NextFunction, response } from "express";
import { ZodError } from "zod";

import { routes } from "./routes";
import { AppError } from "./utils/AppError";

const PORT = 3333;
const app = express();

//Para devolver json no response
app.use(express.json());

// tiramos as rotas daqui e deixamos separadas!
app.use(routes);






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
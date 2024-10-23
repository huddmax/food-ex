import express from "express";

import { routes } from "./routes";
import { errorHandler } from "./middlewares/errorHandler";

const PORT = 3333;
const app = express();

//Para devolver json no response
app.use(express.json());

// tiramos as rotas daqui e deixamos separadas!
app.use(routes);


let message = process.env.PGUSER;
        
  
// esse tem que ficar abaxio de todos e logo acima do listen, para poder capturar os erros
// passei a responsabilidade de tratar os erros para o errorHandler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
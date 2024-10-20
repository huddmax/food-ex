import { Router } from "express";

import { dishesRoutes } from "./dishes.routes";
import { tagsRoutes } from "./tags.routes";
import { myMiddleware } from "../middlewares/myMiddleware";

const routes = Router();

// usando o middleware global
routes.use(myMiddleware)



// aqui aponta pra onde as rotas devem ir
routes.use("/dishes", dishesRoutes)
routes.use("/tags", tagsRoutes)


export { routes }
import { Router } from "express";

import { appRoutes } from "./app.routes";
import { myMiddleware } from "../middlewares/myMiddleware";

const routes = Router();

// usando o middleware global
routes.use(myMiddleware)
// routes.use("/dishes", appRoutes)
routes.use("/users", appRoutes)


export { routes }
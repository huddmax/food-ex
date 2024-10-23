import { Router } from "express";

import { dishesRoutes } from "./dishes.routes";
import { tagsRoutes } from "./tags.routes";
import { sessionsRoutes } from "./sessions.routes";

// middlewares
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const routes = Router();

// usando o middleware globalmente
// routes.use(ensureAuthenticated)



// aqui aponta pra onde as rotas devem ir
routes.use("/dishes", dishesRoutes)
routes.use("/tags", tagsRoutes)
routes.use("/sessions", sessionsRoutes)


export { routes }
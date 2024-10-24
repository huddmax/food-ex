import { Router } from "express";
import { dishesRoutes } from "./dishes.routes";
import { tagsRoutes } from "./tags.routes";
import { sessionsRoutes } from "./sessions.routes";
import { usersRoutes } from "./users.routes";


const routes = Router();


// aqui aponta pra onde as rotas devem ir
routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRoutes);
routes.use("/dishes", dishesRoutes);
routes.use("/tags", tagsRoutes);


export { routes }
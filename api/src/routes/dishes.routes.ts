import { Router } from "express";
import { DishesController } from "../controllers/DishesController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { verifyUserAuthorization } from "../middlewares/verifyUserAuthorization";

const dishesRoutes = Router();

// Rotas dos Pratos("/dishes"), quando acessar a rota dishes, ele vai para o controller DishesController
const dishesController = new DishesController;

dishesRoutes.get("/", dishesController.index);

//Middleware deixando as rotas abaixo protegidas contra users não autenticados e users que não são admin
dishesRoutes.use(ensureAuthenticated, verifyUserAuthorization(["admin"]));
dishesRoutes.post("/", dishesController.create);
dishesRoutes.put("/:id", dishesController.update);
dishesRoutes.delete("/:id", dishesController.remove);



export { dishesRoutes }
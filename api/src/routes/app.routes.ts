import { Router } from "express";
import { postMiddleware } from "../middlewares/postMiddleware";
import { DishesController } from "../controllers/DishesController";



const appRoutes = Router();

// Rotas dos Pratos("/dishes"), quando acessar a rota dishes, ele vai para o controller DishesController
const dishesController = new DishesController;
appRoutes.get("/", dishesController.index);
appRoutes.post("/", dishesController.create);
appRoutes.put("/:id", dishesController.update);



export { appRoutes }
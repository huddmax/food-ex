import { Router } from "express";
import { postMiddleware } from "../middlewares/postMiddleware";
import { DishesController } from "../controllers/DishesController";



const appRoutes = Router();

const dishesController = new DishesController;

appRoutes.get("/", dishesController.index);

appRoutes.post("/", postMiddleware, dishesController.create);
appRoutes.put("/", dishesController.update);

export { appRoutes }
import { Router } from "express";
import { DishesController } from "../controllers/DishesController";
import { DishImageController } from "../controllers/DishImageController";

import multer from "multer";
import { uploadConfig } from "../configs/upload";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { verifyUserAuthorization } from "../middlewares/verifyUserAuthorization";

const dishesRoutes = Router();
const upload = multer(uploadConfig.MULTER);

// Rotas dos Pratos("/dishes"), quando acessar a rota dishes, ele vai para o controller DishesController
const dishesController = new DishesController;

//Middleware deixando as rotas abaixo protegidas contra users não autenticados
dishesRoutes.use(ensureAuthenticated);
// todos logados acessam o get
dishesRoutes.get("/", dishesController.index);

//Middleware deixando as rotas abaixo protegidas contra users que não são admin
dishesRoutes.use(verifyUserAuthorization(["admin"]));

// somente admin acessam o post, put e delete
dishesRoutes.post("/", dishesController.create);
dishesRoutes.delete("/:id", dishesController.remove);
dishesRoutes.put("/:id", dishesController.update);


const dishImageController = new DishImageController;

dishesRoutes.patch("/image/:id", upload.single("image"), dishImageController.update);




export { dishesRoutes }
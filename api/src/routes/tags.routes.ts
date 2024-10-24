import { Router } from "express";
import { TagsController } from "../controllers/TagsController";
import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";

const tagsRoutes = Router();

const tagsController = new TagsController;

// Midleware para proteger as rotas abaixo contra usuários não autenticados
tagsRoutes.use(ensureAuthenticated);

// Qualquer user pode acessar a rota get
tagsRoutes.get("/", tagsController.index);

// Midleware para proteger as rotas abaixo contra usuários que não tem a role: "admin"
tagsRoutes.use(verifyUserAuthorization(["admin"]));
// Somente usuários com a role "admin" podem acessar as rotas post, put e delete
tagsRoutes.post("/", tagsController.create);
tagsRoutes.put("/:id", tagsController.update);
tagsRoutes.delete("/:id", tagsController.remove);



export { tagsRoutes };
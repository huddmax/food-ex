import { Router } from "express";
import { TagsController } from "../controllers/TagsController";

const tagsRoutes = Router();

const tagsController = new TagsController;

tagsRoutes.get("/", tagsController.index);
tagsRoutes.post("/", tagsController.create);
tagsRoutes.put("/:id", tagsController.update);
tagsRoutes.delete("/:id", tagsController.remove);



export { tagsRoutes };
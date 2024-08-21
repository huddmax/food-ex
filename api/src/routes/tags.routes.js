const { Router } = require("express");

const TagsController = require("../controllers/TagsController");
const ensureAutenticated = require("../middlewares/ensureAutenticated");

const tagsRouters = Router();

const tagsController = new TagsController();


tagsRouters.get("/", ensureAutenticated, tagsController.index);



module.exports = tagsRouters;
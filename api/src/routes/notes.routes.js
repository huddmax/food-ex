const { Router } = require("express");

const NotesController = require("../controllers/NotesController");
const ensureAutenticated = require("../middlewares/ensureAutenticated");

const notesRouters = Router();

const notesController = new NotesController();

// vantagem de dividir as coisas é poder aplicar o middleware em todas as rotas de uma vez
notesRouters.use(ensureAutenticated);


notesRouters.post("/", notesController.create);
notesRouters.get("/:id", notesController.show);
notesRouters.delete("/:id", notesController.delete);
notesRouters.get("/", notesController.index);


module.exports = notesRouters;
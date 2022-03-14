const AuthorController = require("../controllers/author.controller")

module.exports = (app) => {
    app.post("/api/authors",AuthorController.createAuthor);
    app.get("/api/authors", AuthorController.getAllAuthors);
    app.get("/api/authors/:id",AuthorController.getOneAuthor);
    app.delete("/api/authors/:id", AuthorController.deleteOneAuthor);
    app.put("/api/authors/:id", AuthorController.updateAuthor);
}
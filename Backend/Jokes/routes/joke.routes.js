const jokeController = require("../controllers/joke.controller")

module.exports = (app) => {
    app.get("/api/jokes", jokeController.getAllJokes);
    app.get("/api/jokes/:id", jokeController.getSingleJoke);
    app.post("/api/jokes",jokeController.createJoke);
    app.delete("/api/jokes/:id",jokeController.deleteOneJoke);
    app.put("/api/jokes/:id",jokeController.updateOneJoke);
}


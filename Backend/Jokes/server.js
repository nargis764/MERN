const express = require("express")

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//running the mongoose config code
require("./config/mongoose.config")

const jokeRoutes = require("./routes/joke.routes");
jokeRoutes(app);

app.listen(8000,() => console.log("Server connected on port 8000"))
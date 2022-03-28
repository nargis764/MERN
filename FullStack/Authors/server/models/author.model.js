const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type:String,
        minlength:[3, "Author names should be at least 3 characters long"],
        unique:[true, "The author exists"]     
    }
}, {timestamps:true});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
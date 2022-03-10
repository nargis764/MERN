const mongoose=require("mongoose")

const JokeSchema = new mongoose.Schema({
    name:{
        type:String
    }
},{timestamps:true})

const JokeModel = mongoose.model("Joke", JokeSchema);

module.exports = JokeModel;
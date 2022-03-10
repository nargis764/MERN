const JokeModel = require("../models/joke.model")

module.exports = {
getAllJokes: (req,res) => {
    JokeModel.find()
        .then((allJokes) => {
            console.log(allJokes);
            return res.json(allJokes)
        })
        .catch((err) => console.log(err))
},
getSingleJoke: (req,res) => {
    JokeModel.findOne({_id:req.params.id})
        .then((singleJoke) => {
            console.log(singleJoke);
            return res.json(singleJoke);
        })
        .catch((err) => console.log(err))
},
createJoke: (req,res) => {
    JokeModel.create(req.body)
        .then((newJoke) => {
            console.log(newJoke);
            res.json(newJoke);
        })
        .catch((err)=>console.log(err))
},
deleteOneJoke: (req,res) => {
    JokeModel.deleteOne({_id:req.params.id})
            .then((deletedJoke) => {
                console.log(deletedJoke);
                res.json(deletedJoke);
            })
            .catch((err) => console.log(err))
},
updateOneJoke: (req,res) => {
    JokeModel.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
            .then((updateJoke) => {
                console.log(updateJoke);
                res.json(updateJoke);
            })
            .catch((err) => console.log(err))
}

}


const Author = require("../models/author.model")

module.exports = {
    createAuthor: (req,res) => {
        Author.create(req.body)
            .then((newAuthor) => {
                console.log(newAuthor)
                res.json(newAuthor)
            })
            .catch((err) => {
                console.log(err)
                res.status(400).json(err);
            })
    },
    getAllAuthors: (req,res) => {
        Author.find()
            .then((allAuthors) => {
                console.log(allAuthors);
                res.json(allAuthors)
            })
            .catch((err) => console.log(err))
    },
    getOneAuthor: (req,res) => {
        Author.findById()
            .then((oneAuthor) => {
                console.log(oneAuthor);
                res.json(oneAuthor)
            })
            .catch((err) => console.log(err))
    },
    deleteOneAuthor: (req,res) => {
        Author.deleteOne({_id:req.params.id})
            .then((deletedAuthor) => {
                console.log(deletedAuthor);
                res.json(deletedAuthor)
            })
            .catch((err) => console.log(err))
    },
    updateAuthor: (req,res) => {
        Author.updateOne({_id:req.params.id}, req.body, {new:true,runValidators:true})
            .then((updateAuthor) => {
                console.log(updateAuthor)
                res.json(updateAuthor)
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err)
            })
    }
}
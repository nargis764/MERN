const Product = require("../models/product.model")

module.exports = {
    createProduct: (req,res) => {
        Product.create(req.body)
            .then((newProduct) => {
                console.log(newProduct)
                res.json(newProduct)
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    getAllProducts: (req,res) => {
        Product.find()
        .then((allProducts) => {
            console.log(allProducts);
            res.json(allProducts)
        })
        .catch((err) => console.log(err))
},
getOneProduct: (req,res) => {
        Product.findById({_id:req.params.id})
            .then((oneProduct) => {
                console.log(oneProduct)
                res.json(oneProduct)
            })
            .catch((err) => console.log(err))
    },
    deleteOneProduct: (req,res) => {
        Product.deleteOne({_id:req.params.id})
            .then((deletedProduct) => {
                console.log(deletedProduct)
                res.json(deletedProduct)
            })
            .catch((err) => console.log(err))
    },
    updateProduct: (req,res) => {
        Product.updateOne({_id:req.params.id},req.body,{new:true,runValidators:true})
            .then((updateProduct) => {
                console.log(updateProduct)
                res.json(updateProduct)
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    }
}
const Product = require('../models/products')

const productController = {}

productController.list = (req, res) => {
    Product.find({ user: req.user._id })
        .then((product) => {
            res.json(product)
        })
        .catch((err) => {
            res.json(err)
        })
}

productController.show = (req, res) => {
    const id = req.params.id
    Product.findOne({ _id: id, user: req.user._id,business:req.params.businessId })
        .then((product) => {
            if (product) {
                res.json(product)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

productController.create = (req,res) => {
    const body = req.body
    const product = new Product(body)
    product.user = req.user._id
    product.business = req.params.businessId
    product.save()
        .then((product) => {res.json(product)})
        .catch((err) => {res.json(err.message)})
}

productController.update = (req,res) => {
    const body = req.body
    Product.findOneAndUpdate({ _id: id, user: req.user._id}, body, { new: true, runValidators: true })
        .then((product) => {
            res.json(product)
        })
        .catch((err) => {
            res.json(err)
        })
}

productController.destory = (req, res) => {
    const id = req.params.id
    Product.findOneAndDelete({ _id: id, user: req.user._id})
        .then((product) => {
            res.json(product)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = productController
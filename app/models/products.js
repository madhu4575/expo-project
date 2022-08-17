const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productsSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        requried:true,
        ref:'User'
    },
    business:{
        type:Schema.Types.ObjectId,
        requried:true,
        ref:'Business'
    },
    name:{
        type:String,
        requried:[true,'Name of the product']
    },
    discription:{
        type:String,
        requried:true
    },
    price:{
        type:Number,
        requried:true
    },
    discountedPrice:{
        type:Number
    },
    imageUrl:{
        type:String
    }
})

const Product = mongoose.model('Product' , productsSchema)

module.exports = Product
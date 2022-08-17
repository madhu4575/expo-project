const mongoose = require('mongoose')
const Schema = mongoose.Schema

const businessSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    expo:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Expo'
    },
    businessName:{
        type:String,
        required:[true,'business name is requried']
    },
    about:{
        type:String,
        required:[true,'About the business is requried']
    },
    zoom:{
        type:String,
    },
    imageUrl:{
        typoe:String
    },
    telegramLink:{
        type:String
    },
    websiteLink:{
        type:String,
        requried:[true,'Link to your website is requried']
    },
    businessYears:{
        type:Number,
        requried:[true,'Give the years in the industry and experience in years ']
    },
    videoUrl:{
        type:String
    }
})

const Business = mongoose.model('Business' , businessSchema)

module.exports = Business
const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')
const Schema = mongoose.Schema

const expoSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    expoName:{
        type:String,
        required:true
    },
    isActive:{
        type:String,
        enum:['completed','ongoing','upcoming']
    },
    startDate:{
        type:Date,
        default:Date()
    },
    endDate:{
        type:Date,
        required:[true,'Please enter the end date']
    },
    imageUrl:{
        type:String
    }
},{timestamps:true})

expoSchema.plugin(mongoose_delete)

const Expo = mongoose.model('Expo',expoSchema)

module.exports = Expo


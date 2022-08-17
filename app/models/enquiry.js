const mongoose  = require('mongoose')
const {default: isEmail} = require('validator/lib/isEmail')
const Schema = mongoose.Schema

const enquirySchema = new Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    email:{
        type:String,
        required:[true,'email is required'],
        lowercase:true,
        validate:{
            validator:function(value){
                return isEmail(value)
            },
            message:function(){
                return 'invalid email format'
            }
        }
    },
    mobile:{
        type:Number,
        requried:[true,'Number is required']
    },
    product:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Product'
    },
    business:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Business'
    }
})

const Enquiry = mongoose.model('Enquiry',enquirySchema)

module.exports = Enquiry
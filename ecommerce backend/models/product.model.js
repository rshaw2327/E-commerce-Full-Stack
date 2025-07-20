const mongoose= require("mongoose");
// products:
// title ,description,category,price
const productsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"title required"],
        trim:true,
    },
    description :{
        type:String,
        trim:true,
    },
    category:{
        type:String,
        trim:true,
    },
    price:{
        type:Number,
        required:[true,"price required"],
        maxLength:4,
        minLength:1,    
    },
    stock:{
        type:Number,
        default:1,
        required:true,
    }

})
module.exports=mongoose.model("Products",productsSchema)
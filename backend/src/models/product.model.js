const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id : {type:String, required:true},
    name: {type:String, required:true},
    price: {type:Number, required:true},
    quantity:{type:String, required:true},
    image: {type:String, required:true},
    location: {type:String, required:true},
    description: [{ type: String, required: false }]
    
},{
    versionKey:false,
    timestamps:true
})

const Product = mongoose.model("product",productSchema);

module.exports = Product;
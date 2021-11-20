const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: String, required: true },
    image: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true
})

const Product = mongoose.model("product", productSchema);

module.exports = Product;
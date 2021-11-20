const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    imageUrl: { type: String, required: true },
    googleId: { type: String, required: true },
    name: { type: String, required: true },
   
}, {
    versionKey: false,
    timestamps: true
})


module.exports = mongoose.model("user", userSchema)

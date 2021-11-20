const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    imageUrl: { type: String, required: true },
    googleId: { type: String, required: true },
    name: { type: String, required: true },
    location: [{ type: String, required: false }],
    Products: [{ type: String, required: false }]

}, {
    versionKey: false,
    timestamps: true
})


module.exports = mongoose.model("vendor", userSchema)


//{ lat:asd
// long:sds
// time:asd
// }
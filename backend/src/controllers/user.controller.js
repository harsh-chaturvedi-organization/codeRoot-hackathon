const express = require("express")
const router = express.Router();

const User = require("../models/user.model")


router.post("/login", async (req, res) => {
    try {
        console.log(req.body.email)
        let user = await User.findOne({ email: req.body.email })
        if (!user) {
            user = await User.create({
                email: req.body.email,
                imageUrl: req.body.imageUrl,
                googleId: req.body.googleId,
                name: req.body.name,
            })
        }
        res.status(200).send(user);

    } catch (err) {
        console.log(err.message)
        res.status(401).send(err.message)
    }
})


module.exports = router
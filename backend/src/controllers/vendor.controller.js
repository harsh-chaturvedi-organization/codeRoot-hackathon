const express = require("express")
const router = express.Router();

const Vendor = require("../models/vendor.model")
const Product = require("../models/product.model.js")

router.post("/login", async (req, res) => {
    // console.log(req.body)
    try {
        let vendor = await Vendor.findOne({ email: req.body.email })
        if (!vendor) {
            vendor = await Vendor.create({
                email: req.body.email,
                imageUrl: req.body.imageUrl,
                googleId: req.body.googleId,
                name: req.body.name,
            })
        }

        let productDetails = []
        if (vendor.Products.length !== 0) {
            for (let i = 0; i < vendor.Products.length; i++) {
                let item = await Product.findOne({ _id: vendor.Products[i] }).lean().exec()
                productDetails.push(item)
            }
        }
        res.status(200).send({ vendor, productDetails });

    } catch (err) {
        console.log(err.message)
        res.status(401).send(err.message)
    }
})

router.put("/updateLocation", async (req, res) => {
    try {
        const vendor = await Vendor.findOneAndUpdate({ email: req.body.email }, {
            location: [req.body.lat, req.body.long],
            address: req.body.address
        }, { "new": true })
        // res.header("Access-Control-Allow-Methods", "PATCH").status(201).send(vendor);
        res.status(201).send(vendor)
    } catch (err) {
        res.status(400).send(err.mesage)
    }

})

router.get("/information/:email", async (req, res) => {
    try {
        const vendor = await Vendor.findOne({ email: req.params.email }).lean().exec();
        let productDetails = []
        if (vendor.Products.length !== 0) {
            for (let i = 0; i < vendor.Products.length; i++) {
                let item = await Product.findOne({ _id: vendor.Products[i] }).lean().exec()
                productDetails.push(item)
            }
        }
        res.status(200).send({ vendor, productDetails });
    } catch (err) {
        res.status(400).send(err.mesage)
    }
})

module.exports = router
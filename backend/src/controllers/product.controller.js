
// const { request } = require("express");
const express = require("express");
const router = express.Router();

//models
const Product = require("../models/product.model.js");
const Vendor = require("../models/vendor.model")

// <----------------------------------CRUD Operation for products----------------------------------->

// post products to the database 

router.post("/create", async function (req, res) {
    try {
        const product = await Product.create(req.body);
        let vendor = await Vendor.updateOne({ email: req.body.email }, { $push: { Products: product._id } })
        return res.status(201).send(product);
        // return res.status(201).send("success")
    }
    catch (err) {
        return res.status(400).send(err.product);
    }
})


// delete the products from the database

router.delete("/:id", async function (req, res) {
    try {
        const remove = await Product.findByIdAndDelete(req.params.id);

        let vendor = await Vendor.findOneAndUpdate({ email: req.body.email }, { $pull: { Products: `${req.params.id}` } }, { "new": true });

        // console.log(req.params.id)
        // let vendor = await Vendor.find({ email: req.body.email }).lean();

        // for (let key in vendor[0].Products) {
        //     console.log(key, vendor[0].Products[key])
        //     if (vendor[0].Products[key] === `new ObjectId("${req.params.id}")`) {
        //         console.log("got")
        //     }
        // }

        return res.status(204).send(remove);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

//export
module.exports = router;
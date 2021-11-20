
const multer = require("multer");
const upload = multer();
const express = require("express")
const router = express.Router()
// const uploadDrive = require("../middlewares/uploadDrive") 
const fs = require("fs");
const uploadFile = require('../middlewares/uploadfile')



//models
const Product = require("../models/product.model.js");
const Vendor = require("../models/vendor.model")

// <----------------------------------CRUD Operation for products----------------------------------->

// post products to the database 


router.post("/create",uploadFile.single("file"), async function (req, res) {
    console.log(req.file)
    try {
        // let uploadedFile = await uploadDrive(req.file.filename)
        const product = await Product.create({
            name: req.body.productName,
            price: req.body.price,
            quantity: req.body.quantity,
            image: req.file.filename

        });
        let vendor = await Vendor.updateOne({ email: req.body.email }, { $push: { Products: product._id } })
        return res.status(201).send(product);
        // return res.status(201).send("success")
    }
    catch (err) {
        fs.unlinkSync(req.file.path)
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
const express = require("express");
const app = express();
var cors = require('cors')
app.use(cors())
const port = 3002

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

const connect = require("./config/db")
const productController = require("./controllers/product.controller");
const userController = require("./controllers/user.controller")
const vendorController = require("./controllers/vendor.controller")
app.use(express.json())



app.use("/user", userController)
app.use("/vendor", vendorController)
app.use("/product", productController)


app.listen(port, async () => {
    await connect()
    console.log(`listening at port ${port}`)
})





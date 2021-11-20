const express = require("express");
const app = express();
var cors = require('cors')
app.use(cors())
const port = 3002

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





const express = require("express");
const app = express();
const port = 3002

const connect = require("./config/db")
const product = require("./controllers/product.controller");
const user = require("./controllers/user.controller")
app.use(express.json())

app.use("/login",product)
app.use("/userLogin",user) 


app.listen(port, async () => {
    await connect()
    console.log(`listening at port ${port}`)
})





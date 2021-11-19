const express = require("express");
const app = express();
const port = 3002

const connect = require("./config/db")

app.use(express.json())


app.listen(port, async () => {
    await connect()
    console.log(`listening at port ${port}`)
})





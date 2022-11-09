let express = require("express")
let connect = require("./src/config/db")
let userController=require("./src/controllers/auth.controller")
let app = express()
app.use(express.json())

app.use("/user",userController)
let Port = process.env.PORT || 8080

app.listen(Port,async()=>{
    await connect()
    console.log("listening on port 8080")
})
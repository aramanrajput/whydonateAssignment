let express = require("express")
let connect = require("./src/config/db")
let cors = require("cors")
let userController=require("./src/controllers/auth.controller")
let app = express()

let searchController = require("./src/controllers/search.controller")
app.use(express.json())

app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
    res.header("Access-Control-Allow-Private-Network", true);
    res.header("InsecurePrivateNetworkRequestsAllowed", true);
    next();
  });

app.use("/api",userController)

app.use("/api",searchController)



let Port = process.env.PORT || 8080

app.listen(Port,async()=>{
    await connect()
    console.log("listening on port 8080")
})
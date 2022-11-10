let express = require("express")

let {connect}=require("mongoose")
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
    await connect("mongodb://127.0.0.1:27017/tvapp",{useNewUrlParser:true,
    useUnifiedTopology:true
   },(err) => {
        if(err) {console.log(err) }
        else {console.log("mongdb is connected")}})
   
})
let express = require("express")

let {connect}=require("mongoose")
let cors = require("cors")

let app = express()


app.use(express.json())

app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
    res.header("Access-Control-Allow-Private-Network", true);
    res.header("InsecurePrivateNetworkRequestsAllowed", true);
    next();
  });
  connect("mongodb://127.0.0.1:27017/tvapp",{useNewUrlParser:true,
  useUnifiedTopology:true
 },(err) => {
      if(err) {console.log(err) }
      else {console.log("mongdb is connected")}})
  let Port = process.env.PORT || 8080
  
  
  app.listen(Port,async()=>{
     console.log("server is running on 8080")
     
  })

  let userController=require("./src/controllers/auth.controller")
  let searchController = require("./src/controllers/search.controller")
app.use("/api",userController)

app.use("/api",searchController)



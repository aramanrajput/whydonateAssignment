let {connect}=require("mongoose")


module.exports=()=>{connect("mongodb://127.0.0.1:27017/tvapp",{useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true},(err) => {
    if(err) console.log(err) 
    else console.log("mongdb is connected")})}
let express = require("express")
let User = require("../models/user.model")
let router = express.Router()

let bcrypt = require("bcryptjs")
let jwt = require("jsonwebtoken")



router.post("/login",async(req,res)=>{
    try{
       //check if user is using the right value
        const regex = new RegExp("^[a-zA-Z0-9]+$");

   
        if(req.body?.password?.length<8 && req.body?.password?.length>16 && !regex.test(req.body?.password) ){
//if value entered are incorrect send error
      return res.send(({error:true,message:"user authentication failed"}))
        }
   let user = {
    username:req.body.username,
    email:req.body.email,
    password:req.body.password
   }

//else generate a token and send to frontend along with user
    var token = jwt.sign({user}, 'secret');



    return res.send({error:false,data:{user,token},message:"logged in successfully"})
    }catch(e){
        return res.send({error:true,message:e.message})
    }

 
})

module.exports =router

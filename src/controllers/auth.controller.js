let express = require("express")
let User = require("../models/user.model")
let router = express.Router()

let bcrypt = require("bcryptjs")
let jwt = require("jsonwebtoken")



router.post("/login",async(req,res)=>{
    try{
        console.log(req.body)
    //check if user with the provided credentials exists in db or not
    var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync(req.body?.password, salt);


    let user = await User.create({
        username:req.body.username,
        email:req.body.email,
        password:hash
    })

   

   

//else generate a token and send to frontend along with user
    var token = jwt.sign({user}, 'secret');



    return res.send({error:false,data:{user,token},message:"logged in successfully"})
    }catch(e){
        return res.send({error:true,message:e.message})
    }

 
})

module.exports =router

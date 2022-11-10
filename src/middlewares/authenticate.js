let jwt = require("jsonwebtoken")

module.exports = (req,res,next)=>{
    try{
//check if token exist or not
let token = req.headers?.authorization
//if token doesn't exist return error
if(!token)return res.send({error:true,message:"token doesn't exist"})
if(token.startsWith("Bearer ")){
    var bearertoken = token.split(" ")[1]
}
else{
    res.send({error:true,message:"token is invalid"})
}

var decoded = jwt.verify(bearertoken, 'secret');
if(!decoded)res.send({error:true,message:"token is invalid"})

req.user=decoded
next()
    }catch(e){
return res.send({error:true,message:"User is not authenticated"})
    }

}
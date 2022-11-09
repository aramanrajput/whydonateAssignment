

let {Schema,model} = require("mongoose")


let userSchema = new Schema({
    username:{required:true,type:String},
    email:{required:true,type:String},
    password:{required:true,type:String}
})



module.exports= model("user",userSchema)
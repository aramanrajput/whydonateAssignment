const { model } = require("mongoose")

let {Schema,mode} =required("mongoose")


let userSchema = new Schema({
    username:{required:true,type:String},
    email:{required:true,type:String},
    password:{required:true,type:String}
})



module.exports= model(userSchema,"user")
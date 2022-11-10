let express=require("express")
let router = express.Router()


const fetch = require('node-fetch');
let authenticate = require("../middlewares/authenticate")

router.get("/search",authenticate,async(req,res)=>{
   
    try{
    let response=   await fetch(`https://api.tvmaze.com/search/shows?q=${req.query.query}`)
    let ans = await response.json()
    return res.send({error:false,data:ans})
    
        
            }catch(e){
        res.send({msg:e.message})
            }
})


module.exports = router
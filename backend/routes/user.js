const express = require('express')
const dbFun=require('../database/dbFun')

const router = express.Router()

router.post('/register',async(req,res)=>{
    try {
        let user= await dbFun.registerUser(req.body);
        if (user.status=='failed') {
           return res.status(404).json(user);   
        }
            res.status(200).json(user);         
    } catch (error) {
        res.status(500).json({status:"failed",message:"Internal error",error:error})
    }
});

router.post('/login',async(req,res)=>{
    try {
        let user= await dbFun.loginUser(req.body);
        if (user.status=='failed') {
           return res.status(404).json(user);   
        }
            res.status(200).json(user);         
    } catch (error) {
        res.status(500).json({status:"failed",message:"Internal error",error:error})
    }
});

router.get('/test',async(req,res)=>{
    let auth=dbFun.authUser(req.headers.authorization);
    if (auth.status=="failed") {
        
        return res.status(404).json(auth); 
    }
    return res.status(200).json(auth); 
});

module.exports = router
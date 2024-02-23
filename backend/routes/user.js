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

router.get('/test',dbFun.authUser,async(req,res)=>{
    return res.status(200).json({
        status:"Authorized",
        email:req.user.email,
        username:req.user.username,
        userID:req.user.userID

    }); 
});

module.exports = router
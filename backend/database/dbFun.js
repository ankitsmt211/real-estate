const mongoose = require('mongoose');
const usermodel=require('./models/user');
const jwt = require('jsonwebtoken');
const secretKey ="1fN9OhrYCu27bOnzNWT";

let tokenUser = (user) => {  
    let token=jwt.sign(user,secretKey);   
    return token;
}
let authUser=async(req,res,next)=>{ 
    try {
        let authHeader = req.headers.authorization; 

        // Bearer[space]tokenHere
        let token = authHeader && authHeader.split(' ')[1]
        if (!token) {
            
            return res.status(401).json({ status: "failed", message: "Token not provided" });
        }
        
        const data = jwt.verify(token, secretKey);
        

    let user =await usermodel.findOne({email: data.email });
    if (!user) {
        return res.status(404).json({ status: "failed", message: "User not found" });            
    } 
    req.user = user; 
    next() 
    } 
    catch (error) {
        return res.status(401).json({ status: "failed", message: error.message }) 
    }
}

let registerUser=async(data)=>{
    try {
        let user=await usermodel.create(data);
        return {status:"success",data:user}
    } catch (error) {
        return {status:"failed"}
    }
}
let loginUser=async(data)=>{
    try {
        let user=await usermodel.findOne(data);        
        if (!user) {
            return {status:"failed",message:"User not found"}            
        }
        
        let auth=tokenUser({email:user.email});
        return {status:"success",token:auth,data:user}   
            
    } catch (error) {
        console.log(error)
        return {status:"failed",message:"Internal error",error:error}
    }    
}
module.exports={registerUser,loginUser,authUser}





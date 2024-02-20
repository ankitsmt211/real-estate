const mongoose = require('mongoose');
const usermodel=require('./models/user');
const jwt = require('jsonwebtoken');
const secretKey ="1fN9OhrYCu27bOnzNWT";

let tokenUser = (user) => {  
    let token=jwt.sign(user.toJSON(),secretKey);   
    return token;
}
let authUser=(token)=>{ 
    try {
       
    let data=jwt.verify(token,secretKey);  
    return {status:"success",user:data}
    } catch (error) {
        return {status:"failed",error:error}  
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
        
        let auth=tokenUser(user);
        return {status:"success",token:auth,data:user}   
            
    } catch (error) {
        return {status:"failed",message:"Internal error",error:error}
    }    
}
module.exports={registerUser,loginUser,authUser}





const mongoose = require('mongoose');
const usermodel=require('./models/user');

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
        
        return {status:"success",data:user}   
            
    } catch (error) {
        return {status:"failed",message:"Internal error",error:error}
    }    
}
module.exports={registerUser,loginUser}





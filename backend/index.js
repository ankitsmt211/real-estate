const express = require('express')
const dbFun=require('./database/dbFun')

const app = express()
const PORT = 8080

app.get('/hello-server',(req,res)=>{
    res.send("hello from server")
});
    
app.post('/register',async(req,res)=>{
    try {
        let user= await dbFun.registerUser(req.body);
        if (user.status=='failed') {
           return res.status(404).json(user);   
        }
            res.status(200).json(user);         
    } catch (error) {
        res.status(404).json({status:"failed",message:"Internal error",error:error})
    }
});
app.get('/login',async(req,res)=>{
    try {
        let user= await dbFun.loginUser(req.body);
        if (user.status=='failed') {
           return res.status(404).json(user);   
        }
            res.status(200).json(user);         
    } catch (error) {
        res.status(404).json({status:"failed",message:"Internal error",error:error})
    }
});


app.listen(PORT, ()=>{
    console.log(`server is up on port : ${PORT}`)
})
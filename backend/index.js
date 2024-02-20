const express = require('express')
const userRoutes = require('../backend/routes/user')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use(userRoutes)
const PORT = 8080

app.get('/hello-server',(req,res)=>{
    res.send("hello from server")
});
    


mongoose.connect('mongodb://127.0.0.1:27017/testreal').then(successful=>{
    console.log("connected to db")
}).catch(err=>
    console.log("failed connection",err)
)



app.listen(PORT, ()=>{
    console.log(`server is up on port : ${PORT}`)
})
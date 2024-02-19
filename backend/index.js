const express = require('express')

const app = express()
const PORT = 8080

app.get('/hello-server',(req,res)=>{
    res.send("hello from server")
})


app.listen(PORT, ()=>{
    console.log(`server is up on port : ${PORT}`)
})
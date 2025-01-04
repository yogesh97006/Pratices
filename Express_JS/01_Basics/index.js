const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send("Thanks for visting to my website")
})

app.get("/about",(req,res)=>{
    res.send("This is About Pages ")
})

app.get('/Projects',(req,res)=>{
    res.send("These is a Project Page")
})

app.get("/Contact",(req,res)=>{
    res.send("These is a contact page")
})

app.listen(8000,()=>{
    console.log("The Server is Running on lcal host => " +`http://localhost:8000`);
})


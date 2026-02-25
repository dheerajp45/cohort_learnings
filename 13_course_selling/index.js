const express = require("express");
const app = express();
const port = 3000
app.get("/",function(req,res){
    res.send("<h1>hi hello from the server</h1>")
})

app.post("/user/signup",function(req,res){
})

app.post("/user/signin",function(req,res){
})

app.post("/user/purchases",function(req,res){
})

app.get("/courses",function(req,res){
})

app.get("/course/purchase",function(req,res){
})





app.post("/adminSignup",function(req,res){
})

app.post("/adminLogin",function(req,res){
})

app.post("/courseCreate",function(req,res){
})

app.delete("/courseDelete",function(req,res){
})

app.put("/addContent",function(req,res){
})




app.listen(port,()=>{
    console.log("server started on port 3000");
    
})
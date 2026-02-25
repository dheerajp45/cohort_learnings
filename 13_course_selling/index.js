const express = require("express");
const app = express();
const port = 3000
app.get("/",function(req,res){
    res.send("<h1>hi hello from the server</h1>")
})

app.listen(port,()=>{
    console.log("server started on port 3000");
    
})
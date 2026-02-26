const express = require("express");
const app = express();
const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const {adminRouter} = require("./routes/admin")
const port = 3000

app.get("/",function(req,res){
    res.send("<h1>hi hello from the server</h1>")
})


app.use("/user",userRouter)
app.use("/course",courseRouter)
app.use("/admin",adminRouter)


app.listen(port,()=>{
    console.log("server started on port 3000");
    
})
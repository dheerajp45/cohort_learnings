const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")

const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const {adminRouter} = require("./routes/admin");

const port = 3000

app.get("/",function(req,res){
    res.send("<h1>hi hello from the server</h1>")
})


app.use("/user",userRouter)
app.use("/course",courseRouter)
app.use("/admin",adminRouter)

   dotenv.config();
async function main(){
    // await mongoose.connect(process.env.db_url);
    // app.listen(port);
    // console.log("runnning or port 3000");
    //     app.listen(port,()=>{
    // console.log("server started on port 3000");
    try {
    if(!process.env.db_url){
        throw new mongoose.Error("there is not mongo db url in env variables")
    }
    await mongoose.connect(process.env.db_url);
    app.listen(port,()=>{
    console.log("server started on port 3000");
})
} catch (err) {
    console.error("failed to start the server:",err.message)
    process.exit(1);
}
}
main()

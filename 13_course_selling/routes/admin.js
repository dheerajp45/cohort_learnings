const express = require("express");
const Router = express.Router;
const adminRouter = Router();

// adminRouter.use(adminMiddleware);

adminRouter.post("/signup",function(req,res){
   res.json({
      message:"admin signup endpoint"
   })
})

adminRouter.post("/login",function(req,res){
   res.json({
      message:"admin login endpoint"
   })
})

adminRouter.post("/course",function(req,res){
   res.json({
      message:"admin course create endpoint"
   })
})


adminRouter.put("/course",function(req,res){
   res.json({
      message:"admin course edit or add content endpoint"
   })
})

adminRouter.get("/course/bulk",function(req,res){
   res.json({
      message:"get all the coursess posted by the admin endpoint"
   })
})

adminRouter.delete("/course",function(req,res){
   res.json({
      message:"admin deletion of his course endpoint"
   })
})

module.exports={
    adminRouter:adminRouter
}


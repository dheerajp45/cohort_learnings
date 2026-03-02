const express = require("express");
const jwt = require("jsonwebtoken");
const Router = express.Router;
const adminRouter = Router();
const {adminModel, courseModel}=require("../db")
const {JWT_ADMIN} = require("../config")
const{adminMiddleware} = require("../middlewares/admin")
// todo : store this jwt key in env file and make changes acc to that in the below code




adminRouter.post("/signup",async function(req,res){
 const { email,password,firstName,lastName } = req.body;  
 //todo: adding zod vlaidation
   // todo: hash the pwd so text pwd is not stored in DB use bcrypt

   //  todo : add try catch block
   await adminModel.create({
      email:email,
      password:password,
      firstName:firstName,
      lastName:lastName,
   })

   res.json({
      message:" admin signup successful"
   })
})






adminRouter.post("/signin",async function(req,res){
 const { email,password } = req.body; 
   const admin =await adminModel.findOne({
      email,
      password
   })
   // todo :so we in above signup endpoint the plain text pwd will not be saved right we will save hashed pwd in DB so now implement the bcrypt and edit this one also the salt and all things 
   if(admin){
      const token =jwt.sign({
         id:admin._id
      },JWT_ADMIN)
      // todo: do cookie based authentication now it is token based
      res.json({
         message:"admin signin successfull here is the:",
         token:token,
         adminId:admin._id
      })
   }
   else{
      res.status(403).json({
         message:"incorrect details"
      })
   }
})









adminRouter.post("/course",adminMiddleware,async function(req,res){

   const adminId=req.userId;
   const {title,description,price,imageUrl,creatorId} = req.body;

   const course = await courseModel.create({
      title,
      description,
      price,
      imageUrl,
      creatorId:adminId 
   })
   res.json({
      message:" course creation done",
      courseId: course._id
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


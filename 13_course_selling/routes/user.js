const express = require("express");
const jwt = require("jsonwebtoken");
const Router = express.Router;
const userRouter = Router();
const {userModel}=require("../db");
const JWT_USER = "dheerajp45_user"
// todo : store this jwt key in env file and make changes acc to that in the below code






userRouter.post("/signup",async function(req,res){
   const { email,password,firstName,lastName } = req.body;  
   //todo: adding zod vlaidation
   // todo: hash the pwd so text pwd is not stored in DB use bcrypt

   //  todo : add try catch block
   await userModel.create({
      email:email,
      password:password,
      firstName:firstName,
      lastName:lastName,
   })

   res.json({
      message:" user signup successful"
   })
})

userRouter.post("/signin",async function(req,res){
   const { email,password } = req.body; 
   const user =await userModel.findOne({
      email,
      password
   })
   // todo :so we in above signup endpoint the plain text pwd will not be saved right we will save hashed pwd in DB so now implement the bcrypt and edit this one also the salt and all things 
   if(user){
      const token =jwt.sign({
         id:user._id
      },JWT_USER)
      // todo: do cookie based authentication now it is token based
      res.json({
         message:"user signin successfull here is the:",
         token:token
      })
   }
   else{
      res.status(403).json({
         message:"incorrect details"
      })
   }
})

userRouter.post("/purchases",function(req,res){
      res.json({
      message:"user purchased courses endpoint"
   })
})


module.exports = {
   userRouter:userRouter
}
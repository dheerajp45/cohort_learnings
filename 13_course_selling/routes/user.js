const express = require("express");
const Router = express.Router;
// or
// const {Router} = require("express")

const userRouter = Router();
userRouter.post("/signup",function(req,res){
   res.json({
      message:"user signup endpoint"
   })
})

userRouter.post("/signin",function(req,res){
      res.json({
      message:"user signin endpoint"
   })
})

userRouter.post("/purchases",function(req,res){
      res.json({
      message:"user purchased courses endpoint"
   })
})


module.exports = {
   userRouter:userRouter
}
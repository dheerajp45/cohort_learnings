const express = require("express");
const Router = express.Router;
// or
// const {Router} = require("express")

const userRouter = Router();
userRouter.post("/signup",function(req,res){
})

userRouter.post("/signin",function(req,res){
})

userRouter.post("/purchases",function(req,res){
})


module.exports = {
   userRouter:userRouter
}
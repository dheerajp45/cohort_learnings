const {Router} = require("express")
// or
// const express = require("express");
// const Router = express.Router;

const courseRouter = Router();
const {purchaseModel,courseModel}=require("../db")
const {userMiddleware} = require("../middlewares/user")


courseRouter.get("/preview",async function(req,res){

   const courses = await courseModel.find({});
       res.json({
      courses
   })
})

courseRouter.post("/purchase",userMiddleware,async function(req,res){
   const userId = req.userId;
   const courseId = req.body.courseId;

   await purchaseModel.create({
      userId,
      courseId
   })
           res.json({
      message:"you have purchased the course"
   })
})

module.exports = {
    courseRouter:courseRouter
}
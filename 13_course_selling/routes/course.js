const {Router} = require("express")
// or
// const express = require("express");
// const Router = express.Router;

const courseRouter = Router();
courseRouter.get("/preview",function(req,res){
       res.json({
      message:"course preview endpoint"
   })
})

courseRouter.get("/purchase",function(req,res){
           res.json({
      message:"course purchase endpoint"
   })
})

module.exports = {
    courseRouter:courseRouter
}
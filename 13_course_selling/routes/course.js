const {Router} = require("express")
// or
// const express = require("express");
// const Router = express.Router;

const courseRouter = Router();
courseRouter.get("/preview",function(req,res){
})

courseRouter.get("/purchase",function(req,res){
})

module.exports = {
    courseRouter:courseRouter
}
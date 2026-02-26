step 1

const express = require("express");
const Router = express.Router;

#or

const {Router} = require("express")

after step 1
here is 
step 2

const courseRouter = Router();

here instead of  courseRouter you can place yoour router name 

step 3 
now we should get that in our index file
app.use("/course",courseRouter)

here app is from express
and that /course can be replaced by your route

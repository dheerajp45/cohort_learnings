const mongoose = require('mongoose');
// const dotenv = require("dotenv")
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
// dotenv.config();
// console.log("connected to");

// mongoose.connect(process.env.db_url);



const userSchema = new Schema({
email:{type:String,unique:true},
password:String,
firstName:String,
lastName:String,
});

const adminSchema = new Schema({
email:{type:String,unique:true},
password:String,
firstName:String,
lastName:String
});

const courseSchema = new Schema({
email:{type:String,unique:true},
title:String,
description:String,
price:Number,
imageUrl:String,
creatorId:ObjectId,
});

const purchaseSchema = new Schema({
userId:ObjectId,
courseId:ObjectId,

});

const userModel = mongoose.model('user', userSchema);
const adminModel = mongoose.model('admin', adminSchema);
const courseModel = mongoose.model('course', courseSchema);
const purchaseModel = mongoose.model('purchase', purchaseSchema);

module.exports={
    userModel: userModel,
    adminModel : adminModel,
    courseModel:courseModel,
    purchaseModel:purchaseModel
}
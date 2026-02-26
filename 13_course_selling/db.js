const mongoose = require('mongoose');
import dotenv from "dotenv";
mongoose.connect()
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
dotenv.config();
mongoose.connect(process.env.db_url);
const userSchema = Schema({
email:{type:String,unique:true},
password:String,
firstName:String,
lastName:String,
});

const adminSchema = Schema({
email:{type:String,unique:true},
password:String,
firstName:String,
lastName:String
});

const courseSchema = Schema({
email:{type:String,unique:true},
title:String,
description:String,
price:Number,
imageUrl:String,
creatorId:ObjectId,
});

const purchaseSchema = Schema({
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
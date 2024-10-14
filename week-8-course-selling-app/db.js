const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    email:String,
    password:String,
    firstName:String,
    lastName:String
})
const adminSchema = new Schema({
    email:String,
    password:String,
    firstName:String,
    lastName:String
})
const courseSchema = new Schema({
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    creatorId:ObjectId,
})
const purchaseSchema = new Schema({
    creatorId:ObjectId,
    userId:ObjectId
})


const userModel = mongoose.model('user',userSchema)
const adminModel = mongoose.model('admin',adminSchema)
const courseModel = mongoose.model('course',courseSchema)
const purchaseModel = mongoose.model(' purchase', purchaseSchema)

module.exports = {
    userModel,adminModel,courseModel,purchaseModel
}
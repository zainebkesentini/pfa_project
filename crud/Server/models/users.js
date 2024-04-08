const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema(
    {
        name:String,
        email:String,
        education:String,
        personalProject:String,
        skills:String,
        languages:String,
        certificates:String,
        jobDescription:String
    }
)

const userModel=mongoose.model("users",UserSchema)
module.exports=userModel
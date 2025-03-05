import mongoose from "mongoose"



const userSchema=new mongoose.Schema({
    name:{
        type:String,
        Required:true
    },
    email:{
        type:String,
        Required:true
    }
    ,
   tel: {
    type:String,
    Required:true

    }
})
export default mongoose.model("Users",userSchema)
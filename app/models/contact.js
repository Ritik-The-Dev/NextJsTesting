import mongoose from "mongoose";

const schema = new mongoose.Schema({
    username:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true
    },
    number:{
        type: String,
        required : true
    },
    message:{
        type: String,
        required : true
    },
},{
    timestamps:true
})
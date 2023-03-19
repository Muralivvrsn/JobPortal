const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    token:{
        type:String
    }
});

const User = mongoose.model("Users",user);

module.exports = User;
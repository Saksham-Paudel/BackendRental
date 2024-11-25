const { model } = require("mongoose")

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username : {
        type : String,
        required : true  //compulsory halnai paryo
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    otp : {
        type : Number
    }
})

const User = mongoose.model("User",userSchema) //table banako user vanae ani column (userschema) snga connect garako

module.exports = User
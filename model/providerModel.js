

const mongoose = require("mongoose")
const Schema = mongoose.Schema


const provoiderSchema = new Schema({
    name : {
        type : String,
        required: [true , "shop name must be provided"]
    },
    contactNo : {
        type : String,
        required : [true , "contact no must be provided"],
        minLength : 10,
        maxLength : 10
     },
     email : {
        type : String,
        required : [true, "email must be provided"]
     },
     vatNo : {
        type : "string"
     },
     panNO :{
        type : String
     },
     location : {
        type : String,
        required : [true , "provide location"]
     },
     customerId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
     },

     status : {
        type : String ,
        enum : ["active","inactive","pending"],
        default : "pending"

     }

})

exports.Provider = mongoose.model("Provider",provoiderSchema )


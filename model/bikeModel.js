const mongoose =require("mongoose")
const Schema = mongoose.Schema

const bikeSchema = new Schema ({
    name : {
        type : String,
        required : [true,"Name must be given"]
    },
    price : {
        type : Number,
        required : [true,"Price must be given"]
    },
    brand : {
        type : String,
        required : [true,"Bike brand must be given"]
    },
    description : {
        type : String,
        required : [true,"Bike description must be given"]
    },
    image : String,
    category : {
        type : String,
        enum : ["bike","scooter"],
        default : "bike"
    }
})

const Bike= mongoose.model("Bike",bikeSchema)
module.exports = Bike
require("dotenv").config()
const express = require("express")
const connectToDb = require(".")
const { registerUser, loginUser ,forgetPassword, resetPassword} = require("./controller")
const { addBike } = require("./controller/bike")
const app = express()

connectToDb()


app.use(express.json())  //incoming json data bujna sakne  capability dinxa



//register api
app.post("/register",registerUser)
app.post("/login",loginUser) 
app.post("/forgetpassword",forgetPassword)
app.post("/resetPassword",resetPassword)


//bike api
app.post("/addbike",addBike)

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log("server has start at " + PORT)
})
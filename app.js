require("dotenv").config()
const express = require("express")
const connectToDb = require(".")
const { registerUser, loginUser } = require("./controller")
const app = express()

connectToDb()


app.use(express.json())  //incoming json data bujna sakne  capability dinxa

//register api
app.post("/register",registerUser)
app.post("/login",loginUser)

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log("server has start at " + PORT)
})
require("dotenv").config()
const express = require("express")
const connectToDb = require(".")
const { registerUser, loginUser ,forgetPassword, resetPassword} = require("./controller/authentication")
const { addBike, deletBike, updateBike, getAllBikes, getBike } = require("./controller/bike")
const app = express()

connectToDb()

const {multer,storage} =require("./services/multerConfig")
const adminSeeder = require("./adminSeeder")
const { checkIsLoggedInOrNot } = require("./middleware/checkLoginOrNot")
const upload = multer({storage : storage})

app.use(express.json())  //incoming json data bujna sakne  capability dinxa



//register api
app.post("/register",registerUser)
app.post("/login",loginUser) 
app.post("/forgetpassword",forgetPassword)
app.post("/resetPassword",resetPassword)


//bike api
app.post("/addbike",checkIsLoggedInOrNot,upload.single("image"),addBike)
app.get("/getbike",getAllBikes)
app.get("/getbike/:id",getBike)
app.delete("/deletebike/:id",deletBike)
app.patch("/updatebike/:id",updateBike)



const PORT = process.env.PORT
app.listen(PORT,()=>{
    adminSeeder()
    console.log("server has start at " + PORT)
})
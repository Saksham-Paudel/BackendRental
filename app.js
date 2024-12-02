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
const { accessTo } = require("./middleware/accessTo")
const { getAllUser } = require("./controller/admin")
const { deleteUser } = require("./controller/admin")
const { becomeProvider } = require("./controller/provider")
const upload = multer({storage : storage})

app.use(express.json())  //incoming json data bujna sakne  capability dinxa



//register api
app.post("/register",registerUser)
app.post("/login",loginUser) 
app.post("/forgetpassword",forgetPassword)
app.post("/resetPassword",resetPassword)



//bike api
app.post("/addbike",checkIsLoggedInOrNot,accessTo('role'),upload.single("image"),addBike)
app.get("/getbike",getAllBikes)
app.get("/getbike/:id",getBike)
app.delete("/deletebike/:id",deletBike)
app.patch("/updatebike/:id",updateBike)



//admin api
app.get("/admin/user",checkIsLoggedInOrNot,accessTo("admin"),getAllUser)
app.delete("/admin/user/:id",checkIsLoggedInOrNot,accessTo("admin"),deleteUser)


//provider api
app.post("/provider/become",checkIsLoggedInOrNot,accessTo("customer"),becomeProvider)


const PORT = process.env.PORT
app.listen(PORT,()=>{
    adminSeeder()
    console.log("server has start at " + PORT)
})
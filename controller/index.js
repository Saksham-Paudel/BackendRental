const User = require("../model/userModel")
const bcrypt = require("bcryptjs")

exports.registerUser = async (req,res)=>{
    const {username,email,password}=req.body
    if(!username || !email || !password){
        res.status(400).json({
            message : "please provide info"
        })
        return
    }

    await User.create({
        username,
        email,
        password : bcrypt.hashSync(password,12)
    })
    res.status(201).json({
        message : "user registered successfully"
    })
}

exports.loginUser =async (req,res)=>{

    const {email,password} = req.body 
    if(!email || !password)
    {
        res.status(400).json({
            message : "plese provide email pass"
        })
        return
    }

    //check email
    const data = await User.find({email : email}) //select * from user where email
    console.log(data)

    /* 
    user with that email vetana vane --> [] auxa
    vetyo vane chai - data auxa
    */
}


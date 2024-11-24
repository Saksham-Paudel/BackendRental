const User = require("../model/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const sendMail = require("../services/sendMail")

exports.registerUser = async (req, res) => {
    try {

        const { username, email, password } = req.body
        if (!username || !email || !password) {
            res.status(400).json({
                message: "please provide info"
            })
            return
        }

        await User.create({
            username,
            email,
            password: bcrypt.hashSync(password, 12)
        })
        res.status(201).json({
            message: "user registered successfully"
        })

    }
    catch (error) {
        res.status(500).json({
            message: "error",
            errmessage: error.message
        })

    }

}

exports.loginUser = async (req, res) => {

    try {

        const { email, password } = req.body
        if (!email || !password) {
            res.status(400).json({
                message: "plese provide email pass"
            })
            return
        }

        //check email
        const data = await User.find({ email: email }) //select * from user where email
        console.log(data)

        /* 
        user with that email vetana vane --> [] auxa
        vetyo vane chai - data auxa
        */
        if (data.length === 0) {
            res.status(404).json({
                message: "no user with the email"
            })
        }
        else {

            //password check
            const isPasswordMatched = bcrypt.compareSync(password, data[0].password)     //return boolean
            if (isPasswordMatched){

                
                var token = jwt.sign({
                    id: data[0]._id }, process.env.JWT_SECRET_KEY,
                    
                    {expiresIn: process.env.JWT_EXP_IN
                    })
                    
                    
                    res.status(200).json({
                        
                        message: "loggedin success",
                        token
                    })
                
                }
        else {
            res.status(404).json({
                message: "invalid password"
            })
        }
    }
 
}   catch (error) {
    res.status(404).json({

        message: "error xa",
        errmessage: error.message
    })
    
    }
}


exports.forgetPassword = async(req,res)=>{
    const {email} = req.body
    if(!email)
    {
        res.status(400).json({
            message : " plese peovid email"
        })
        return 
    }
    var otp = 1234

    await sendMail(email,otp)
    res.status(200).json
({
    message : "otp send success"
})
}


const jwt = require("jsonwebtoken")
const User = require("../model/userModel")

exports.checkIsLoggedInOrNot= (req,res,next)=>{
    const token =req.headers.authorization //req.body ma lindane hunxa but not secure
    if(!token)
    {
        return res.status(403).json({
            message : "please provide token"
        })
    }
    // console.log(token,"TOKEN")

    jwt.verify(token,process.env.JWT_SECRET_KEY,async (err,ress)=>{
        if(err){
            res.status(403).json({
                message : err
            })
        }
        else{
            console.log(ress)
            //check whether result ko id ko user xa ki xaina
            const data = await User.findById(ress.id)
            if(!data)
            {
                return res.status(400).json({
                    message : "no user with this id is found"
                })
            }
            else{
                req.user = data
                req.userId = data.id
                next()
            }
            
        }
    })
}
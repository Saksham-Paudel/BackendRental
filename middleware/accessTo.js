

exports.accessTo = (role)=>{
    return (req,res,next)=>{
        const incomingUserRole = req.user.role
        if(incomingUserRole != role)
        {
            res.status(403).json({
                message : "you dont have access to do it"
            })
        }
        else{
            next()
        }
    }
}


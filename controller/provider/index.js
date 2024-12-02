const { Provider } = require("../../model/providerModel")


exports.becomeProvider = async(req,res)=>{
    try{

        const {name,contactNo,email,vatNo,panNo,location} = req.body
        const customerId =req.user._id
        if(!name || !contactNo || !email || !location)
            {
                return res.status(404).json({
            message : "please provide all info",
        
        })
    }
    await Provider.create({
        name,
        contactNo,
        email,
        vatNo,
        panNo,
        location,
        customerId : customerId
    })
    res.status(200).json({
        message : "your form success,wait for admin response"
    })
}
catch(error){
    res.status(500).json({
        message : "error",
        errmessage : error.message 
    })
}
}
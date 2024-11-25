const Bike = require("../../model/bikeModel")

exports.addBike =async (req,res)=>{
    const {name,brand,description,price,category} = req.body
    if(!name || !brand || !description || !price || !category){
        return res.status(400).json({
            message : "please probide name,brand,description,price"
        })
    }
    await Bike.create({
        name,
        brand,
        price,
        category,
        description,
    })
    res.status(200).json({
        message : "bike added successfully"
    })
}
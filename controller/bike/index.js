const Bike = require("../../model/bikeModel")

exports.addBike =async (req,res)=>{
    try{

        const {name,brand,description,price,category} = req.body

        let filename;
        if(!req.file)
        {
            filename : "hello"
        }
        else{
            filename : req.file.filename
        }
         
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
            image : filename
        })
        res.status(200).json({
            message : "bike added successfully"
        })
    }
    catch(error)
    {
     res.status(500).json({
         message : error.message
     })
    }
   
   
}


exports.getAllBikes = async (req,res)=>{
    try{

        const data = await Bike.find()
        res.status(200).json({
            message : "Bikes fetch success",
            data : data
        })
    }
    catch(error)
    {
     res.status(500).json({
         message : error.message
     })
    }
   
}


exports.getBike =async (req,res)=>{
    try{

        const id = req.params.id 
    const data =await Bike.findById(id)
    res.status(200).json({
        message : "Bike fetched success",
        data : data
    })
    }
    
    catch(error)
    {
     res.status(500).json({
         message : error.message
     })
    }
}


exports.deletBike = async(req,res)=>{
    try{
        const id = req.params.id
        await Bike.findByIdAndDelete(id)
        res.status(200).json({
            message : "Bike delete success",
            
        })
    }
    catch(error)
    {
     res.status(500).json({
         message : error.message
     })
    }
}


exports.updateBike =async (req,res)=>{
    try{
        const id = req.params.id 
        const {name,brand,category,price,description} = req.body
        await Bike.findByIdAndUpdate(id,{
            name,
            category,
            brand,
            price,
            description
        })
        res.status(200).json({
            message : "Bike updated success",
           
        })
    }
   catch(error)
   {
    res.status(500).json({
        message : error.message
    })
   }
}

const User = require("./model/userModel")
const user = require("./model/userModel")
const bcrypt = require("bcryptjs")

const adminSeeder = async ()=>{
    const data = User.find({email:process.env.ADMIN_EMAIL})
    if(data.length == 0){
        await User.create({
            email : process.env.ADMIN_EMAIL,
            username : process.env.ADMIN_USERNAME,
            password : bcrypt.hashSync(process.env.ADMIN_PASSWORD,10),
            role : "admin"
        })
        console.log("admin seeded sucess")

    }
    else{
        console.log("admin already seeded ,no need to seed/insert again")
    }
    
}

module.exports = adminSeeder
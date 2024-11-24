const nodemailer = require("nodemailer")

async function sendMail(email,otp){

    //first configure nodemailer with our configuration
    
    const transporter = nodemailer.createTransport({
        service : "gmail",
        auth :{
            user : process.env.EMAIL,
            pass : process.env.PASSWORD     //not password, its app password
        },
    })
    await transporter.sendMail({
        to : email,
        subject : "you receive message",
        text : "HDC"
    })
}
module.exports = sendMail
const nodemailer = require('nodemailer');

const sendEmailToUser = async(name, email, user_id)=>{
try {

 const transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        requireTLS:true,
        auth:{
            user:"dhirajdemo9221@gmail.com",
            pass:'fywqzgkgzgvtwant'
        }
    });

    const mailOptions = {
        from:"dhirajdemo9221@gmail.com",
        to:email,
        subject:"Recover your password",
        html:'<p> hello '+ name +' please click here to <a href="http://localhost:5500/recover-password/'+user_id+'"> reset </a> your password</p>'
    }

    transporter.sendMail(mailOptions, (err, info)=>{
        if(err){
            console.log(err)
        }else{
            console.log("Email has been sent", info.response)
            return "Email has been sent"
        }
    })
    
} catch (error) {
    console.log(error)
}
}

module.exports = sendEmailToUser

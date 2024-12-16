const userModel = require('../modules/userModel')
const mailer = require('nodemailer')

const loginPage = (req, res) => {
    return res.render('login')
}

const registerPage = (req, res) => {
    return res.render('register')
}
const registerUser =  async(req, res)=> {
    try{
        const { name, email, password } = req.body;
        await userModel.create({
            name : name, 
            email : email, 
            password : password
        })
        return res.redirect('/')
    }catch(err){
        console.log(err);
        return false;
    }
}

const loginUser = (req, res) =>{
    return res.redirect('dashboard')
}

const dashboardPage = (req, res)=> {
    return res.render('dashboard')
}

// ============== logOut ===============
const logOut = (req, res) =>{
    req.logout((err)=>{
        if (err) {
            console.log(err);
            return false;
        }
    })
    console.log('User has Logout');
    
    return res.redirect('/')
}

// ============== Forgot Password ===============

const getEmail = async(req, res) => {
    try {
        let email = req.body.recovery_email;
        
        const user = await userModel.findOne({email : email})
        if (!user) {
            console.log("user is not found");
            return res.redirect('/')
        }

        const otp = Math.floor(Math.random()*1000000);

        var nodemailer = require('nodemailer');

        var transporter =  nodemailer.createTransport({
            service : 'gmail',
            auth : {
                user: 'devloperhiren@gmail.com',
                pass: 'waxz bqnb yvff kcjb'
            }
        });

        var mailOptions = {
            from: 'devloperhiren@gmail.com',
            to: email,
            subject: 'Sending Email using Node.js',
            html: `
                your Otp is : ${otp}
            `
          };
      
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
              let obj = {
                email: email,
                otp:otp
              }
              res.cookie('otp', obj)
              return res.redirect('/otp')
            }
          });
        
    } catch (error) {
        console.log(error);
        return false;
    }
}

const otpPage = (req, res) =>{
    return res.render('otp')
}

// ============== Profile Update ===============
const viewProfilePage = (req, res) => {
    return res.render('View_ProfilePage')
}

const changeProfile = async (req, res) => {
    try{
        const {name,email} = req.body;
        
        await userModel.findOneAndUpdate({email : email},{
            name : name
        })
        console.log('userUpdated');
        
        return res.redirect('/dashboard')
    }catch(error){
        console.log(error);
        return false
    }
}

// ============== Password Update ===============

const cPasswordPage = (req, res) =>{
    return res.render('change_Password')    
}

const changePass = async (req, res) => {
    try{
        const email = res.locals.users.email;
        const {oldpassword, cpassword, newpassword} = req.body

        if(oldpassword == res.locals.users.password && oldpassword == cpassword){

            await userModel.findOneAndUpdate({email:email},{
                password : newpassword
            })
            console.log('password successfully changed!');
            return res.redirect('/dashboard')
        }else{
            console.log('your old Password and confirm Password has Wrong');
            
        }
    }catch(err){
        console.log(err);
        return false;
    }
}

module.exports = {
    loginPage, 
    registerPage,
    registerUser,
    loginUser, 
    dashboardPage,
    logOut, 
    getEmail,
    otpPage, 
    viewProfilePage,
    changeProfile,
    cPasswordPage,
    changePass
}
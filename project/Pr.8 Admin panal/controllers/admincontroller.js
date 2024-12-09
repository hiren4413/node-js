const UserModel = require('../modules/userModel')

const loginPage = (req, res) => {
    return res.render('login')
}

const registerPage = (req, res) => {
    return res.render('register')
}
const registerUser =  async(req, res)=> {
    try{
        const { name, email, password } = req.body;
        await UserModel.create({
            name : name, 
            email : email, 
            password : password
        })
        return res.redirect('register')
    }catch(err){
        console.log(err);
        return false;
    }
}
module.exports = {
    loginPage, registerPage, registerUser
}
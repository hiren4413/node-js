const usermodel = require('../models/userModel')

const loginPage = (req, res) => {
    if (res.locals.users) {
        return res.redirect('dashboard');
    }
    return res.render('login')
}
const registerPage = (req, res) => {
    if (res.locals.users) {
        return res.redirect('dashboard');
    }
    return res.render('register')
}

const addUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await usermodel.create({
            name: name,
            email: email,
            password: password
        })

        return res.redirect('/')
    } catch (error) {
        console.log(error);
        return false;
    }
}

const loginUser = async (req, res) => {
    return res.redirect('dashboard')
}

const dashboardPage = (req, res) => {
    return res.render('dashboard')
}

const logOut = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
            return false;
        }
    })
    console.log('User has Logout');

    return res.redirect('/')
}

module.exports = {
    loginPage,
    registerPage,
    addUser,
    loginUser,
    dashboardPage,
    logOut,
}
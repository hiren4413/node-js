const usermodel = require('../module/userModel')

const addUser = async (req, res) =>{
    try {
        const {name, email, password} = req.body;

        userModel.create({
            name : name,
            email : email,
            password : password
        })
        

    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports= {
    addUser
}
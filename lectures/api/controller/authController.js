const jwt = require('jsonwebtoken')
const usermodel = require('../module/userModel')

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(501).send({
            success: false,
            message: "Email And Password are required...."
        })
    }

    const user = await usermodel.findOne({ email: email })

    if (!user || user.password != password) {
        return res.status(501).send({
            success: false,
            message: "Email And Password are not valid...."
        })
    }

    const token = await jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' })

    return res.status(200).send({
        success: true,
        message: "Login Successfully..."
    })


}

module.exports = {
    loginUser
}
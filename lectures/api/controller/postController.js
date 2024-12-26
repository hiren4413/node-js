const postmodel = require('../models/postmodel');

const addPost = async (req, res) => {
    try {
        const {title, discription} = req.body;

        const post = await postmodel.create({
            userId : req.user._id,
            title : title,
            discription : discription,
            image : req.file.path,

        })
        console.log(post)

        return res.status(201).send({
            success: true,
            message: "data add successfully......",
            post
        })

    } catch (error) {
        return res.status(401).send({
            success: false,
            message: err,
        })
    }
}

module.exports ={
    addPost
}
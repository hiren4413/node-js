const blogModel = require("../models/blogmodel")

const fs = require('fs');

const addPost = async (req, res) => {
    try {
        const { title, discription } = req.body;
        
        if (!title || !discription || !req.file) {
            return res.status(501).send({
                success: false,
                message: "Plaese Fill all fields...",
            })
        }
        
        const post = await blogModel.create({
            userId: req.user._id,
            title: title,
            discription: discription,
            image: req.file.path,
        })
        
        return res.status(201).send({
            success: true,
            message: "data add successfully......",
            post
        })

    } catch (error) {
        return res.status(401).send({
            success: false,
            message: error,
        })
    }
}

const viewPost = async (req, res) => {
    try {
        const users = await blogModel.find({ userId: req.user._id }).populate('userId')

        return res.status(200).send({
            success: true,
            messsge: "user  sucessfully fethch",
            users
        })

    } catch (error) {
        return res.status(501).send({
            success: false,
            err: error
        })
    }
}

const deleteBlog = async (req, res) => {
    try {
        const id = req.query.id;

        const blog = await blogModel.findById(id)
        fs.unlinkSync(blog.image)
        const deleteBlog = await blogModel.findByIdAndDelete(id)

        return res.status(200).send({
            success: true,
            message: "blog has Deleted....",
            deleteBlog
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            message: err,
        })
    }
}

const updateBlog = async (req, res) => {
    try {
        let id = req.query.id;

        const { title, discription } = req.body;

        console.log(title);
        console.log(discription);
        console.log(req.file);
        

        if (!title || !discription || !req.file) {
            return res.status(400).send({
                success: false,
                message: "all Fields Are Required !!!...",
            });
        }

        let blog = await blogModel.findById(id);
        fs.unlinkSync(blog.image);

        const editBlog = await blogModel.findByIdAndUpdate(id, {
            title: title,
            discription: discription,
            image: req.file.path
        })

        return res.status(200).send({
            success: true,
            message: "Blog Successfully Updated.........",
            editBlog,
        })

    } catch (err) {
        return res.status(501).send({
            success: false,
            message: err,
        })
    }
}

module.exports = {
    addPost, viewPost, deleteBlog, updateBlog
}
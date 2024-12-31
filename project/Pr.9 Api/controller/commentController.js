const postmodels = require('../models/blogmodel')
const commnetmodels = require('../models/commentModel')
const addCommnet = async (req, res) => {
    try {
        const postid = req.query.id;
        const post = await postmodels.findOne({ _id: postid })
        if (post) {
            const { comment } = req.body
            const addComment = await commnetmodels.create({
                userId: req.user._id,
                blogId: postid,
                comment: comment
            })
            return res.status(200).send({
                success: true,
                messsge: "Comment has done.....!",
                addComment
            })
        } else {
            return res.status(501).send({
                success: false,
                messsge: "Your post id is wrong",
            })
        }
    } catch (error) {
        return res.status(501).send({
            success: false,
            err: error
        })
    }
}

module.exports = {
    addCommnet
}
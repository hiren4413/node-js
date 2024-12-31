const mongoose=require('mongoose')

const commentSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
       ref:'user'
    },
    blogId:{
        type: mongoose.Schema.Types.ObjectId,
         ref:'blog'
    },
    comment:{
        type:String,
        require:true
    }
})
const Comment=mongoose.model('comment',commentSchema)
module.exports=Comment
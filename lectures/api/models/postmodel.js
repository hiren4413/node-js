const mongoose = require('mongoose');
 
const postSchema = mongoose.Schema({
    userId:{
        Type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    title:{
        Type: String,
        require: true,
    },
    discription:{
        Type: String,
        require: true,
    },
    image:{
        Type: String,
        require: true,
    },
})

const post = mongoose.model('post', postSchema);

module.exports = post;
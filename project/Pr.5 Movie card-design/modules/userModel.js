const mongoose = require('mongoose');

userSchema = mongoose.Schema({
    name: {
        type : String,
        require : true,
    },
})

const modal = mongoose.modal('user', userSchema);

module.exports = modal;
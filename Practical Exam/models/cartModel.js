const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    qty: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
})

const cart = mongoose.model('cart', cartSchema)

module.exports = cart 
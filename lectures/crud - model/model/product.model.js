const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
    },
    description: {
        type: String,
    },
    price: {
        type: String,
    },
})
module.exports = mongoose.model("products", productSchema);
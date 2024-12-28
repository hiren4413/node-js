const productmodel = require('../models/productModel')

const viewProduct = (req, res) => {
    res.render('viewProduct');
}
const addProductPage = (req, res) => {
    res.render('addproduct');
}
const addProduct = async (req, res) => {
    const { name, price, qty, description } = req.body;


    await productmodel.create({
        name: name,
        price: price,
        qty: qty,
        description: description,
    })

    return res.redirect('/product/viewproduct');
}
module.exports = {
    viewProduct,
    addProductPage,
    addProduct
}
const productmodel = require('../models/productModel')

const fs = require('fs')
const path = require('path')

const addProductPage = (req, res) => {
    return res.render('addproduct');
}
const addProduct = async (req, res) => {
    try {
        const { name, price, qty, description } = req.body;

        const product = await productmodel.create({
            name: name,
            price: price,
            qty: qty,
            description: description,
            image: req.file.path,
        })

        return res.redirect('/product/viewproductpage');
    } catch (error) {
        console.log(error);
        return false
    }
}

const viewProductpage = async (req, res) => {
    try {
        let product = await productmodel.find({})

        return res.render('viewProduct', {
            product
        });
    } catch (error) {
        console.log(error);
        return false
    }
}

const deleteProduct = async (req, res) => {
    try {
        let id = req.query.id;

        const single = await productmodel.findById(id)
        fs.unlinkSync(single.image)

        await productmodel.findByIdAndDelete(id)

        return res.redirect('/product/viewproductpage')
    } catch (error) {
        console.log(error);
        return false
    }
}

const editProduct = async (req, res) => {
    try {
        const id = req.query.id;
        const single = await productmodel.findById(id);

        return res.render('editProduct', {
            single
        })
    } catch (error) {
        console.log(error);
        return false
    }
}

const updateProduct = async (req, res) => {
    try {
        const { editid, name, description,qty, price } = req.body;

        if (req.file) {
            const single = await productmodel.findById(editid)
            fs.unlinkSync(single.image)
            await productmodel.findByIdAndUpdate(editid, {
                name: name,
                price: price,
                description: description,
                qty: qty,
                image: req.file.path,
            })

            return res.redirect('/product/viewproductpage')
        } else {
            const single = await productmodel.findById(editid)

            await productmodel.findByIdAndUpdate(editid, {
                name: name,
                description: description,
                price: price,
                qty: qty,
                image: single.image
            })
            return res.redirect('/product/viewproductpage')
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}
module.exports = {
    addProduct,
    viewProductpage,
    addProductPage,
    deleteProduct,
    editProduct,
    updateProduct
}
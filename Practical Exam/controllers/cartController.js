const productmodel = require('../models/productModel')

const fs = require('fs')
const path = require('path')

const viewCartPage = async (req, res) => {
    try {
        let product = await productmodel.find({})

        return res.render('viewcart', {
            product
        });
    } catch (error) {
        console.log(error);
        return false
    }
}

const deleteCart = async (req, res) => {
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

const editCart = async (req, res) => {
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

const updateCart = async (req, res) => {
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
    viewCartPage,
    deleteCart,
    editCart,
    updateCart
}
const productmodel = require('../models/productModel')
const cartmodel = require('../models/cartModel')

const fs = require('fs')
const path = require('path')

const addCart = async (req, res) => {
    try {
        const id = req.query.id;

        const product = await productmodel.findById(id)

        const Cart = await cartmodel.create({
            name: product.name,
            price: product.price,
            qty: product.qty,
            description: product.description,
            image: product.image,
        })

        return res.redirect('/cart/viewcartpage');
    } catch (error) {
        console.log(error);
        return false
    }
}

const viewCartPage = async (req, res) => {
    try {
        let cart = await cartmodel.find({})

        return res.render('viewcart', {
            cart
        });
    } catch (error) {
        console.log(error);
        return false
    }
}

const deleteCart = async (req, res) => {
    try {
        let id = req.query.id;

        await cartmodel.findByIdAndDelete(id)

        return res.redirect('/cart/viewcartpage')
    } catch (error) {
        console.log(error);
        return false
    }
}

const editCart = async (req, res) => {
    try {
        const id = req.query.id;
        const single = await cartmodel.findById(id);
        
        return res.render('editcart', {
            single
        })
    } catch (error) {
        console.log(error);
        return false
    }
}

const updateCart = async (req, res) => {
    try {
        const { editid, number } = req.body;
        console.log(req.body);

        const newcart = await cartmodel.findByIdAndUpdate(editid, {
            qty: number,
        })
        

        return res.redirect('/cart/viewcartpage') 

    } catch (error) {
        console.log(error);
        return false;
    }
}
module.exports = {
    addCart,
    viewCartPage,
    deleteCart,
    editCart,
    updateCart
}
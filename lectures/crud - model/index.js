const express = require('express'); 

const port = 8000;

const app = express();

// DB Connection
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/my_product")
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err))

const productModel = require('./model/product.model.js')


app.set("view engine", "express")
app.use(express.urlencoded({ extended: false }))

app.post('/addProduct', async (req, res) => {
    const { title, description, price } = req.body;

    let newProduct = await productModel.create({ title, description, price })

    console.log(newProduct);
    res.json({ newProduct, message: 'Product added' });
})

app.get('/allProduct', async (req, res) => {
    let allProduct = await productModel.find();
    res.json(allProduct);
})

app.listen(port, (err) => {
    if(err){
        console.log(err);
    }
    console.log(port);
})
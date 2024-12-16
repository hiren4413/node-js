const categoryModel = require('../modules/categoryModel')
const subCategoryModel = require('../modules/subcategoryModel')
const exSubCategoryModel = require('../modules/exsubcategoryModel')
const productModel = require('../modules/productModel')

const fs = require('fs')
const path = require('path')

const productPage = async(req, res) =>{
    try {
        const category = await categoryModel.find({status: 'active'});
        const subcategory = await subCategoryModel.find({status: 'active'});
        const exsubcategory = await exSubCategoryModel.find({status: 'active'});

        return res.render('Product/add_Product',{
            category : category,
            subcategory : subcategory,
            exsubcategory : exsubcategory
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}

const addProduct = async(req, res) => {
    try {
        const {category, subcategory, exsubcategory, name, discription, price} = req.body;
        
        await productModel.create({
            categoryId : category,
            subcategoryId : subcategory,
            exsubcategoryId : exsubcategory,
            name : name,
            discription : discription,
            price : price,
            image : req.file.path,
        })

        return res.redirect('/product/viewproductpage')
    } catch (error) {
        console.log(error);
        return false
    }
}

const viewproductPage = async(req, res) => {
    let product = await productModel.find({}).populate('categoryId').populate('subcategoryId').populate('exsubcategoryId')
    
    return res.render('Product/view_Product', {
        product
    })
}

const deleteProduct = async(req, res) =>{
    try {
        let id = req.query.id;

        const single = await productModel.findById(id)
        fs.unlinkSync(single.image)

        await productModel.findByIdAndDelete(id)

        return res.redirect('/product/viewproductpage')
    } catch (error) {
        console.log(error);
        return false
    }
}

const editProduct = async (req,res) => {
    try {
        const id = req.query.id;
        const category = await categoryModel.find({status:'active'});
        const subcategory = await subCategoryModel.find({status:'active'});
        const exsubcategory = await exSubCategoryModel.find({status:'active'});
        const single = await productModel.findById(id).populate('categoryId').populate('subcategoryId').populate('exsubcategoryId');
        console.log(single);
        
        
        return res.render('Product/edit_Product', {
            single, category, subcategory, exsubcategory
        })
    } catch (error) {
        console.log(error);
        return false
    }
}

const changeProduct = async (req, res) => {
    try {
        const {editid, category, subcategory, exsubcategory, name, discription, price} = req.body;

        if (req.file) {
            const single = await productModel.findById(editid)
            fs.unlinkSync(single.image)
            await productModel.findByIdAndUpdate(editid,{
                categoryId : category,
                subcategoryId : subcategory,
                exsubcategoryId : exsubcategory,
                name : name,
                discription : discription,
                price : price,
                image : req.file.path,
            })
            
            return res.redirect('/product/viewproductpage')
        } else {
            const single = await productModel.findById(editid)

            await productModel.findByIdAndUpdate(editid,{
                categoryId : category,
                subcategoryId : subcategory,
                exsubcategoryId : exsubcategory,
                name : name,
                discription : discription,
                price : price,
                image : single.image
            })
            return res.redirect('/product/viewproductpage')
        }

    } catch (error) {
        console.log(error);
        return false;
    }
}

const changeStatus = async(req,res) => {
    try {
        
        const id = req.query.id;
        const status = req.query.status;
        
        if (status=="active") {
            
            await productModel.findByIdAndUpdate(id,{
                status:"deactive"
            })
            return res.redirect('/product/viewproductpage')
        } else {
            await productModel.findByIdAndUpdate(id,{
                status:"active"
            })
            return res.redirect('/product/viewproductpage')
        }
    } catch (error) {
        console.log(error);
        
    }
}

const ajaxgetSubcategory = async(req, res) => {
    try {
        let id = req.query.id;
        
        let category = await subCategoryModel.find({categoryId : id, status: 'active'})
        
        return res.send({
            success : true,
            message : "Data will fetched.....",
            category
        })
        
    } catch (error) {
        console.log(error);
        return false
    }
}
const ajaxgetexSubcategory = async(req, res) => {
    try {
        let id = req.query.id;
        
        let subcategory = await exSubCategoryModel.find({subcategoryId : id, status: 'active'})
        
        return res.send({
            success : true,
            message : "Data will fetched.....",
            subcategory
        })
        
    } catch (error) {
        console.log(error);
        return false
    }
}

module.exports = {
    productPage,
    addProduct,
    viewproductPage,
    deleteProduct,
    editProduct,
    changeProduct,
    changeStatus,
    ajaxgetSubcategory,
    ajaxgetexSubcategory,
}
const categoryModel = require('../modules/categoryModel')
const subCategoryModel = require('../modules/subcategoryModel')
const exSubCategoryModel = require('../modules/exsubcategoryModel')

const exsubCategoryPage = async(req, res) =>{
    try {
        const category = await categoryModel.find({status: 'active'});
        const subcategory = await subCategoryModel.find({status: 'active'});

        return res.render('exsubcategory/add_exsubCategory',{
            category : category,
            subcategory : subcategory,
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}
 
const addexsubCategory = async(req, res) => {
    try {
        const {category, subcategory, exsubcategory} = req.body;
     
        await exSubCategoryModel.create({
            categoryId : category,
            subcategoryId : subcategory,
            exsubcategory : exsubcategory,
        })

        return res.redirect('/exsubcategory/viewexsubcategorypage')
    } catch (error) {
        console.log(error);
        return false
    }
}

const viewexsubCategoryPage = async(req, res) => {
    let exsubcategory = await exSubCategoryModel.find({}).populate('categoryId').populate('subcategoryId')

    return res.render('exsubcategory/view_exsubCategory', {
        exsubcategory
    })
}

const deleteexsubCategory = async(req, res) =>{
    try {
        let id = req.query.id;
        await exSubCategoryModel.findByIdAndDelete(id)

        return res.redirect('/exsubcategory/viewexsubcategorypage')
    } catch (error) {
        console.log(error);
        return false
    }
}

const editexsubCategory = async (req,res) => {
    try {
        const id = req.query.id;
        const category = await categoryModel.find({status:'active'});
        const subcategory = await subCategoryModel.find({status:'active'});
        const single = await exSubCategoryModel.findById(id).populate('categoryId').populate('subcategoryId');
        
        
        return res.render('exsubcategory/edit_exsubCategory', {
            single, category, subcategory
        })
    } catch (error) {
        console.log(error);
        return false
    }
}

const changeexsubCategory = async (req, res) => {
    try {
        const {editid, category, subcategory, exsubcategory} = req.body;

        await exSubCategoryModel.findByIdAndUpdate(editid,{
            categoryId : category,
            subcategoryId : subcategory,
            exsubcategory : exsubcategory,
        })

        return res.redirect('/exsubcategory/viewexsubcategorypage')
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
            
            await exSubCategoryModel.findByIdAndUpdate(id,{
                status:"deactive"
            })
            return res.redirect('/exsubcategory/viewexsubcategorypage')
        } else {
            await exSubCategoryModel.findByIdAndUpdate(id,{
                status:"active"
            })
            return res.redirect('/exsubcategory/viewexsubcategorypage')
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

module.exports = {
    exsubCategoryPage,
    addexsubCategory,
    viewexsubCategoryPage,
    deleteexsubCategory,
    editexsubCategory,
    changeexsubCategory,
    changeStatus,
    ajaxgetSubcategory,
}
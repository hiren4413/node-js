const categoryModel = require('../modules/categoryModel')
const subCategoryModel = require('../modules/subcategoryModel')

const subCategoryPage = async(req, res) =>{
    try {
        const category = await categoryModel.find({status: 'active'});

        return res.render('subcategory/add_subCategory',{
            category : category,
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}
  
const addsubCategory = async(req, res) => {
    try {
        const {category, subcategory} = req.body;
     
        await subCategoryModel.create({
            categoryId : category,
            subcategory : subcategory
        })

        return res.redirect('/subcategory/viewsubcategorypage')
    } catch (error) {
        console.log(error);
        return false
    }
}

const viewsubCategoryPage = async(req, res) => {
    let subcategory = await subCategoryModel.find({}).populate('categoryId')

    return res.render('subcategory/view_subCategory', {
        subcategory
    })
}

const deletesubCategory = async(req, res) =>{
    try {
        let id = req.query.id;
        await subCategoryModel.findByIdAndDelete(id)

        return res.redirect('/subcategory/viewsubcategorypage')
    } catch (error) {
        console.log(error);
        return false
    }
}

const editsubCategory = async (req,res) => {
    try {
        const id = req.query.id;
        const category = await categoryModel.find({status:'active'});
        const single = await subCategoryModel.findById(id).populate('categoryId');
        
        
        return res.render('subcategory/edit_subCategory', {
            single, category
        })
    } catch (error) {
        console.log(error);
        return false
    }
}

const changesubCategory = async (req, res) => {
    try {
        const {editid, category, subcategory} = req.body;

        await subCategoryModel.findByIdAndUpdate(editid,{
            categoryId : category,
            subcategory : subcategory,
        })

        return res.redirect('/subcategory/viewsubcategorypage')
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
            
            await subCategoryModel.findByIdAndUpdate(id,{
                status:"deactive"
            })
            return res.redirect('/subcategory/viewsubcategorypage')
        } else {
            await subCategoryModel.findByIdAndUpdate(id,{
                status:"active"
            })
            return res.redirect('/subcategory/viewsubcategorypage')
        }
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {
    subCategoryPage,
    addsubCategory,
    viewsubCategoryPage,
    deletesubCategory,
    editsubCategory,
    changesubCategory,
    changeStatus
}
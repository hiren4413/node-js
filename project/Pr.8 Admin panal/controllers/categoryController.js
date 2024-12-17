const categoryModel = require('../modules/categoryModel')

const CategoryPage = (req, res) =>{
    return res.render('category/add_category')
}

const addCategory = async(req, res) => {
    try {
        const {category} = req.body;
     
        let user = await categoryModel.create({
            category : category
        })

        return res.redirect('/category/viewcategorypage')
    } catch (error) {
        console.log(error);
        return false
    }
} 
const viewCategoryPage = async(req, res) => {
    let category = await categoryModel.find({}) 
    return res.render('category/view_category', {
        category
    })
}

const deleteCategory = async (req, res) => {
    const id = req.query.id;

    await categoryModel.findByIdAndDelete(id);

    return res.redirect('/category/viewcategorypage')
}

const editCategory = async (req,res) => {
    try {
        const id = req.query.id;
        const single = await categoryModel.findById(id);
        
        
        return res.render('category/edit_Category', {
            single
        })
    } catch (error) {
        console.log(error);
        return false
    }
}

const changeCategory = async (req, res) => {
    try {
        const {editid, category} = req.body;

        await categoryModel.findByIdAndUpdate(editid,{
            category : category,
        })

        return res.redirect('/category/viewcategorypage')
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
            
            await categoryModel.findByIdAndUpdate(id,{
                status:"deactive"
            })
            return res.redirect('/category/viewcategorypage')
        } else {
            await categoryModel.findByIdAndUpdate(id,{
                status:"active"
            })
            return res.redirect('/category/viewcategorypage')
        }
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {
    CategoryPage,
    viewCategoryPage,
    addCategory,
    deleteCategory,
    editCategory,
    changeCategory,
    changeStatus
}
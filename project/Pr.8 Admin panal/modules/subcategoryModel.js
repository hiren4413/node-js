const mongoose=require('mongoose')

const subcategorySchema = mongoose.Schema({
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'category',
    },
    subcategory:{
        type:String,
        require:true
    },
    status:{
        type: String,
        default: 'deactive'
    }
})

const subcategory = mongoose.model('subCategory',subcategorySchema)

module.exports = subcategory
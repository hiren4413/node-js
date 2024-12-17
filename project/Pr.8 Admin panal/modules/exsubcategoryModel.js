const mongoose=require('mongoose')

const ex_subcategorySchema = mongoose.Schema({
    
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'category',
    },
    subcategoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subCategory',
    },
    exsubcategory:{
        type:String,
        require:true
    },
    status:{
        type: String,
        default: 'deactive'
    }
}) 

const exsubCategory = mongoose.model('exsubCategory',ex_subcategorySchema)

module.exports = exsubCategory 
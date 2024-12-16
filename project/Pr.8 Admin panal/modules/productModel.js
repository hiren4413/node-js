const mongoose=require('mongoose')

const productSchema = mongoose.Schema({
    
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'category',
    },
    subcategoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subCategory',
    },
    exsubcategoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'exsubCategory',
    },
    name:{
        type:String,
        require:true
    },
    discription:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    status:{
        type: String,
        default: 'deactive'
    }
})

const product = mongoose.model('product',productSchema)

module.exports = product
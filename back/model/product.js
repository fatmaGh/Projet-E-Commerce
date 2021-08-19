const  mongoose = require('mongoose')


const productSchema= new mongoose.Schema ({

    name:{
        type: String,
    },

    description :{
        type:String,
    },

    price: {
        type:Number,
    },

    qte:{
        type:Number,
    },

    category: {
        type: String,
    },

    image:{
        data: Buffer,
        contentType: String
    }
})

module.exports = Product = mongoose.model('products', productSchema)
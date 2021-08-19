const mongoose = require('mongoose')


const adminScheme = new mongoose.Schema({
    fullName:{
        type:String
    },
    email: {
        type: String,
    },
    password: {
        type: String
    },
    role: {
        type: String
    }

})

module.exports= Admin = mongoose.model('admin', adminScheme)
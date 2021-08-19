const mongoose = require('mongoose')


const userScheme = new mongoose.Schema({
    fullName: {
        type: String,

    },
    email: {
        type: String,
    },
    password: {
        type: String
    }
})

module.exports= User = mongoose.model('users', userScheme)
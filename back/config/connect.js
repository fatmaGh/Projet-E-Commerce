const mongoose = require('mongoose')
const config = require('config')


const Connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log('Database is connected')
    }
    catch (error) {
        console.log(`Database is disconnected ${error}`)
    }
}

module.exports=Connect
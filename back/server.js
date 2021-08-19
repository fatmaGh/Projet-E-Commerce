const express= require('express')
const Connect= require('./config/connect')


const app= express()

app.use('/files', express.static('files'));
app.use(express.json())
//admin Router
app.use("/admin", require("./routes/admin"))
// user Router
app.use("/user", require("./routes/user_login"))
//Product Router
app.use("/product" , require("./routes/product"))
//Order Router
app.use("/order" , require("./routes/order"))


require("dotenv").config({ path: "./config/.env" });








Connect()

const PORT= process.env.PORT||process.env.port;

app.listen(PORT, err=>{
    err? console.log('Server is disconnected', err): console.log(`Server is connected ${PORT}`)
} ) 
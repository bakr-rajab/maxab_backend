const express =require('express');
require('dotenv').config();
const routes = require('./src/routes/index')
// const connect s= require('./src/db/connect')
const userRoutes=require('./src/routes/user')
const app = express();


// settings
 app.set("port",process.env.PORT || 3000)


//  middlewares
app.use(express.json());

//morgan
//cors

//routes middlewares
// app.use('/',(req,res)=>{
//     // console.log(connect);
//     res.send("Hello world")
// })

app.use('/api',routes)
app.use('/users',userRoutes)

app.listen(app.get('port'),()=>{
    console.log("listening on http://localhost:%d " , app.get('port'))
})
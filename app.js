const express=require('express')
const bodyParser=require('body-parser')
const morgan=require('morgan')
const app=express()
app.use(morgan('dev'))

// morgan.token('level', function(req, res) {
//     return res.data;
// });

// morgan.token('param', function(req, res, param) {
//     return req.params[param];
// });

// app.use(morgan(':method :level :status :param :response-time ms'));
// morgan(':method :url :status :res[name] - :response-time ms');

// parse application/x-www-form-urlencoded
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
  }));
  
// app.post('/',(req,res)=>{
//     console.log(req.body);
//     const data={level:177,res:req.body.name};
//     res.send(req.body)
// })

app.listen(5000,()=>{
    console.log("listening on 5000")
})

//  const sum=(num1,num2)=>{
//      console.log(num1);
//     return num1+num2;
// }

// module.exports ={
//     sum
// }
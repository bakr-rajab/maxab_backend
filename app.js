const express=require('express')
const bodyParser=require('body-parser')
const morgan=require('morgan')
const app=express()


app.use(morgan('tiny'))

morgan.token('level', function(req, res) {
    return res.data;
});

// morgan.token('param', function(req, res, param) {
//     return req.params[param];
// });

// app.use(morgan(':method :level :status :param :response-time ms'));
morgan(':method :url :status :res[name] - :response-time ms');

// parse application/x-www-form-urlencoded
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    // res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
  })

app.post('/',(req,res)=>{
    console.log(req.body);
    const data={level:177,res:req.body.name};
    res.send(req.body)
})

app.listen(5000,()=>{
    console.debug("listening on 5000")
})
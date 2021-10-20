var express=require('express')
var bodyParser = require('body-parser')
var app=express()
app.use(bodyParser.urlencoded({ extended: false }))
 

app.use(bodyParser.json())
app.post('/div',(req,res)=>{
    var getNum1=parseFloat(req.body.num1)
    var getNum2=parseFloat(req.body.num2)
    var result=(getNum1/getNum2)
    res.json({"result":result})
})
app.listen(3000,(req,res)=>{
    console.log("server started at http://localhost:3000")
})

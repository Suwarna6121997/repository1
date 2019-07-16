var java_module = require('./javascript_module.js');
var express = require('express');
var app = express();

 app.get('/add_function/:num1/:num2',function(req,res,next)
{
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    var add = java_module.add_function(num1,num2);
    res.send(add);
    //res.send("welcome");
   // res.status(200).send({res :{ home:false, content: "Addition is ",add}});
    
});

app.get('/square_function/:num1',function(req,res,next)
{
    let num1 = req.params.num1;
   if(num1 >='a'&& num1 <='z')
    {
    var err = new Error("Error: It is a character");
    next(err);
    res.status(200).send("Error: It is a character");
    }
    else{
    var square = java_module.square_function(num1);
    res.status(200).send({res :{ home:false, content: "Square is ",square}});
    }
});

app.get('/power_function/:num1/:num2',function(req,res)
{
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    if(isNaN(num1) || isNaN(num2))
    {
        res.status(200).send("Error Occured..!!");
        return false;
    }
    else
    {
    var pow = java_module.power_function(num1,num2);
    res.status(200).send({res :{ home:false, content: "Answer is ",pow}});
    }
});

app.get('/sqrt_function/:num1',function(req,res)
{
    let num1 = parseInt(req.params.num1);
    if(isNaN(num1) || isNaN(num2))
    {
        res.status(200).send("Error Occured..!!");
        return false;
    }
    else{
    var sqrt = java_module.sqrt_function(num1);
    res.status(200).send({res :{ home:false, content: "Square root is ",sqrt}});
    }
});

app.get('/multiplication_function/:num1/:num2',function(req,res)
{
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    if(isNaN(num1) || isNaN(num2))
    {
        res.status(200).send("Error Occured..!!");
        return false;
    }
    else
    {
    var mul = java_module.multiplication_function(num1,num2);
    res.status(200).send({res :{ home:false, content: "Multiplication is ",mul}});
    }
});

app.listen("3000");



/*
console.log(java_module.add_function(4,2));
console.log(java_module.square_function(2));
console.log(java_module.power_function(4,2));
*/

/*
let num1 = parseFloat(req.params.num1);
let num2 = parseFloat(req.params.num2);

if(isNaN(num1) || isNaN(num2))
{
    res.status(200).send("Error Occured..!!");
    return false;
}
else
{
   let add=msg.addFunction(num1,num2);
   res.status(200).send({ res : { home: false,content:"addition is ",add}});
}
*/
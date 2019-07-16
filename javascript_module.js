var response = {
    status: [],
    error: [],
    output:[],
    input:[]
}

module.exports= {

add_function: function(num1,num2)
{
    response.status.pop()
    response.error.pop()
    response.output.pop()
    response.input.pop()
    response.input.pop()

    if(isNaN(num1) || isNaN(num2))
    {
        response.status.push("Not Okay")
        response.error.push("1000: Not a number" )
        response.input.push(num1, num2)
    }
    else{
        sum = num1+num2;
        response.status.push("Okay")
        response.output.push(sum)
        response.input.push(num1, num2)  
    }
    return response;

},

square_function: function(a)
{
    return a*a;
},

power_function: function(a,b)
{
    return a**b;
},

sqrt_function: function(a)
{
    return a**(0.5);

},
multiplication_function: function(a,b)
{
    return a*b;

}
}
/*
module.exports.add =add; 
module.exports.square =square; 
module.exports.power =power; 
*/
function validate(num1,num2)
{
    if(isNaN(num1) || isNaN(num2))
    {
        //res.status(200).send("Error Occured..!!");
        return false;
    }
    else{
        return true;
    }


}
var r1 = require("readline")
var prompts= r1.createInterface(process.stdin,process.stdout)

prompts.question("enter the string:",function(input)
{
    var array2 = Array.from(input)
    console.log(array2)
 result= array2.reduce((count,element)=> {
        if(!count[element])
        {
            count[element]=1
        }
        else
        {
            count[element] =count[element]+1
        }return count
    } ,{});

console.log(result)

});
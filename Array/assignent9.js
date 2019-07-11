var numArray = [1, 2, 3, 4, 5];
var germanArray = ["eins", "zwei", "drei", "vier", "fünf"];
var output = numArray.map(german)
var i=0;
function german(num,i)
{
    console.log("The Number "+num+" is called "+germanArray[i]+" in german")
    
}i++
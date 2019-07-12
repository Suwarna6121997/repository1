var r1 = require("readline")
var prompts= r1.createInterface(process.stdin,process.stdout)

prompts.question("enter the number:",function(input)
{

var value = parseInt(input)
var items = [1, 2, 3, 4, 5, 7, 8, 9];
function binary_Search(items, value)
{
    var firstIndex  = 0,
    lastIndex   = items.length - 1,
    middleIndex = parseInt((lastIndex + firstIndex)/2);

    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
      else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }
    if(items[middleIndex]!=value)
    {
        return "value not present in array";
    }
    else {
        return middleIndex;
    }
}
console.log("The index of value you entered is:")
console.log(binary_Search(items, value));
});


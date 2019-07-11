var r1 = require("readline")
var prompts= r1.createInterface(process.stdin,process.stdout)

prompts.question("enter the string:",function(input)
{

//var input = "SuwArna"
var con = Array.from(input)
var ch = ''
var neww=[]
for(var i=0; i<con.length-1; i++)
{
var ch = con[i];
var check = ch.charCodeAt(0)
if(check>=65 && check<=90)
{
    neww.push(ch.toLowerCase());
}
else{
    neww.push(ch.toUpperCase());
}
}
neww = neww.join("")
console.log(neww)
})
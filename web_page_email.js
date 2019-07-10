
function email_validation()
{
var input = document.getElementById("input").value;


var splitt = input.split(/[.]/);
console.log(splitt)
if (splitt[1].length>=2)
{
var split2 = Array.from(splitt[0])
console.log(split2)

 var i =0
 while(i<split2.length)
 { 
    if(split2[0]>='a'&& split2[0]<='z'|| split2[0]>='A'&& split2[0]<='Z' || split2[0]>='0'&& split2[0]<='9')
    i++;
 }
 alert("valid")
}

else
{
    alert("Invalid")
}

}
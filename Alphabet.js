
function checkAlpha()
{
var ch = document.getElementById("ch").value

if(ch>='a'&& ch<='z'|| ch>='A'&&ch<='Z')
{
document.getElementById("demo").innerHTML="It is a character"
}
else{
document.getElementById("demo").innerHTML="It is not a character"
}
}

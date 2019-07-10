function perfectNo()
{

var tmpp = document.getElementById("num").value;

var Num= tmpp;
var sum=0;

for(i=1;i<Num;i++)
{
    if(Num%i==0)
    {
        sum=sum+i;
    }
   
}
if(sum==Num){
document.getElementById("demo").innerHTML="Perfect Number"
}
else{
document.getElementById("demo").innerHTML="Not Perfect Number"
}
}
function count()
{
var count= 0;    
var tmp = document.getElementById("num").value;

var Num = tmp
while(0!=Num)
    {
      Num=parseInt(Num/10) ;
      count++;
    }
    document.getElementById("demo").innerHTML = count ;
}
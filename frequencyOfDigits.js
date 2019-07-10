function digi()
{
 var j,rem=0;   
 var arr = [0,0,0,0,0,0,0,0,0,0];
 var tmp = document.getElementById("num").value;
var Num=tmp;

 while(Num!=0)
 {
   rem=Num%10;
   Num=Num/10;
   arr[rem]++;   
 }
 var out="";
 for(j=0;j<10;j++)
   {   
       out = out + arr[j].toString();
}
        document.getElementById("demo").innerHTML = out ;   
       // var neww = arr.toString();
        //document.getElementById("demo").innerHTML = neww;

    }
    
}
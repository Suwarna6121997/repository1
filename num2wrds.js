
var digi = [ " ", "one", "two ", "three ", "four ", 
                 "five ", "six ", "seven ", "eight ", 
                 "nine ", "ten ", "eleven ", "twelve ", 
                 "thirteen ", "fourteen ", "fifteen ", 
                 "sixteen ", "seventeen ", "eighteen ", 
                 "nineteen "]

var ten = [ " ", " ", "twenty ", "thirty ", "forty ", 
                 "fifty ", "sixty ", "seventy ", "eighty ", 
                 "ninety "] 

var ss_db  = {0:" ",1:"Thousand ",2:"Million",3:"Billion",2:"Million",3:"Billion",4:"Trillion",5:"Quadrillion",6:"Quintillion",7:"Sextillion",8:"Septillion",9:"Octillion",10:"Nonillion",11:"Decillion",12:"Undecillion",13:"Duodecillion",14:"Tredecillion",15:"Quattuordecillion",16:"Quindecillion",17:"Sexdecillion",18:"Septendecillion",19:"Octodecillion",20:"Novemdecillion",21:"Vigintillion",22:"Centillion"}

var str = 99689;


function hundred(num)
{
var h = parseInt(num/100)
var H = digi[parseInt(h)]
console.log(H+"Hundred");
var Ts = parseInt(str%100)          //100 val
if(Ts<=19)
{
    console.log(digi[parseInt(Ts)])
}
else
{
    tt = parseInt(Ts/10)
    dd = Ts%10
    console.log(ten[parseInt(tt)]+digi[parseInt(dd)])
}
}


if (str<=19)
{
console.log(digi[parseInt(str)]);
}

if(str>19 && str<100)              //for 2 digit
{
var d = parseInt(str%10);
var t = parseInt(str/10);
console.log(ten[parseInt(t)]+digi[parseInt(d)]);
}



if(str>=100 && str<1000)         //for 3digit
{
    console.log(hundred(str));
}

if(str>=1000 && str<10000)
{
    var th = parseInt(str/1000)
    var k = parseInt(str%1000)
    console.log(digi[parseInt(th)]+"Thousand");
    console.log(hundred(str));
}

if(str>=10000 && str<100000)
{
    var frst_digi = parseInt(str/10000);
    var N1 = parseInt(str%10000);
    var scnd_digi = parseInt(N1/1000)
    var N2 = parseInt(N1%1000)
    var TH = parseInt(frst_digi)*10+parseInt(scnd_digi);
    console.log(digi[parseInt(TH)]+"Thousand");
    console.log(hundred(N2));
}

















/*
function three_digit()
{
    var temp=chunk([5,6,7,4,3,2],3);
    function chunk(num, chunk_size){
        var index = 0;
        var arrayLength = num.length;
        var tempArray = [];
        
        for (index = 0; index < arrayLength; index += chunk_size) {
            myChunk = num.slice(index, index+chunk_size);
            tempArray.push(myChunk);
        }
    
        return tempArray;
    }
     console.log(temp[0][2]);


     function conv()
     {





     }


}

three_digit();*/

function rangeBetween(a,b)
{
    var arr = []
    while(a<=b)
    {
    arr.push(a);
    a++;
    }
    return arr;
}

console.log(rangeBetween(-3,4))


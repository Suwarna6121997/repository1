var matrx1=[[1,2],[3,4],[4,5]]
var matrx2=[[2,3,4],[1,2,3]]

var matrx1_row = matrx1.length
var matrx1_col = matrx1[0].length

var matrx2_row = matrx2.length
var matrx2_col = matrx2[0].length

var result = []


for(var i=0;i<matrx1_row;i++)
{
result.push([0])
for(var j=0;j<matrx1_row;j++)
    {
    result[i][j] = 0

    }
}

if(matrx1_col == matrx2_row)
{
    for(var i=0; i<matrx1_row;i++)
    {   
        for(var j=0; j<matrx2_col;j++)
        {
            for(var k=0; k<matrx1_col;k++)
                {
                    result[i][j] += matrx1[i][k]*matrx2[k][j]

                }
        }

    }


for(var i=0,len=matrx1.length; i<len; i++)
{
    var tmp = ""
    for(var j=0,len1=matrx1[i].length; j<len1; j++)
    {
        tmp = tmp +" " + matrx1[i][j]
    }
    console.log(tmp)
}

for(var i=0,len=matrx2.length;i<len; i++)
{
    var tmp = ""
    for(var j=0,len1=matrx2[i].length; j<len1; j++)
    {
        tmp = tmp +" " + matrx2[i][j]
    }
    console.log(tmp)
}

for(var i=0,len=result.length;i<len; i++)
{
    var tmp = ""
    for(var j=0,len1=result[i].length; j<len1; j++)
    {
        tmp = tmp +" " + result[i][j]
    }
    console.log(tmp)
}

}

else{
    console.log("Array dimentions are not matching")
}
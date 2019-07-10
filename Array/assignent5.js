var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
var o = ["th","st","nd","rd"]

function printColour()
{
    var i = 1;
    for(var index_c = 0, index_o = 1; index_c < color.length-1; index_c++,index_o++)
    {
        if(index_o > 3)
        {
            index_o = 0;
        }
        console.log(i+o[index_o]+" choice is "+color[index_c])
        i++;
    }
}

printColour();

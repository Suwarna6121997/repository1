
function Dashes()
{
    
    var inp = document.getElementById("inp").value;
    var input = Array.from(inp)
    var arr = [];
    var answer;
    arr.push(input[0])
    for(var index = 0; index<input.length-1; index++)
    {
        if(input[index]%2==0 || input[index]==0  && input[index+1]%2==0|| input[index+1]==0)
        {
            arr.push("-")
            arr.push(input[index+1])
        }
        else{
            arr.push(input[index+1])
        }
    }
    var answer = arr.join("")
    alert(answer)
}


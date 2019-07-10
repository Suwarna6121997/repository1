var sample_array = [0, 15, false, -22, '',undefined, 47, null]
function filter_array(arr)
{

return (arr!= 0 && arr!='' && arr!= undefined && arr!= null && arr!= false);
}
var answer = sample_array.filter(filter_array)
console.log(answer)
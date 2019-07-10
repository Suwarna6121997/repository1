//var p_in = process.stdin
//p_in.setEncoding('utf-8')

console.log("Create a book 1")
console.log("apend line to book 2")
console.log("Insert a line in book 3")
console.log("Delete a line from book 4")
console.log("Read book 5")
console.log("Delete book 6")
console.log("List books 7")


/*
p_in.on("data",function(data)
{   
input = data

*/
var r1 = require("readline")
var i = ""
var prompts = r1.createInterface(process.stdin,process.stdout)
    
prompts.question("enter the choice:",function(i){

console.log("choice entered");
console.log(i);



var input = i
switch (parseInt(input))
{

case 1:
    createFile();
    break

case 2:
    writeFile();
    break




}

});





function createFile()
 {
    var fs = require('fs');
    var r1 = require("readline")
    var f = ""//file name
    var prompts = r1.createInterface(process.stdin,process.stdout)
    
    prompts.question("enter the book name:",function(f){
    var msg = ""
    f = f+".txt" //appending extension
    var w = "" //Blank file
    fs.writeFile(f,w,(err) => {
    if (err) console.log(err);
    console.log("successfully created");
    });
    }); 
    
}

function writeFile()
{
    var fs = require('fs');

    prompts.question("enter the book name",function(b){
        var input=b;


    fs.appendFile(input, 'its content', function (err) {
        if (err)
        { throw err;
        }
         console.log('Written on file successfully.');
     
       }); 

})
}
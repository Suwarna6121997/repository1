
var fs = require('fs');
var r1 = require("readline")
var f = ""//file name
var prompts = r1.createInterface(process.stdin,process.stdout)

prompts.question("enter the book name:",function(f){
var msg = ""
f = f+".txt" //appending extension
var data = "0"
fs.writeFile(f,data,(err) => {
if (err) console.log(err);
console.log("successfully written");
});
});








/*
fs.open('myjsfile.txt', 'w', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

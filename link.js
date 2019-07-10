const fs = require('fs');
const path = "./";

/*
console.log("Create a book 1")
console.log("apend line to book 2")
console.log("Insert a line in book 3")
console.log("Delete a line from book 4")
console.log("Read book 5")
console.log("Delete book 6")
console.log("List books 7")


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



*/



class Node { 
    // constructor 
    constructor(element) 
    { 
        this.element = element; 
        this.next = null
    } 
} 



class LinkedList { 
    constructor(book) 
    { 
        this.head = null; 
        this.size = 0; 
        this.book = book;
    }  

add(element) 
{ 
    // creates a new node 
    var node = new Node(element); 
    // to store current node 
    var current; 
  
    // if list is Empty add the 
    // element and make it head 
    if (this.head == null) 
        this.head = node; 
    else { 
        current = this.head; 
  
        // iterate to the end of the 
        // list 
        while (current.next) { 
            current = current.next; 
        } 
  
        // add node 
        current.next = node; 
    } 
    this.size++; 
} 


insertAt(element, index) 
{ 
    if (index > 0 && index > this.size) 
        return false; 
    else { 
        // creates a new node 
        var node = new Node(element); 
        var curr, prev; 
  
        curr = this.head; 
  
        // add the element to the 
        // first index 
        if (index == 0) { 
            node.next = head; 
            this.head = node; 
        } else { 
            curr = this.head; 
            var it = 0; 
  
            // iterate over the list to find 
            // the position to insert 
            while (it < index) { 
                it++; 
                prev = curr; 
                curr = curr.next; 
            } 
  
            // adding an element 
            node.next = curr; 
            prev.next = node; 
        } 
        this.size++; 
    } 
} 




removeFrom(index) 
{ 
    if (index > 0 && index > this.size) 
        return -1; 
    else { 
        var curr, prev, it = 0; 
        curr = this.head; 
        prev = curr; 
  
        // deleting first element 
        if (index == 0) { 
            this.head = curr.next; 
        } 
        else { 
            // iterate over the list to the 
            // position to removce an element 
            while (it < index) { 
                it++; 
                prev = curr; 
                curr = curr.next; 
            } 
  
            // remove the element 
            prev.next = curr.next; 
        } 
        this.size--; 
  
        // return the remove element 
        return curr.element; 
    } 
} 



printList() 
{ 
    var curr = this.head; 
    var str = ""; 
    while (curr) { 
        str += curr.element + " "; 
        curr = curr.next; 
    } 
    console.log(str); 
} 

save(path,book)             //Store ll to file
    {
        var temp = this.head;
        while(temp)
        {
            if(saveinfile(path,this.book,temp.line) == 1)
            {
                console.log("File Does not Exist");      //To Change
                break;
            }
            temp = temp.next;
        }
        
    }
}
 


    function saveinfile(path,book,line)
    {
        if(fs.existsSync(path+book+".txt") == true)
        {
            if(fs.statSync(path+book+".txt").size == 0)
            {
                fs.writeFileSync(path+book+".txt",line)    
            }
            else
            {
                fs.writeFileSync(path+book+".txt","\n"+line)
            }
        }
        else
        {
            return 1
        }
    }


    function createbook(book)
    {
        if(fs.existsSync(path+book+'.txt') == true)
        {
            console.log("File Already Exist")
            return 0
        }
        else{
        fs.writeFileSync(path+book+".txt","")
        console.log("File Created !! ")
    }
}
    
    function deletebook(book)
    {
        if(fs.existsSync(path+book+'.txt') == true)
        {
            fs.unlinkSync(path+book+".txt")
            console.log("File Deleted")
            return 0 
        }
        console.log("File Does not exist")
        return 0
    }



    

    var suwarna = new LinkedList();
/*
var r1 = require("readline")
var i = ""
var prompts = r1.createInterface(process.stdin,process.stdout)
    
prompts.question("enter the choice:",function(i){
   */


   
suwarna.add(10);
suwarna.add(20);
suwarna.add(30);
suwarna.add(6);
suwarna.printList();
suwarna.removeFrom(2) ;
suwarna.printList();
suwarna.insertAt(30, 3) 
suwarna.printList();
//createbook('aadi')
//createbook('nanu')
//createbook('nilima')
suwarna.save(path,'aadi')


//suwarna.add(20);
//suwarna.add(30);
    //});







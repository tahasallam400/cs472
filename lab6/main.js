"use strict"

//Question using lampda does not work it this refers to window
String.prototype.filter=function(...str){
    return this.split(' ').filter((word)=>str.indexOf(word)<0).join(" ");
};

Array.prototype.bubbleSort= function(){
    let len =this.length;
    for(let i=0;i<len;++i){
        for(let j=0;j<len;++j){
            if(this[j]>this[j+1]){
                let temp = this[j];
                this[j]=this[j+1];
                this[j+1]=temp;
            }
        }
    }
    return this;
};


function Person(name,age){
    this.name=name;
    this.age =age;
}
Person.prototype.describe=function(){
    return this.name+", "+this.age+" years old.";
}

function Teacher(name,age){
    this.name=name;
    this.age=age;
}

Teacher.prototype.__proto__=Person.prototype;

Teacher.prototype.teach=function(subject){
    return this.name+" is now teaching "+subject;
}




console.log("String Filter   "  );
console.log( "Filter \'This house is not nice!\' by [not]  " );
console.log("This house is not nice!".filter("not") ) ;
 console.log("---------"  );
console.log( "Filter \'This house is not nice!\' by [not,house]  " );
console.log("This house is not nice!".filter("not","house"),"This is nice!" ) ;

console.log("--------------------------------------------------"  );
console.log("Bubble Sort Array" )
console.log("Sort [20,25,5,-5,4,8] by bubbleSort is   " +[20,25,5,-5,4,8].bubbleSort() ); 
console.log("--------------------------------------------------"  );
console.log("Inheritance Person Teacher - " );
let teacher1 = new Teacher("Mohamed",35);
console.log(teacher1.teach("WAP"));

   



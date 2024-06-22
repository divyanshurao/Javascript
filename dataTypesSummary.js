// Two types: Primitive and Non - primitive, this is based upon the way data is stored in memory
// Essentially its about Call by Value and Call by reference

// Primitive: When passed, a copy is given not the original address
// String, Number, bool, null, undefined, Symbol, BigInt

// Non-Primitive, Reference: original is given
// Array, Objects, Functions 

const id = Symbol("123");
const id2 = Symbol("123");

console.log(id===id2);
console.log(id)

//array
const names = ["ABC","CBD"]

//object
let myObj={
    name: "ABC",
    age : 22
}

//fuction
const myFunction = function(){
    console.log("My Function");
}
myFunction();
console.log(typeof myFunction);

//Datatype of non primitive returns object


//----------------------------------------------

// Stack and Heap

// Stack -> Primitive
// Heap -> Non Primitive

let var1 = "Javasript"
let var2 = var1;
var2 = "Python";

console.log(var1);

//vs

let userOne={
    name: "Devil",
    upi: "user@YBL"
}
let userTwo = userOne;

userTwo.name= "God";
console.log(userTwo.name);
console.log(userOne.name);


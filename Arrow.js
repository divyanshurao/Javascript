 const user = {
    name: "Sam",
    username: "sam11",
    welcomeMessage: function(){
        console.log(`Welcome to this page ${this.name}`);
        console.log(this);
    }
 }

 user.welcomeMessage(); // Welcome to this page Sam

 user.name= "Alex";
 user.welcomeMessage(); // Welcome to this page Alex

 console.log(this); //{} 

 function temp(){
    console.log(this); // too many information

    let username = "star";
    console.log(this.username); // undefined, valid in objects only
 }
 temp();

 // ARROW FUNCTION

 const normalFunc = function(){
    console.log(this); // too many information
 }
normalFunc();

 const arrowFunc = () =>{
    console.log(this); // {}
 }
 arrowFunc();

 const arrowFunc2 = (num1, num2) => { 
   return num1 + num2;   // When using curly braces, we must return (explicit return)
 }

 console.log(arrowFunc2(2,3));

 const arrowFunc3 = (num1, num2) => (num1 + num2); // No need to return (implicit return)

 console.log(arrowFunc3(2,3));


 // If we need to return object in arrow function
 const arrowFunc4 = () => { 
   name: "Dev"  
 }
 console.log(arrowFunc4()); // undefined, as we did not wrap it in {}

 const arrowFunc5 = () => ({name: "Dev"})
 console.log(arrowFunc5()); // {name: "Dev"}


 // Immediately Invoked Function Expression (IIFE)

 function A(){
   console.log("A is normal function")
 }
 A(); // Need to call

 (function B(){ // Named IFFE
   console.log("B is IFFE, for ex setting up Database connection") // To avoid Global variable pollution
 })(); // No need to call

 ((DB)=>{  // Unnamed IFFE
  console.log(`C is IFFE, for ex. setting up Database connection ${DB}`)   
 })('Mongo'); // No need to call

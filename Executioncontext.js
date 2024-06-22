// Java Execution Context

// 1. Global Execution context: stored in this, (windows object incase of browser, different for different environments)
// 2. Function Execution Context
// 3. Eval Execution Context


// Code runs in two phases

// 1. Memory excution phase
// 2. Execution phase 


// Sample code

let var1 = 10;
let var2 = 5;

function add(num1, num2){
    return num1+num2;
}

console.log(add(var1, var2));
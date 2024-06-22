const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed());

const num2 = 123.456;
console.log(num2.toPrecision(4)); //123.5
console.log(num2.toPrecision(2)); //1.2e+2

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //As per US convention 
console.log(hundreds.toLocaleString('en-IN')); //As per Indian convention


// MATHS

console.log(Math.abs(-1)); //1
console.log(Math.round(5.6)); //6
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.6)); //4
console.log(Math.max(1,2,3,4)); //4
console.log(Math.min(1,2,3,4)); //1
console.log(Math.random()); //Random val between 0,1

//Generate random number bw a range
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);

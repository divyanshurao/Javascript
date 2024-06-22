"use strict"; //node will treat all the JS code as per new version

console.log(typeof "Divyanshu");

console.log(typeof null); //object

console.log(typeof undefined); //undefined


// TYPE CONVERSION OF DATA 

let score = 100;
let score2 = "100";

let valueInNumber = Number(score2);

console.log(typeof(score));
console.log(typeof(valueInNumber));

let rubbishNumber = "123abc"
let numberFormat = Number(rubbishNumber)

console.log(typeof(numberFormat)) //This display it to be a number
console.log(numberFormat) //Outputs NaN -> Not a Number

// Number(null) -> 0, Number(undefined) -> NaN

console.log("1" + 2); //12
console.log("1"+ 2 + 2); //122
console.log(1 + 2 + "2"); //32


// Comparision and converion

console.log(null > 0); // null converted to 0 as comparision works different than equality ==
console.log(null == 0); // null is taken as NaN
console.log(null >= 0); // null is converted to 0, hence true
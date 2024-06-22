const name = ["Mike", "Alex", "Stacy"];
const city = ["New Delhi", "Banglore", "New York"];

name.push(city); // It adds city as an array at 3rd index, and doesn't push each elements
console.log(name); // [ 'Mike','Alex','Stacy', [ 'New Delhi', 'Banglore', 'New York' ] ]

// Concat

const name2 = ["Mike", "Alex", "Stacy"];
const city2 = ["New Delhi", "Banglore", "New York"];

const array = name2.concat(city2);
console.log(array); //[ 'Mike', 'Alex', 'Stacy', 'New Delhi', 'Banglore', 'New York' ]

// Spread operator

const array2 = [...name2, ...city2];
console.log(array2); //[ 'Mike', 'Alex', 'Stacy', 'New Delhi', 'Banglore', 'New York' ]


// flat operator

const complexArray = [1, 2, 3, [9, 10, [23, 25]], 4, 5, 6];
// const simplArray = complexArray.flat(Infinity); // Parameter passed is depth(array inside array, 2 in this case)

console.log(complexArray);
// console.log(simplArray);


console.log(Array.from("Wealth")); // ['W','e','a','l','t','h']
console.log(Array.from({name: "Mike"})) // [], as this needs more specification

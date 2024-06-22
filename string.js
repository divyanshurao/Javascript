const name = "John"
const age = 23

console.log(name + age);

// String interpolation

console.log(`His name is ${name.toUpperCase()} and age is ${age}`);

// Another way to declare string
const personName = new String('Mike'); 
console.log(name[0]);
console.log(personName[2]);
// These are not arrays, but string are objects stored as key value pairs
console.log(typeof personName);

// slice
const gameName = 'Cricket-Football';
const tempGame =  gameName.slice(-8,-5);
console.log(tempGame);

// trim
const email = '  name@outlook.com  ';
console.log(email);
console.log(email.trim());

// replace
const url = 'https://google%20india.com';
console.log(url.replace('%20','-'));

// split
const sentence = 'Lion is the king'
console.log(sentence.split(' '));




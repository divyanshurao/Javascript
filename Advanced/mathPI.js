// Can we change the value of constant PI?
console.log(Math.PI); // 3.14159265358979323846
Math.PI = 4; //This will not  change

//But why?
console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }
// And these properties are so hardcoded, they cannot be changed

const user ={
    name: "Shukla",
    age: 24,
    city: "Banglore"
}

console.log(Object.getOwnPropertyDescriptor(user, 'age'));
// { value: 24, writable: true, enumerable: true, configurable: true }

Object.defineProperty(user, 'age',{
    writable: false,
    enumerable: false
});

console.log(Object.getOwnPropertyDescriptor(user, 'age'));
//{ value: 24, writable: false, enumerable: false, configurable: true }

const obj = {
    name: "Alex",
    "location": "New Delhi",
    // [mySymbol]: "key"  // Right way to use symbol in object, else its treated as string
}

console.log(obj.name);
console.log(obj.location);
console.log(obj["location"]); // Standard way to access
// console.log(obj[mySymbol]);

//Way to get object in arrays for easier access
console.log(Object.keys(obj)); // [ 'name', 'location' ]
console.log(Object.values(obj)); // [ 'name', 'location' ]
console.log(Object.entries(obj)); // [ [ 'name', 'Alex' ], [ 'location', 'New Delhi' ] ]


obj.greeting = function(){
    console.log("Greeting Function!");
}

console.log(obj.greeting());

Object.freeze(obj); // oject will not be tampered 

// Add functions in objects

// Combine two obejcts

const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};
const obj3 = Object.assign({}, obj1, obj2);

console.log(obj3);

// const obj3 = {...obj1, ...obj2};



// Destructuring of Objects

const college = {
    collegeProfessor: "Dr Alex",
    collegeStudentCount: 1000
};
// Ways to access
console.log(college.collegeProfessor);
// We can de-structure the object too
const {collegeProfessor: prof} = college;

console.log(prof);


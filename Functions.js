// If unknown no. of arguments
function calculateShoppingCartPrice(...prices){ // rest operator
    return prices;
}

console.log(calculateShoppingCartPrice(200,400,700)); // [ 200, 400, 700 ]

// Passing objects in function

const user = {
    name: "Div",
    region: "India"
}

function handleObject(anyObject){
    console.log(`Name of the user is ${anyObject.name} and region is ${anyObject.region}`);
}

handleObject(user);

// Directly pass object in function

handleObject({
    name: "Alex",
    region: "America"
});

addOne(5); // Can be called here
function addOne(num){
    return num+1;
}

addTwo(2); //Cannot be called here, as its assigned in a constant (Concept of hoisting)
const addTwo = function(num){ // variables can hold anything, function json etc
    return num+2;
}


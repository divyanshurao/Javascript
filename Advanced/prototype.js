function multiply5(num){
    return num * 5;
}

console.log(multiply5(5));
console.log(multiply5.power); // undefined
console.log(multiply5.prototype); // {}

function createUser(username, score){
    this.username = username;
    this.score = score;
}

const Jay = new createUser("Jay", 25);
const Vijay = new createUser("Vijay", 30);
// as function is also a prototype and has few functions by default under prototype
// we can manually add a function in protoype
createUser.prototype.increment = function(){
    // score++; // but here this function will be confused whose score to process in Jay and Vijay
    this.score++;
}

Jay.increment();
console.log(Jay);


let myHeros = ["thor", "spiderman"];

let heroPower = {
    "thor": "hammer",
    "spiderman": "web",

    getSpiderPower: function(){
        console.log(`${this.spiderman} power initiated`)
    }
}

Object.prototype.divyanshu = function(){
    console.log("Div function is present in all obejcts");
}

heroPower.divyanshu();

// Inheritance in js

const user = {
    "username": "Anu"
}

const teacher = {
    "Designation": "contract"
}

const TeachingSupport = {
    "isPaid" : "true",
    __proto__: teacher,  // One way
}
TeachingSupport.__proto__= user; // another way

console.log(TeachingSupport.Designation);
console.log(TeachingSupport.username);
console.log(TeachingSupport.isPaid);

// Modern syntex

Object.setPrototypeOf(TeachingSupport, teacher);


// Inject a function in string

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

let nameOne = "Alisha";
nameOne.truelength();

"Divi".truelength();

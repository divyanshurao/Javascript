const user = {
    username: "Alex",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
         console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



console.log(user.username)
console.log(user.getUserDetails());
console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    return this
}

const userOne = new User("Alex", 12, true); 
const userTwo = new User("ChaiAurCode", 11, false); // new creates a fresh instance, without new it overrides
console.log(userOne.constructor);
console.log(userTwo);
function SetUserName(username){
    this.username = username;
    console.log("called");
}

function createUser(username, email, password){
    SetUserName.call(this, username)

    this.email = email;
    this.password = password;
}

const creator = new createUser("Chaitanya", "1@1.com", "12345");
console.log(creator);
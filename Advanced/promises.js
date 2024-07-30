const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Promise Executed");
        resolve(); // This will link this promise to the then below
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

// Way 2: Without holding in variable

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Second Promise executed");
        resolve();
    }, 3000);
}).then(()=>{
    console.log("Second promise consumed");
})


// Data consumption

new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Third Promise executed");
        resolve({"name":"Jack", "Age":"20"});
    }, 5000)
}).then((userInfo)=>{
    console.log("Third promise consumed");
    console.log(userInfo);
})

// With Catch and Finally

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let err = false;
        if(!err){
            console.log("Function four executed");
            resolve({"name":"Henry", "Age":"21"});
        }
        else{
            reject('ERROR: Something went wrong');
        }
    },8000)
});

promiseFour.then((userInfo)=>{
   return userInfo.name;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{console.log('The promise is either resolved or rejected')});

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({"username":"Mack", "Age":"25"});
        }
        else{
            reject('ERROR: Mack went wrong');
        }
    }, 10000)
})

async function consumePromiseFive(){
    try{
    const response = await promiseFive;
    console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive();

async function getMyInfo(){
    try {
        const response = await fetch('https://api.github.com/users/divyanshurao');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E:", error);
    }
}

// getMyInfo();


// fetch using then and catch
fetch('https://api.github.com/users/divyanshurao')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})
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
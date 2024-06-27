const clock = document.getElementById('clock');
// or const clock = document.quertSelector('#clock');

let date =  new Date();
console.log(date.toLocaleTimeString());
// but above approach just prints the time at point of load/refresh

// hence we need a method that can rerun the function continuously

setInterval(function(){
    let date =  new Date();
    console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

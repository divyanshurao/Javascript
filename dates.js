let myDate= new Date();
console.log(myDate);

let customDate = new Date(2023,0,23);
console.log(customDate.toDateString()); //Mon Jan 23 2023 (Month strats from 0)

console.log(typeof customDate); //object

let myTimeStamp = Date.now();
console.log(myTimeStamp);  // millisecond from inital date 1970

myTimeStamp.toLocaleString('default',{
    weekday: 'long'
})


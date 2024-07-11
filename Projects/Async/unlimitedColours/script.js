function randomColour(){
    let color = '#';
    const hex = '0123456789ABCDEF'
    for(i=0; i<6; i++){
        color += hex[(Math.floor(Math.random()*16))];
    }
    return color;
}
let setBackgroundEvent;

document.getElementById('start').addEventListener('click',()=>{
    if(!setBackgroundEvent){
       setBackgroundEvent = setInterval(()=>{
       document.body.style.backgroundColor = randomColour();
    }, 1000);
}
})

document.getElementById('stop').addEventListener('click', ()=>{
    clearInterval(setBackgroundEvent);
    setBackgroundEvent =  null;
})
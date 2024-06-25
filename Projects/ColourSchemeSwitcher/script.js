const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach((button)=>{
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);

        if(e.target.id){
            body.style.backgroundColor = e.target.id
        }
    })
})

document.querySelector('.resetButton').addEventListener('click',(e)=>{
    body.style.backgroundColor = 'white'
})
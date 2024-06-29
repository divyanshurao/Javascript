const randonNumber = parseInt((Math.random() * 100) + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessFeild');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParse');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter valid number')
    }
    else if(guess < 1){
        alert('Please enter valid number')
    }
    else if(guess > 100){
        alert('Please enter valid number')
    }
    else{
        prevGuess.push(guess);
        if(numGuess == 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randonNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(){
 if(guess === randonNumber){
    displayMessage(`You guessed is right`)
 }
 else if( guess < randonNumber){
   displayMessage(`Number is too low`); 
 }
 else{
    displayMessage(`Number is too high`);
 }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}


const computerChoise = document.getElementById('computerChoise');
const userChoise = document.getElementById('userChoise');
const finialResult = document.getElementById('finialResult');
const buttons = document.querySelectorAll('button');
let computerChoice;
let userChoice;
let result;

buttons.forEach((btn)=>{
    btn.addEventListener('click',(e) => {
        userChoice = e.currentTarget.id;
        computerChoice = getComputerResult();
        userChoise.innerText = userChoice;
        computerChoise.innerText = computerChoice;
        showResult();
    },false);
});

function getComputerResult(){
    let random = Math.round(Math.random() * 3) +1;
    switch (random) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;    
        default:
            return 'scissors';
            break;
    }
}

function showResult(){
    if(computerChoice === userChoice){
        result = 'it is the same';
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'you win!'
      }
      if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'you lost!'
      }
      if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'you win!'
      }
      if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'you lose!'
      }
      if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'you win!'
      }
      if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'you lose!'
      }

    finialResult.innerText = result;
}





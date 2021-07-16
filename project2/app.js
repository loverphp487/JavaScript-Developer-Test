const button = document.querySelectorAll('button');
const timer = document.querySelector('.timer');
const checkResult = document.getElementById('checkResult');
let checkTimer = 0;
let computerChoice;
let userChoice;
let result;


button.forEach((btn,idx)=>{
    var self = this;
    btn.addEventListener('click',(e)=>{
        button.forEach((b,id)=>{ b.classList.remove('user-choice');  })
        btn.classList.add('user-choice');
        userChoice = e.currentTarget.id;

       let stopTimer =  setInterval(() => {
            timer.innerHTML = checkTimer;
            button.forEach((b,id)=>{ b.setAttribute('disabled',true); b.style.cursor='not-allowed';  })
            setTimeout(() => {
                clearInterval(stopTimer);
            }, 3000);
            checkTimer++;
        }, 1000);

        setTimeout(() => {
            checkTheResult();
        }, 4000);


    })
})


function checkTheResult(){
    let random = Math.floor(Math.random() * 3);
    button.forEach((b,id)=>{ b.removeAttribute('disabled',false);  b.style.cursor='pointer'; })
    button[random].classList.add('computer-choice');
    computerChoice = document.querySelector('.computer-choice').getAttribute('id');
    showResult();
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

      checkResult.innerHTML = 'Result :'+ result + '<br> try again  <button id="start">Again !</button>';
}



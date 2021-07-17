let button = document.querySelectorAll('button');
let timer = document.querySelector('.timer');
let checkResult = document.getElementById('checkResult');
let checkTimer = parseInt(timer.innerHTML);
let yourscore = document.querySelector('.your-score').innerHTML;
let computerscore = document.querySelector('.computer-score').innerHTML;
let computerChoice;
let userChoice;
let result;


function newTry(){
    button.forEach((b,id)=>{ b.classList.remove('user-choice','computer-choice');  });
    checkResult.innerHTML = 'Timer <span class="timer">0</span>';
    timer = document.querySelector('.timer');
}


function main(){
    button.forEach((btn,idx)=>{
        btn.addEventListener('click',(e)=>{
            button.forEach((b,id)=>{ b.classList.remove('user-choice');  })
            btn.classList.add('user-choice');
            userChoice = e.currentTarget.id;
            console.log(checkTimer);
    
            if(checkTimer === 0){
                let stopTimer =  setInterval(() => {
                    checkTimer++;
                    timer.innerHTML = checkTimer;
                    button.forEach((b,id)=>{ b.setAttribute('disabled',true); b.style.cursor='not-allowed';  })
                    setTimeout(() => {
                        clearInterval(stopTimer);
                    }, 3000);
                    
                }, 1000);
        
                setTimeout(() => {
                    checkTheResult();
                    checkTimer = 0;
                }, 4000);
            }
    
    
        })
    })
    
}

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
        result = 'you win!';
        yourscore++; 
        computerscore =  (computerscore > 0 ? computerscore -1 : 0);
      }
      if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'you lost!';
        computerscore++; 
        yourscore =  (yourscore > 0 ? yourscore -1 : 0);
      }
      if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'you win!';
        yourscore++; 
        computerscore =  (computerscore > 0 ? computerscore -1 : 0);
      }
      if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'you lose!';
        computerscore++; 
        yourscore = (yourscore > 0 ? yourscore -1 : 0);
      }
      if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'you win!';
        yourscore++; 
        computerscore =  (computerscore > 0 ? computerscore -1 : 0);
      }
      if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'you lose!';
        computerscore++; 
        yourscore =  (yourscore > 0 ? yourscore - 1 : 0);
      }
      checkResult.innerHTML = 'Result :'+ result + '<br> try again  <button id="start" onclick="newTry()">Again !</button>';
      document.querySelector('.your-score').innerHTML = yourscore;
      document.querySelector('.computer-score').innerHTML = computerscore;
}



window.addEventListener('DOMContentLoaded',main);
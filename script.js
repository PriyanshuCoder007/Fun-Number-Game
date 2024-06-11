'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "🎉Correct Number!";
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector('.guess').value = 23;
console.log( document.querySelector('.guess').value);*/

let secretNumber = Math.floor( Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click' , 
function() {
    const guess = Number (document.querySelector('.guess')
    .value);
    console.log(guess ,typeof guess);

      // when there is no input
    if(!guess){
        // document.querySelector('.message').textContent = "⛔ No Number!";
        displayMessage("⛔ No Number!");
    }
   
    // when player win
    else if(guess === secretNumber){
    // document.querySelector('.message').textContent = "🎉 Correct Number!";
    displayMessage("🎉 Correct Number!");

    document.querySelector('body').style.backgroundColor = '#60b347';

    const numberEle =  document.querySelector('.number');

    const adjustWidth  = function(){
        const deviceWidth = window.innerWidth;

        if(deviceWidth <= 600){
            numberEle.style.width = "17%"
        }
        else if(deviceWidth > 600 && deviceWidth <= 1024){
            numberEle.style.width = "25%";
        }
        else{
            numberEle.style.width = "30rem"
        }

        adjustWidth();

        window.addEventListener('resize',adjustWidth);
    };

    document.querySelector('.number').textContent = secretNumber;


        if( score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }   
}

   // when guess is wrong 
   else if(guess !== secretNumber){
    if(score > 1){
        displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
        // document.querySelector('.message').
        // textContent = guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
        score--;
        document.querySelector(".score").textContent = score;
    }else{
        // document.querySelector('.message').textContent = "❌ You Lost the game!";
          displayMessage("❌ You Lost the game!");

        document.querySelector(".score").textContent = 0;
    }
   }
});


document.querySelector(".again").addEventListener('click', function(){
    
    secretNumber = Math.floor( Math.random() * 20) + 1;

    score = 20;

    document.querySelector('.guess').value = "";

        // document.querySelector('.message').textContent = "Start guessing....";
           displayMessage("Start guessing...."); 


        document.querySelector(".score").textContent = score;
    
        document.querySelector('body').style.backgroundColor = '#222';

        document.querySelector('.number').style.width = '15rem';

        document.querySelector('.number').textContent = '?';
  
});


  /*//when guess is too high
   else if(guess > secretNumber ){

        if(score > 1){
            document.querySelector('.message').textContent = "📈 Too High!";
            score--;
            document.querySelector(".score").textContent = score;
        }else{
            document.querySelector('.message').textContent = "❌ You Lost the game!";
            document.querySelector(".score").textContent = 0;
        }
   }
   
   //when guess is too low
   else if(guess < secretNumber){

    if(score > 1 ){
        document.querySelector('.message').textContent = "📉 Too Low!";
        score--;
        document.querySelector(".score").textContent = score;
    }else{
        document.querySelector('.message').textContent = "❌ You Lost the game!";
        document.querySelector(".score").textContent = 0;
    }
   }*/
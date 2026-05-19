
    
    let ComputerMove = '';
    const score = JSON.parse(localStorage.getItem('score')) || {Wins : 0, Losses : 0 , Ties : 0};
      
    updateScore();
  
     
    function pickComputerMove() {
      const randomNumber = Math.random();
      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        ComputerMove = 'Rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        ComputerMove = 'Paper';
      } else {
        ComputerMove = 'Scissors';
      }
    }

    function playGame(playerMove) {

      
      let result = '';
      if (playerMove === 'scissors') {
        
        if (ComputerMove === 'Rock') {
          result = 'You lost.';
          
        } else if (ComputerMove === 'Paper') {
          result = 'You win.';
      
        } else {
          result = 'It\'s a tie.';
          
      
        }
      }

      else if(playerMove === 'rock')
      {
        
        if (ComputerMove === 'Rock') {
          result = 'It\'s a tie.';
      
        } else if (ComputerMove === 'Paper') {
          result = 'You lost.';
         
        } else {
          result = 'You win.';
      
        }
      }
      else if(playerMove === 'paper')
      {
      
        if (ComputerMove === 'Rock') {
          result = 'You win.';
      
        } else if (ComputerMove === 'Paper') {
          result = 'It\'s a tie.';
      
        } else {
          result = 'You lost.';
          
        }
      }
      if (result === 'You win.'){
        score.Wins++;
      }else if(result=== 'You lost.'){
        score.Losses++;
      }else if (result=== 'It\'s a tie.') {
        score.Ties++
      }
      localStorage.setItem('score' , JSON.stringify(score));
      updateScore();
      document.querySelector('.js-result')
        .innerHTML = `${result}`;
      document.querySelector('.js-pick')
       .innerHTML = `You <img src="rpc/${playerMove}-emoji.png">  <img src="rpc/${ComputerMove}-emoji.png"> Computer`;
    }
    function updateScore(){
      document.querySelector('.js-score')
       .innerHTML = `Wins : ${score.Wins} , Losses : ${score.Losses} , Ties : ${score.Ties}`;
    }
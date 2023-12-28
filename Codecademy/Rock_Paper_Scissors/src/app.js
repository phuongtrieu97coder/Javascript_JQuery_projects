const getUserChoice = userInput =>{
    userInput=userInput.toLowerCase();
  
    if(userInput == 'rock' || userInput == 'paper' || userInput == 'scissors' || userInput == 'bomb'){
      return userInput;
    }else{
      console.log("You must choice 'rock', 'paper', or 'scissors'!!!");
    }
  }
  
  //console.log(getUserChoice('paper'));
  
  const getComputerChoice = () => {
    let num = Math.floor(Math.random() *3);
    switch(num){
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
      default:
        return '';
        break;
    }
  }
  //console.log(getComputerChoice());
  
  const determineWinner = (userChoice, computerChoice) => {
  
    if(userChoice == computerChoice){
      return "The game was a tie";
    }
  
    if(userChoice == 'bomb'){
      return "The user won!!!";
    }
  
    if(userChoice == 'rock'){
      if(computerChoice == 'paper'){
        return 'The computer won!!!';
      }else{
        return 'The user won!!!';
      }
    }
  
    if(userChoice == 'paper'){
  
      if(computerChoice == 'scissors'){
        return 'The computer won!!!';
      }
  
      if(computerChoice == 'rock'){
        return 'The user won!!!';
      }
  
  
    }
  
  
  
    if(userChoice == 'scissors'){
  
      if(computerChoice == 'rock'){
        return 'The computer won!!!';
      }
  
      if(computerChoice == 'paper'){
        return 'The user won!!!';
      }
  
    }
  
  
  
  }
  
  /*
  console.log(determineWinner('paper','scissors'));
  //The computer won!!!
  console.log(determineWinner('paper','rock'));
  //The user won!!!
  console.log(determineWinner('paper','paper'));
  //The game was a tie
  console.log(determineWinner('rock','paper'));
  //The computer won!!!
  console.log(determineWinner('rock','scissors'));
  //The user won!!!
  console.log(determineWinner('rock','rock'));
  //The game was a tie
  console.log(determineWinner('scissors','rock'));
  //The computer won!!!
  console.log(determineWinner('scissors','paper'));
  //The user won!!!
  console.log(determineWinner('scissors','scissors'));
  //The game was a tie
  */
  
  let playGame = () => {
    let userChoice = getUserChoice('rock');
  
    let computerChoice = getComputerChoice();
  
    console.log(userChoice);
    console.log(computerChoice);
  
    console.log(determineWinner(userChoice,computerChoice));
  }
  
  playGame();
  
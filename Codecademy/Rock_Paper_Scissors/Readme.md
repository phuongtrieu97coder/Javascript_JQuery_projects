![image](https://img.shields.io/badge/HTML5-black?style=for-the-badge&logo=html5) ![image](https://img.shields.io/badge/CSS3-black?style=for-the-badge&logo=css3) ![image](https://img.shields.io/badge/Bootstrap-white?style=for-the-badge&logo=bootstrap) ![image](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript) ![image](https://img.shields.io/badge/jQuery-black?style=for-the-badge&logo=jquery) ![image](https://img.shields.io/badge/JSON-black?style=for-the-badge&logo=json) ![image](https://img.shields.io/badge/SASS-white?style=for-the-badge&logo=sass)

![image](https://user-images.githubusercontent.com/82598726/181831477-61e5dc01-279c-4a06-b961-589c6d757d4e.png) ![image](https://user-images.githubusercontent.com/82598726/181831517-b7707a20-1524-41cd-ac9f-297c655f32ea.png)

<a type="button" title="Codecademy_Learn_JavaScript_Course_button" href="https://www.codecademy.com/courses/introduction-to-javascript/projects/rock-paper-scissors-javascript" target="_blank" data-CodecademyLearnJavascriptCourseButt="CodecademyLearnJavascriptCourseButt_data"><img src="https://user-images.githubusercontent.com/82598726/175697552-f960b057-9e97-4c3e-a3e2-f2b5f7876de9.png" alt="Codecademy_Learn_JavaScript_Course_button" width="400px" height="300px"></a>

<br><br>

# Rock Paper Scissors
<br>

# 1. Introduction:
![Alt text](image.png)
![Alt text](image-1.png)
![Alt text](image-2.png)
<br>
<br>

# 2. Output:
> bomb <br>
> paper <br>
> The user won!!! <br>
> The output will change every time you run the program to determine the winner. <br>
<br>
<br>

# 3. Prompts:

![Alt text](image-3.png)
![Alt text](image-4.png)
```js
const getUserChoice = userInput =>{
  userInput=userInput.toLowerCase();

}
```

![Alt text](image-5.png)
```js
const getUserChoice = userInput =>{
  userInput=userInput.toLowerCase();

  if(userInput == 'rock' || userInput == 'paper' || userInput == 'scissors'){
    return userInput;
  }else{
    console.log("You must choice 'rock', 'paper', or 'scissors'!!!");
  }
}
```

![Alt text](image-6.png)
```js
console.log(getUserChoice('paper'));
//Output: paper
```

![Alt text](image-7.png)
```js
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
```

![Alt text](image-8.png)
```js
console.log(getComputerChoice());
```

![Alt text](image-9.png)
```js
const determineWinner = (userChoice, computerChoice) => {
  if(userChoice == computerChoice){
    return "The game was a tie";
  }
}
```

![Alt text](image-10.png)
```js
const determineWinner = (userChoice, computerChoice) => {
  if(userChoice == computerChoice){
    return "The game was a tie";
  }

  if(userChoice == 'rock'){
    if(computerChoice == 'paper'){
      return 'The computer won!!!';
    }else{
      return 'The user won!!!';
    }
  }

}
```

![Alt text](image-11.png)
```js
if(userChoice == 'paper'){

    if(computerChoice == 'scissors'){
      return 'The computer won!!!';
    }

    if(computerChoice == 'rock'){
      return 'The user won!!!';
    }


}
```

![Alt text](image-12.png)
```js
 if(userChoice == 'scissors'){

    if(computerChoice == 'rock'){
      return 'The computer won!!!';
    }

    if(computerChoice == 'paper'){
      return 'The user won!!!';
    }

  }
```

![Alt text](image-13.png)
```js
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

```

![Alt text](image-14.png)
```js
let playGame = () => {
  let userChoice = getUserChoice('rock');

  let computerChoice = getComputerChoice();

  console.log(userChoice);
  console.log(computerChoice);
}
```

![Alt text](image-15.png)
```js
let playGame = () => {
  let userChoice = getUserChoice('rock');

  let computerChoice = getComputerChoice();

  console.log(userChoice);
  console.log(computerChoice);

  console.log(determineWinner(userChoice,computerChoice));
}

playGame();

```

![Alt text](image-16.png)
```js
//Add userInput == 'bomb' to getUserChoice()
const getUserChoice = userInput =>{
  userInput=userInput.toLowerCase();

  if(userInput == 'rock' || userInput == 'paper' || userInput == 'scissors' || userInput == 'bomb'){
    return userInput;
  }else{
    console.log("You must choice 'rock', 'paper', or 'scissors'!!!");
  }
}

//Add userChoice == 'bomb' to determineWinner()

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
```


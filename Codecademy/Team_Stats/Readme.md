![image](https://img.shields.io/badge/HTML5-black?style=for-the-badge&logo=html5) ![image](https://img.shields.io/badge/CSS3-black?style=for-the-badge&logo=css3) ![image](https://img.shields.io/badge/Bootstrap-white?style=for-the-badge&logo=bootstrap) ![image](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript) ![image](https://img.shields.io/badge/jQuery-black?style=for-the-badge&logo=jquery) ![image](https://img.shields.io/badge/JSON-black?style=for-the-badge&logo=json) ![image](https://img.shields.io/badge/SASS-white?style=for-the-badge&logo=sass)

![image](https://user-images.githubusercontent.com/82598726/181831477-61e5dc01-279c-4a06-b961-589c6d757d4e.png) ![image](https://user-images.githubusercontent.com/82598726/181831517-b7707a20-1524-41cd-ac9f-297c655f32ea.png)

<a type="button" title="Codecademy_Learn_JavaScript_Course_button" href="https://www.codecademy.com/courses/introduction-to-javascript/projects/team-stats" target="_blank" data-CodecademyLearnJavascriptCourseButt="CodecademyLearnJavascriptCourseButt_data"><img src="https://user-images.githubusercontent.com/82598726/175697552-f960b057-9e97-4c3e-a3e2-f2b5f7876de9.png" alt="Codecademy_Learn_JavaScript_Course_button" width="400px" height="300px"></a>

<br><br>

# Team Stats
<br>

# 1. Introduction:
![Alt text](image.png)
![Alt text](image-1.png)
<br>
<br>

# 2. Output:
> [ <br>
>   { firstName: 'John', lastName: 'Carter', age: 26 }, <br>
>   { firstName: 'Jack', lastName: 'Doe', age: 30 }, <br>
>   { firstName: 'Jane', lastName: 'Smith', age: 28 }, <br>
>   { firstName: 'Bugs', lastName: 'Bunny', age: 76 } <br>
> ] <br>
> [ <br>
>   { opponent: 'Hi-Tech', teamPoints: 86,  opponentPoints: 92 },<br>
>   { opponent: 'Unicorn', teamPoints: 65,  opponentPoints: 49 },<br>
>   { opponent: 'Sky Knights', teamPoints: 97,  opponentPoints: 66 },<br>
>   { opponent: 'Titan', teamPoints: 100, opponentPoints:  98 }<br>
> ] <br>
<br>
<br>

# 3. Prompts:

![Alt text](image-2.png)
```js
const team = {
  _players:[],
  _games:[]
};
```

![Alt text](image-3.png)
```js
const team = {
  _players:[
    {
      firstName:"John",
      lastName:"Carter",
      age:26,
    },
    {
      firstName:"Jack",
      lastName:"Doe",
      age:30,
    },
    {
      firstName:"Jane",
      lastName:"Smith",
      age:28,
    }
  ],
  _games:[
    {
      opponent:"Hi-Tech",
      teamPoints:86,
      opponentPoints:92,
    },
     {
      opponent:"Unicorn",
      teamPoints:65,
      opponentPoints:49,
    },
     {
      opponent:"Sky Knights",
      teamPoints:97,
      opponentPoints:66,
    }
  ],
};
```

![Alt text](image-4.png)
![Alt text](image-5.png)
```js
get players(){
    return this._players;
},
get games(){
    return this._games;
}
```

![Alt text](image-6.png)
```js
addPlayer(newFirstName, newLastName, newAge){
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    }
    this._players.push(player);
  }
```

![Alt text](image-7.png)
```js
team.addPlayer("Bugs","Bunny",76);
console.log(team._players);
/*
[
  { firstName: 'John', lastName: 'Carter', age: 26 },
  { firstName: 'Jack', lastName: 'Doe', age: 30 },
  { firstName: 'Jane', lastName: 'Smith', age: 28 },
  { firstName: 'Bugs', lastName: 'Bunny', age: 76 }
]
*/
```

![Alt text](image-8.png)
```js
addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
      opponent:newOpponent,
      teamPoints:newTeamPoints,
      opponentPoints:newOpponentPoints
    }
    this._games.push(game);
}
```

![Alt text](image-9.png)
```js
team.addGame("Titan",100,98);
console.log(team._games);
/*
[
  { opponent: 'Hi-Tech', teamPoints: 86, opponentPoints: 92 },
  { opponent: 'Unicorn', teamPoints: 65, opponentPoints: 49 },
  { opponent: 'Sky Knights', teamPoints: 97, opponentPoints: 66 },
  { opponent: 'Titan', teamPoints: 100, opponentPoints: 98 }
]
*/
```



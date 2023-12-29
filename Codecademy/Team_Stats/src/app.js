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
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge){
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      }
      this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        opponent:newOpponent,
        teamPoints:newTeamPoints,
        opponentPoints:newOpponentPoints
      }
      this._games.push(game);
    }
  };
  
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
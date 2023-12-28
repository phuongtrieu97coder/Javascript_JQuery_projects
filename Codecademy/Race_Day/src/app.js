let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 26;

if(runnerAge >=18 && registeredEarly == true){
  raceNumber+=1000;
}

if(runnerAge >18 && registeredEarly == true){
  console.log(`You will race at 9:30:AM at race number: ${raceNumber}`);
}else if(runnerAge >18 && registeredEarly == false){
  console.log(`You will race at 11:00:AM at race number: ${raceNumber}`);
}else{
  console.log("Please see the registration desk.");
}


if(runnerAge < 18){
  console.log(`You will race at 12:30:PM at race number: ${raceNumber}`);
}

if(runnerAge == 18){
  console.log(`Please see the registration desk.`);
}


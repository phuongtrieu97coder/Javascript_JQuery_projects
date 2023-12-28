let getSleepHours = day => {
    switch(day){
      case 'monday':
        return 7;
        break;
      case 'tuesday':
        return 8;
        break;
      case 'wednesday':
        return 6;
        break;
      case 'thursday':
        return 7;
        break;
      case 'friday':
        return 6;
        break;
      case 'saturday':
        return 8;
        break;
      case 'sunday':
        return 8;
        break;
      default:
        return 0;
        break;
    }
  }
  console.log(getSleepHours('monday'));//7
  
  let getActualSleepHours = () => {
    let totalSleepHours = getSleepHours('monday')+
    getSleepHours('tuesday')+
    getSleepHours('wednesday')+
    getSleepHours('thursday')+
    getSleepHours('friday')+
    getSleepHours('saturday')+
    getSleepHours('sunday');
  
    return totalSleepHours;
  }
  
  
  let getIdealSleepHours = () => {
    let idealHours = 7;
    return idealHours*7;
  }
  
  console.log(getActualSleepHours());//50
  console.log(getIdealSleepHours());//49
  
  
  let calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
  
    let idealSleepHours = getIdealSleepHours();
  
    if(actualSleepHours == idealSleepHours){
      return "The user got the perfect amount of sleep";
    }else if(actualSleepHours > idealSleepHours){
      return "The user got more sleep than needed.";
    }else if(actualSleepHours < idealSleepHours){
      return "The user should get some rest.";
    }else{
      return "";
    }
  }
  
  console.log(calculateSleepDebt());
![image](https://img.shields.io/badge/HTML5-black?style=for-the-badge&logo=html5) ![image](https://img.shields.io/badge/CSS3-black?style=for-the-badge&logo=css3) ![image](https://img.shields.io/badge/Bootstrap-white?style=for-the-badge&logo=bootstrap) ![image](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript) ![image](https://img.shields.io/badge/jQuery-black?style=for-the-badge&logo=jquery) ![image](https://img.shields.io/badge/JSON-black?style=for-the-badge&logo=json) ![image](https://img.shields.io/badge/SASS-white?style=for-the-badge&logo=sass)

![image](https://user-images.githubusercontent.com/82598726/181831477-61e5dc01-279c-4a06-b961-589c6d757d4e.png) ![image](https://user-images.githubusercontent.com/82598726/181831517-b7707a20-1524-41cd-ac9f-297c655f32ea.png)

<a type="button" title="Codecademy_Learn_JavaScript_Course_button" href="https://www.codecademy.com/courses/introduction-to-javascript/projects/sleep-debt-calculator" target="_blank" data-CodecademyLearnJavascriptCourseButt="CodecademyLearnJavascriptCourseButt_data"><img src="https://user-images.githubusercontent.com/82598726/175697552-f960b057-9e97-4c3e-a3e2-f2b5f7876de9.png" alt="Codecademy_Learn_JavaScript_Course_button" width="400px" height="300px"></a>

<br><br>

# Sleep Debt Calculator
<br>

# 1. Introduction:
![Alt text](image.png)

![Alt text](image-1.png)
<br>
<br>

# 2. Output:
> 7 <br>
> 50 <br>
> 49 <br>
> The user got more sleep than needed. <br>

<br>
<br>

# 3. Prompts:

![Alt text](image-2.png)
![Alt text](image-3.png)
```js
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
```

![Alt text](image-4.png)
```js
console.log(getSleepHours('monday'));//7
```

![Alt text](image-5.png)
```js
let getActualSleepHours = () => {
  
}
```

![Alt text](image-6.png)
```js
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
```

![Alt text](image-7.png)
```js
let getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours*7;
}
```

![Alt text](image-8.png)
```js
console.log(getActualSleepHours());
//50
console.log(getIdealSleepHours());
//49
```

![Alt text](image-9.png)
```js
let calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();

  let idealSleepHours = getIdealSleepHours();
}
```

![Alt text](image-10.png)
```js
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

```

![Alt text](image-11.png)
```js
console.log(calculateSleepDebt());
```

![Alt text](image-12.png)


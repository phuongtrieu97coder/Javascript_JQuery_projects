![image](https://img.shields.io/badge/HTML5-black?style=for-the-badge&logo=html5) ![image](https://img.shields.io/badge/CSS3-black?style=for-the-badge&logo=css3) ![image](https://img.shields.io/badge/Bootstrap-white?style=for-the-badge&logo=bootstrap) ![image](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript) ![image](https://img.shields.io/badge/jQuery-black?style=for-the-badge&logo=jquery) ![image](https://img.shields.io/badge/JSON-black?style=for-the-badge&logo=json) ![image](https://img.shields.io/badge/SASS-white?style=for-the-badge&logo=sass)

![image](https://user-images.githubusercontent.com/82598726/181831477-61e5dc01-279c-4a06-b961-589c6d757d4e.png) ![image](https://user-images.githubusercontent.com/82598726/181831517-b7707a20-1524-41cd-ac9f-297c655f32ea.png)

<a type="button" title="Codecademy_Learn_JavaScript_Course_button" href="https://www.codecademy.com/courses/introduction-to-javascript/projects/training-days" target="_blank" data-CodecademyLearnJavascriptCourseButt="CodecademyLearnJavascriptCourseButt_data"><img src="https://user-images.githubusercontent.com/82598726/175697552-f960b057-9e97-4c3e-a3e2-f2b5f7876de9.png" alt="Codecademy_Learn_JavaScript_Course_button" width="400px" height="300px"></a>

<br><br>

# Training Days
<br>

# 1. Introduction:
![Alt text](image.png)
![Alt text](image-1.png)
<br>
<br>

# 2. Output:
> Nala's event is: Triathlon <br>
> Nala's time to train is: undefined days <br>
> Warren's event is: Marathon <br>
> Warren's time to train is: undefined days <br>

<br>
<br>

# 3. Prompts:
![Alt text](image-2.png)

![Alt text](image-3.png)

![Alt text](image-4.png)
```js
const getTrainingDays = event => {
   let days ;
  if (event === 'Marathon') {
    
  } else if (event === 'Triathlon') {
   
  } else if (event === 'Pentathlon') {
   
  }

  return days;
};
```

![Alt text](image-5.png)

![Alt text](image-6.png)

```js
const logEvent = (name,event) => {
  
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name,days) => {
  
  console.log(`${name}'s time to train is: ${days} days`);
};

```

![Alt text](image-7.png)
```js
const name = 'Nala';
const logEvent = (name,event) => {
  
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name,days) => {
  
  console.log(`${name}'s time to train is: ${days} days`);
};

logEvent(name,event);
logTime(name,days);
```

![Alt text](image-8.png)

![Alt text](image-9.png)

![Alt text](image-10.png)

![Alt text](image-11.png)

```js
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};
```

![Alt text](image-12.png)
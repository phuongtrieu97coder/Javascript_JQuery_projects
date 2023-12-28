![image](https://img.shields.io/badge/HTML5-black?style=for-the-badge&logo=html5) ![image](https://img.shields.io/badge/CSS3-black?style=for-the-badge&logo=css3) ![image](https://img.shields.io/badge/Bootstrap-white?style=for-the-badge&logo=bootstrap) ![image](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript) ![image](https://img.shields.io/badge/jQuery-black?style=for-the-badge&logo=jquery) ![image](https://img.shields.io/badge/JSON-black?style=for-the-badge&logo=json) ![image](https://img.shields.io/badge/SASS-white?style=for-the-badge&logo=sass)

![image](https://user-images.githubusercontent.com/82598726/181831477-61e5dc01-279c-4a06-b961-589c6d757d4e.png) ![image](https://user-images.githubusercontent.com/82598726/181831517-b7707a20-1524-41cd-ac9f-297c655f32ea.png)

<a type="button" title="Codecademy_Learn_JavaScript_Course_button" href="https://www.codecademy.com/courses/introduction-to-javascript/projects/race-day" target="_blank" data-CodecademyLearnJavascriptCourseButt="CodecademyLearnJavascriptCourseButt_data"><img src="https://user-images.githubusercontent.com/82598726/175697552-f960b057-9e97-4c3e-a3e2-f2b5f7876de9.png" alt="Codecademy_Learn_JavaScript_Course_button" width="400px" height="300px"></a>

<br><br>

# Race Day
<br>

# 1. Introduction:
![Alt text](image.png)

![Alt text](image-1.png)

![Alt text](image-2.png)

![Alt text](image-3.png)

![Alt text](image-4.png)
<br>
<br>

# 2. Output:
> You will race at 9:30:AM at race number: 1154
<br>
<br>

# 3. Prompts:

![Alt text](image-5.png)
```js
let raceNumber = Math.floor(Math.random() * 1000);
```

![Alt text](image-6.png)
```js
let registeredEarly = true;
```

![Alt text](image-7.png)
```js
let runnerAge = 26;
```

![Alt text](image-8.png)
```js
if(runnerAge >=18 && registeredEarly == true){
  raceNumber+=1000;
}
```

![Alt text](image-9.png)
```js
if(runnerAge >18 && registeredEarly == true){
  console.log(`You will race at 9:30:AM at race number: ${raceNumber}`);
}
```

![Alt text](image-10.png)
```js
if(runnerAge >18 && registeredEarly == true){
  console.log(`You will race at 9:30:AM at race number: ${raceNumber}`);
}else if(runnerAge >18 && registeredEarly == false){
  console.log(`You will race at 11:00:AM at race number: ${raceNumber}`);
}

```

![Alt text](image-11.png)
```js
if(runnerAge < 18){
  console.log(`You will race at 12:30:PM at race number: ${raceNumber}`);
}
```

![Alt text](image-12.png)


![Alt text](image-13.png)
![Alt text](image-14.png)
```js
if(runnerAge >18 && registeredEarly == true){
  console.log(`You will race at 9:30:AM at race number: ${raceNumber}`);
}else if(runnerAge >18 && registeredEarly == false){
  console.log(`You will race at 11:00:AM at race number: ${raceNumber}`);
}else{
  console.log("Please see the registration desk.");
}




if(runnerAge == 18){
  console.log(`Please see the registration desk.`);
}



```



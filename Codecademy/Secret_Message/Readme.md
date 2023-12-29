![image](https://img.shields.io/badge/HTML5-black?style=for-the-badge&logo=html5) ![image](https://img.shields.io/badge/CSS3-black?style=for-the-badge&logo=css3) ![image](https://img.shields.io/badge/Bootstrap-white?style=for-the-badge&logo=bootstrap) ![image](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript) ![image](https://img.shields.io/badge/jQuery-black?style=for-the-badge&logo=jquery) ![image](https://img.shields.io/badge/JSON-black?style=for-the-badge&logo=json) ![image](https://img.shields.io/badge/SASS-white?style=for-the-badge&logo=sass)

![image](https://user-images.githubusercontent.com/82598726/181831477-61e5dc01-279c-4a06-b961-589c6d757d4e.png) ![image](https://user-images.githubusercontent.com/82598726/181831517-b7707a20-1524-41cd-ac9f-297c655f32ea.png)

<a type="button" title="Codecademy_Learn_JavaScript_Course_button" href="https://www.codecademy.com/courses/introduction-to-javascript/projects/secret-message" target="_blank" data-CodecademyLearnJavascriptCourseButt="CodecademyLearnJavascriptCourseButt_data"><img src="https://user-images.githubusercontent.com/82598726/175697552-f960b057-9e97-4c3e-a3e2-f2b5f7876de9.png" alt="Codecademy_Learn_JavaScript_Course_button" width="400px" height="300px"></a>

<br><br>

# Secret Message
<br>

# 1. Introduction:
![Alt text](image.png)
![Alt text](image-1.png)
<br>
<br>

# 2. Output:
> 24 <br>
> 23 <br>
> 6 <br>
> 10 <br>
> [ 'Programming','is','not','about','what','you','know,','know,', 'know,','know,','time,','it','is','about','what','you','can','figure','out.','-2015,','Chris','Pine,','Learn','to','Program' ] <br>
> Programming is not about what you know, know, know, know, know, it is about what you can figure out. -2015, Chris Pine, Learn to Program

<br>
<br>

# 3. Prompts:

![Alt text](image-2.png)
![Alt text](image-3.png)
```js
console.log(secretMessage.length);
secretMessage.pop();
console.log(secretMessage.length);
```

![Alt text](image-4.png)
```js
secretMessage.push('to','Program');
secretMessage[7] = 'right';
```

![Alt text](image-5.png)
```js
secretMessage.shift();
secretMessage.unshift('Programming');
```

![Alt text](image-6.png)
```js
let indexOfGet = secretMessage.indexOf('get');
let indexOfTime = secretMessage.indexOf('time,');
console.log(indexOfGet);//6
console.log(indexOfTime);//10
secretMessage.fill('know,',indexOfGet,indexOfTime+1);
console.log(secretMessage);
/*[ 'Programming','is','not','about','what','you','know,','know,', 'know,','know,','time,','it','is','about','what','you','can','figure','out.','-2015,','Chris','Pine,','Learn','to','Program' ]*/
```


![Alt text](image-7.png)
```js
console.log(secretMessage.join(" "));
/*
Programming is not about what you know, know, know, know, know, it is about what you can figure out. -2015, Chris Pine, Learn to Program
*/
```




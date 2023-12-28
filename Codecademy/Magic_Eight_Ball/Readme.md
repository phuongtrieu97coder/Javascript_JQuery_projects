![image](https://img.shields.io/badge/HTML5-black?style=for-the-badge&logo=html5) ![image](https://img.shields.io/badge/CSS3-black?style=for-the-badge&logo=css3) ![image](https://img.shields.io/badge/Bootstrap-white?style=for-the-badge&logo=bootstrap) ![image](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript) ![image](https://img.shields.io/badge/jQuery-black?style=for-the-badge&logo=jquery) ![image](https://img.shields.io/badge/JSON-black?style=for-the-badge&logo=json) ![image](https://img.shields.io/badge/SASS-white?style=for-the-badge&logo=sass)

![image](https://user-images.githubusercontent.com/82598726/181831477-61e5dc01-279c-4a06-b961-589c6d757d4e.png) ![image](https://user-images.githubusercontent.com/82598726/181831517-b7707a20-1524-41cd-ac9f-297c655f32ea.png)

<a type="button" title="Codecademy_Learn_JavaScript_Course_button" href="https://www.codecademy.com/courses/introduction-to-javascript/projects/magic-eight-ball-1" target="_blank" data-CodecademyLearnJavascriptCourseButt="CodecademyLearnJavascriptCourseButt_data"><img src="https://user-images.githubusercontent.com/82598726/175697552-f960b057-9e97-4c3e-a3e2-f2b5f7876de9.png" alt="Codecademy_Learn_JavaScript_Course_button" width="400px" height="300px"></a>

<br><br>

# Magic Eight Ball
<br>

# 1. Introduction:
![Alt text](image.png)

![Alt text](image-1.png)
<br>
<br>

# 2. Output:
> Hello. Jane! <br>
> Jane's question: Am I the winner of today's game?<br>
> EightBall's answer: Signs point to yes
<br>
<br>

# 3. Prompts:

![Alt text](image-2.png)

```js
let username = "";
```

![Alt text](image-3.png)
```js
username == "Jane" ? console.log(`Hello. ${username}!`): console.log("Hello!");
```


![Alt text](image-4.png)
```js
let userQuestion = "Am I the winner of today's game?";
```


![Alt text](image-5.png)
```js
console.log(`${username}'s question: ${userQuestion}`);
```


![Alt text](image-6.png)
```js
let randomNumber = Math.floor(Math.random() *8);
```


![Alt text](image-7.png)
```js
let eightBall = "";
```


![Alt text](image-8.png)
![Alt text](image-9.png)
![Alt text](image-10.png)
```js
switch(randomNumber){
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
  default:
    eightBall = "";
    break;
}
```


![Alt text](image-11.png)
```js
console.log(`EightBall's answer: ${eightBall}`);
```


![Alt text](image-12.png)
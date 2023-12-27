![image](https://img.shields.io/badge/HTML5-black?style=for-the-badge&logo=html5) ![image](https://img.shields.io/badge/CSS3-black?style=for-the-badge&logo=css3) ![image](https://img.shields.io/badge/Bootstrap-white?style=for-the-badge&logo=bootstrap) ![image](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript) ![image](https://img.shields.io/badge/jQuery-black?style=for-the-badge&logo=jquery) ![image](https://img.shields.io/badge/JSON-black?style=for-the-badge&logo=json) ![image](https://img.shields.io/badge/SASS-white?style=for-the-badge&logo=sass)

![image](https://user-images.githubusercontent.com/82598726/181831477-61e5dc01-279c-4a06-b961-589c6d757d4e.png) ![image](https://user-images.githubusercontent.com/82598726/181831517-b7707a20-1524-41cd-ac9f-297c655f32ea.png)

<a type="button" title="Codecademy_Learn_JavaScript_Course_button" href="https://www.codecademy.com/courses/introduction-to-javascript/projects/dog-years-javascript" target="_blank" data-CodecademyLearnJavascriptCourseButt="CodecademyLearnJavascriptCourseButt_data"><img src="https://user-images.githubusercontent.com/82598726/175697552-f960b057-9e97-4c3e-a3e2-f2b5f7876de9.png" alt="Codecademy_Learn_JavaScript_Course_button" width="400px" height="300px"></a>

<br><br>

# Dog Years
<br>

# 1. Introduction:
![Alt text](image.png)

![Alt text](image-1.png)
![Alt text](image-2.png)
<br>
<br>

# 2. Output:
21 <br>
96 <br>
My name is phuong. I am 26 years old in human years which is 117 years old in dog years
<br>
<br>

# 3. Prompts:

![Alt text](image-3.png)

```js
//a variable named 'myAge' that is equal my age as a number
const myAge = 26;
```

![Alt text](image-4.png)
```js
//a variable named 'earlyYears' with value 2 that can be used for further changing in value
let earlyYears = 2;
```

![Alt text](image-5.png)

```js
earlyYears *= 10.5;
```

![Alt text](image-6.png)

```js
//a variable named 'laterYears' that is equal myAge - 2 that can be used for further changing in value
let laterYears = myAge - 2 ;
```

![Alt text](image-7.png)

```js
/*
Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. Use the multiplication assignment operator to multiply and assign in one step.
*/ 
laterYears *= 4 ;
```

![Alt text](image-8.png)
```js
console.log(earlyYears);
console.log(laterYears);
```

![Alt text](image-9.png)

![Alt text](image-10.png)
```js
//Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
let myAgeInDogYears = earlyYears + laterYears;
```

![Alt text](image-11.png)

```js
//a variable named 'myName' that stores my name, then use .toLowerCase() method to return my name with all lowercase letters
var myName = 'Phuong'.toLowerCase();
```

![Alt text](image-12.png)

![Alt text](image-13.png)

```js
//a console.log statement that displays your name and age in dog years. Use string interpolation to display the value
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);
```

![Alt text](image-14.png)


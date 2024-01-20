![image](https://img.shields.io/badge/HTML5-black?style=for-the-badge&logo=html5) ![image](https://img.shields.io/badge/CSS3-black?style=for-the-badge&logo=css3) ![image](https://img.shields.io/badge/Bootstrap-white?style=for-the-badge&logo=bootstrap) ![image](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript) ![image](https://img.shields.io/badge/jQuery-black?style=for-the-badge&logo=jquery) ![image](https://img.shields.io/badge/JSON-black?style=for-the-badge&logo=json) ![image](https://img.shields.io/badge/SASS-white?style=for-the-badge&logo=sass)

![image](https://user-images.githubusercontent.com/82598726/181831477-61e5dc01-279c-4a06-b961-589c6d757d4e.png) ![image](https://user-images.githubusercontent.com/82598726/181831517-b7707a20-1524-41cd-ac9f-297c655f32ea.png)

<a type="button" title="Codecademy_Learn_JavaScript_Course_button" href="https://www.codecademy.com/courses/learn-intermediate-javascript/projects/message-mixer-node" target="_blank" data-CodecademyLearnJavascriptCourseButt="CodecademyLearnJavascriptCourseButt_data"><img src="https://user-images.githubusercontent.com/82598726/175697552-f960b057-9e97-4c3e-a3e2-f2b5f7876de9.png" alt="Codecademy_Learn_JavaScript_Course_button" width="400px" height="300px"></a>

<br><br>

# Message Mixer
<br>

# 1. Introduction:
![Alt text](image.png)
![Alt text](image-1.png)
![Alt text](image-2.png)
![Alt text](image-3.png)


<br>
<br>

# 2. Output:
![Alt text](image-19.png)
<br>
<br>

# 3. Prompts:
![Alt text](image-4.png)
![Alt text](image-5.png)
![Alt text](image-6.png)
```js
// Declare and export the functions here.

// Encryption Functions
/////////////////////////////////////////////

const caesarCipher = (str, amount = 0) => {
  if (amount < 0) {
    return caesarCipher(str, amount + 26);
  }
  let output = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }
    output += char;
  }
  return output;
};

const symbolCipher = (str) => {
  const symbols = {
    'i': '!',
    '!': 'i',
    'l': '1',
    '1': 'l',
    's': '$',
    '$': 's',
    'o': '0',
    '0': 'o',
    'a': '@',
    '@': 'a',
    'e': '3',
    '3': 'e',
    'b': '6',
    '6': 'b'
  }

  let output = '';
  for (let i = 0; i < str.length; i++) {
    let char = str.toLowerCase()[i];

    if (symbols[char]) {
      output += symbols[char]
    } else {
      output += char;
    }
  }
  return output;
}

const reverseCipher = (sentence) => {
  let words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split('').reverse().join('');
  }
   return words.join(' ');
};
module.exports={
caesarCipher , symbolCipher, reverseCipher
}
```
![Alt text](image-7.png)
![Alt text](image-8.png)
```js
// Import the functions from encryptors.js here.
const encryptors = require("./encryptors.js");
```
![Alt text](image-9.png)
```js
const {caesarCipher,symbolCipher,reverseCipher} = encryptors;

```
![Alt text](image-10.png)
![Alt text](image-11.png)
![Alt text](image-12.png)
```js
const {caesarCipher,symbolCipher,reverseCipher} = require("./encryptors.js");
```
![Alt text](image-13.png)
![Alt text](image-14.png)
```js
const encodeMessage = (str) => {
  // Use the encryptor functions here.
  let caesar = caesarCipher(str,5);
  let symbol = symbolCipher(caesar);
  return reverseCipher(symbol);
}
```
![Alt text](image-15.png)
![Alt text](image-16.png)
![Alt text](image-17.png)
```js
const decodeMessage = (str) => {
  // Use the encryptor functions here.
   let reverse = reverseCipher(str);
  let symbol = symbolCipher(reverse);
  return caesarCipher(symbol,-5);
}
```
![Alt text](image-18.png)
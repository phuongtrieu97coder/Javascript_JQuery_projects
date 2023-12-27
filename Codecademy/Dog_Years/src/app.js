//a variable named 'myAge' that is equal my age as a number
const myAge = 26;

//a variable named 'earlyYears' with value 2 that can be used for further changing in value
let earlyYears = 2;
earlyYears *= 10.5;

//a variable named 'laterYears' that is equal myAge - 2 that can be used for further changing in value
let laterYears = myAge - 2 ;
/*
Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. Use the multiplication assignment operator to multiply and assign in one step.
*/ 
laterYears *= 4 ;
console.log(earlyYears);
console.log(laterYears);

//Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
let myAgeInDogYears = earlyYears + laterYears;

//a variable named 'myName' that stores my name, then use .toLowerCase() method to return my name with all lowercase letters
var myName = 'Phuong'.toLowerCase();

//a console.log statement that displays your name and age in dog years. Use string interpolation to display the value
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);
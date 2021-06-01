var str1  = "this Is a laptop";
let str2 = "a laptop of HP";
const str3 = "introduce to our laptop";

console.log(str1.concat(str2,str3));
console.log(str1.length);
console.log(str2.constructor);
console.log(str1.charAt(5));
console.log(str3.charAt(str3.length-1));
console.log(str2.charAt(str2.length-3));
console.log(str1.charCodeAt(6));
console.log(str3.charCodeAt(str3.length-2));
console.log(String.fromCharCode(65,83,71,96,58));
console.log(str2.includes("HP"));
console.log(str2.includes("of",3));
console.log(str3.indexOf("our"));
console.log(str3.indexOf("uce",5));
//find the index of the last occurence of a specified value of a string
console.log(str2.lastIndexOf("o"));
//check if a string endsWith a specified value
console.log(str3.endsWith("laptop"));
//check if a string endsWith a specified value, assuming this string has a specified number of character
console.log(str1.endsWith("is",7));
//check if a string startsWith a specified value
console.log(str2.startsWith("a"));
//check if a string startsWith a specified value, begin at a specified position
console.log(str3.startsWith("to",10));
//search a string for a match against a regular expression, return the matches as an array object
console.log(str1.match(/i/g));
console.log(str1.match(/i/gi));
//g is global search, i is case-insensitive
//make a string that has a specified number of copies of a declared string
console.log(str2.repeat(4));
//replace a value of a string with a new value using replace method
console.log(str3.replace("o","O"));
//replace all specified value of a string with a new value using regular expression inside a replace method
console.log(str3.replace(/o/g,"O"));
console.log(str3.replace(/o/gi,"*"));
//replace all specified value of a string with a new value using regular expression inside a replace method
//remember to use function to return the replacement text
console.log(str1.replace(/this|a|laptop/gi,function(item1){return item1.toUpperCase()}));
//search for a specified value of a string and return the position value of it
console.log(str3.search("to"));
console.log(str3.search(/to|our/gi));
//slice/extract parts of a string and return the extracted parts
//using starting position => return parts from starting position to the rest of the string
console.log(str2.slice(5));
//slice/extract parts of a string and return the extracted parts
//using starting+ending position => return parts from starting position to the ending position of the string
console.log(str3.slice(4,6));
//split/separate a specified string  and return the entire string as and array
// that has only one element
console.log(str1.split());
//split/seperate a specified string and return every characters of this string
// as elements of an array
console.log(str1.split(""));
//split/seperate a specified string and return an array of substring
console.log(str3.split(" "));
//split/seperate a specified string character and return an array separates every element 
// at these characters
console.log(str3.split("o"));
//split/seperate a specified string character and return an array separates every element 
// at these characters using regular expression
console.log(str1.split(/i/gi));
//split/seperate a specified string character and return an array separates every element
// at these characters using regular expression and a specified number of element
// provided in the split method
console.log(str1.split(/i|o/gi,4));
//using substr to separate parts of a string, this time uses just a starting position
// to extract parts from starting position with the rest of this string
console.log(str3.substr(4));
//using substr to separate parts of a string, this time uses just a starting position 
// + the number of character to extract parts from starting position with the number of character to extract
console.log(str2.substr(5,2));
//using substr to separate parts of a string, this time uses just a starting position(negative value) 
// + the number of character to extract parts from starting position with the number of character to extract
// from the end of the string
console.log(str1.substr(-2,1));
//using substr to extract the end character of a string 
console.log(str1.substr(-1));
console.log(str1.substr(str1.length-1));
//using substring to extract parts of a string
// using starting position to extract parts from starting position with the rest of this string
console.log(str2.substring(5));
//using substring to extract parts of a string
//using starting position+ending position to extract parts from starting to ending position of this string
console.log(str3.substring(4,6));
//using substring to extract parts of a string
//this time extract the end character of this string
console.log(str3.substring(str3.length-1,str3.length));
//convert a string to lowercase letters
console.log(str1.toLowerCase());
//convert a string to uppercase letters
console.log(str2.toUpperCase());
// get the valueOf  a string
console.log(str3.valueOf());
//get the value of a string using toString
console.log(str2.toString());


var str4 = "hello there";
//convert a string into lowercase or uppercase letters according to the host's current locale
//locale(a place where something happened) locale base on the language settings of the browser
console.log(str4.toLocaleLowerCase());
console.log(str4.toLocaleUpperCase());
//output 
//hello there
//HELLO THERE

var str5 = "    hello there     ";
//remove whitespace from both side of a string- not between every word
console.log(str5.trim());
//output  hello there


function company(name1,year1){
    this.name1 = name1;
    this.year1 = year1;
;}
company.prototype.product = "soap";
let company_obj = new company("Dove",1980);
console.log(company_obj.name1);
console.log(company_obj.product);

var str6 = "ab";
var str7 = "cd";
var str8  =  "ab";
//compare two string in locale way to check if a string comes before/after or equal to another string
//locale(a place where something happened) is base on the language settings of a web browser
// -1 : come before
// 1: come after
// 0 : equal
console.log(str6.localeCompare(str7));
console.log(str7.localeCompare(str6));
console.log(str6.localeCompare(str8));



/*
output

this Is a laptopa laptop of HPintroduce to our laptop
16
[Function: String]
I
p
 
115
111
ASG`:
true
true
13
6
9
true
false
true
true
[ 'i' ]
[ 'i', 'I' ]
a laptop of HPa laptop of HPa laptop of HPa laptop of HP
intrOduce to our laptop
intrOduce tO Our laptOp
intr*duce t* *ur lapt*p
THIS Is A LAPTOP
10
10
top of HP
od
[ 'this Is a laptop' ]
[
  't', 'h', 'i', 's',
  ' ', 'I', 's', ' ',
  'a', ' ', 'l', 'a',
  'p', 't', 'o', 'p'
]
[ 'introduce', 'to', 'our', 'laptop' ]
[ 'intr', 'duce t', ' ', 'ur lapt', 'p' ]
[ 'th', 's ', 's a laptop' ]
[ 'th', 's ', 's a lapt', 'p' ]
oduce to our laptop
to
o
p
p
top of HP
od
p
this is a laptop
A LAPTOP OF HP
introduce to our laptop
a laptop of HP
hello there
HELLO THERE
hello there
Dove
soap
-1
1
0

[Done] exited with code=0 in 0.168 seconds




*/


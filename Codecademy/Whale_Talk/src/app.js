let input = "Hi, Human";
//turpentine and turtles 
//Hi, Human
const vowels = ["u","e","o","a","i"];
let resultArray = [];

for(let i=0; i<input.length; i++){

  if(input[i] == 'e'){
    resultArray.push(input[i]);
  }
  if(input[i] == 'u'){
    resultArray.push(input[i]);
  }

  for(let j=0; j<vowels.length; j++){
    if(input[i] == vowels[j]){
      console.log(vowels[j]);
      resultArray.push(vowels[j]);
    }
    
  }
}
console.log(resultArray);
/*
i
u
a
[ 'i', 'u', 'u', 'a' ]
*/

let resultString = resultArray.join("").toUpperCase();
console.log(resultString);//IUUA
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length);
secretMessage.pop();
console.log(secretMessage.length);

secretMessage.push('to','Program');
secretMessage[7] = 'right';

secretMessage.shift();
secretMessage.unshift('Programming');

let indexOfGet = secretMessage.indexOf('get');
let indexOfTime = secretMessage.indexOf('time,');
console.log(indexOfGet);//6
console.log(indexOfTime);//10
secretMessage.fill('know,',indexOfGet,indexOfTime+1);
console.log(secretMessage);
/*[ 'Programming','is','not','about','what','you','know,','know,', 'know,','know,','know,','it','is','about','what','you','can','figure','out.','-2015,','Chris','Pine,','Learn','to','Program' ]*/

console.log(secretMessage.join(" "));
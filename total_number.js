let i = 25;
console.log(typeof i);

let i2 = 35-"tyt";
console.log(i2);
console.log(isNaN(i2));


let i3 = 34;
console.log(i3.toString());
console.log((34).toString());
console.log((34+7).toString());


let i4 = 35/"5";
console.log(i4);


let i5 = 39/0;
console.log(i5);


console.log(typeof Infinity);


let i6 = 2;
while(i6 != Infinity){
    i6*=i6;
    console.log(i6);
};



let i7 = 9.656;
console.log(i7.toExponential());
console.log(i7.toExponential(2));
console.log(i7.toExponential(4));
console.log(i7.toExponential(6));



let i8 = 9.656;
console.log(i8.toFixed());
console.log(i8.toFixed(2));
console.log(i8.toFixed(4));
console.log(i8.toFixed(6));


let i9 = 9.656;
console.log(i9.toPrecision());
console.log(i9.toPrecision(2));
console.log(i9.toPrecision(4));
console.log(i9.toPrecision(6));


let i10 = 46;
console.log(i10.valueOf());
//output 46
console.log((45).valueOf());
//output 45
console.log((35*57).valueOf());
//output 1995






//Using Number() method to convert variables into a number 

 

 

console.log(Number(true)); 

//output  1 
console.log(Number(false)); 

//output  0

console.log(Number("ere")); 

//output   NaN 

console.log(Number("354")); 

//output  354 

 

 

var num1 = "46565.767"; 

console.log(Number(num1).toExponential(2)); 

//output 4.66e+4 





//using parseInt()  to parse a string , return a whole first number as an integer

console.log(parseInt("16"));
//output   16
console.log(parseInt("12.36"));
//output  12
console.log(parseInt("46 58 69"));
//output   46
console.log(parseInt("465 Days"));
//output   465


var code = "454 767 78";
console.log(parseInt(code).toPrecision(6));
//output  454.000








//using parseInt()  to parse a string , return a whole first number as  an integer or floating point number  

 
 

console.log(parseFloat("16")); 

//output   16 

console.log(parseFloat("12.36")); 

//output  12.36 

console.log(parseFloat("46 58 69")); 

//output   46 

console.log(parseFloat("465 Days")); 

//output   465 

 
 
 

var code = "454 767 78"; 

console.log(parseFloat(code).toPrecision(6)); 

//output  454.000 

 






console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(25/0);
console.log(-69/0);
console.log(Number.NaN);
const x = 36;
console.log(x.constructor);
console.log((45).constructor);



console.log(Number.isFinite(45));
console.log(Number.isFinite("4534"));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(45676/6));


console.log(isFinite("5453"));
console.log(isFinite(465));
console.log(isFinite(465464/6));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));

 





console.log(Number.isInteger(25));
//output   true
console.log(Number.isInteger("454"));
//output    false
console.log(Number.isInteger(Infinity));
//output    false
console.log(Number.isInteger(545.67));
//output    false





//Number.isSafeInteger()
console.log(Number.isSafeInteger(25));
//output   true
console.log(Number.isSafeInteger("454"));
//output    false
console.log(Number.isSafeInteger(Infinity));
//output    false
console.log(Number.isSafeInteger(545.67));
//output    false





Number.prototype.method1 = function(){
    return this.valueOf()*100;
}
const n = 50;
console.log(n.method1());
//output  5000






//using toLocaleString() using  US English language format 

console.log((156135132).toLocaleString("en-US")); 

//output   156,135,132 

 
 
 

//using toLocaleString() using  Arabic (Saudi Arabia) language format 

console.log((156135132).toLocaleString("ar-SA")); 

//output   ١٥٦٬١٣٥٬١٣٢ 

 
 
 

//using toLocaleString() using  Modern Greek language format 

console.log((156135132).toLocaleString("el-GR")); 

//output 156.135.132 

 
 
 

//using toLocaleString() using Bangla (Bangladesh) language format 

console.log((156135132).toLocaleString("bn-BD")); 

//output ১৫,৬১,৩৫,১৩২ 

 

 

 

 

 

 

//using   toLocaleString()  with specified  local language format  and specified object  

 
 

var currency_obj = { 

    currency:"EUR", 

    currencyDisplay: "code", 

    style:"currency", 

    maximumFractionDigits: 5 

} 

 
 
 

console.log((24345456556).toLocaleString("en-US",currency_obj)); 

//output EUR 24,345,456,556.00 

 
 
 
 
 

var currency_obj2 = { 

    currency:"USD", 

    currencyDisplay: "symbol", 

    style:"currency", 

    maximumFractionDigits: 5 

} 

 
 
 

console.log((24345456556).toLocaleString("en-US",currency_obj2)); 

//output $24,345,456,556.00 

 

 

 
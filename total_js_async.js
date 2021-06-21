function output (some){ 
    console.log(some); 

} 

function sum(num1,num2,mycallback){ 
    var total = num1+num2; 
    mycallback(total); 

} 
sum(5,6,output); 

//output  11; 

 


function myDisplayer(some) { 
    document.getElementById("demo").innerHTML = some; 
  } 

  function myCalculator(num1, num2, myCallback) { 
    let sum = num1 + num2; 
    myCallback(sum); 
  } 
  myCalculator(5, 5, myDisplayer); 

  //output  10 

 

 

 

  setTimeout(output_func,4000); 
  function output_func(){ 
      document.getElementById("block1").innerHTML = "Hello World"; 
  } 

  //output  Hello World will appear in html file after 4 second 

/* 

  output_func is used as a callback  

  and is passed to setTimeout() as an argument. 



  4000 is the number of milliseconds before time-out, 

   so output_func() will be called after 4 seconds. 

   

  */ 



setTimeout(function (){output_func("hello")},4000); 
  function output_func(val){ 
      document.getElementById("block1").innerHTML = val; 
  } 

  //output  hello will appear in html file after 4 second 

  /* 

  function (){output_func("hello")} is used as a callback and is passed to setTimeout() as an argument. 

  It is a complete function 

  4000 is the number of milliseconds before time-out, 

   so output_func() will be called after 3 seconds. 

   

  */ 









//Use setInterval 
   setInterval(myFunction, 1000); 

   //interval: period of time between event 

  function myFunction() { 

    let d = new Date(); 

    document.getElementById("demo").innerHTML= 

    d.getHours() + ":" + 

    d.getMinutes() + ":" + 

    d.getSeconds(); 

  } 

  //output is : 1:41:12  and it's time will automatically run like a normal clock 









setInterval(func4,1000); 
   function func4(){ 
     var time = new Date(); 
     var hour= time.getHours(); 
     var minute = time.getMinutes(); 
     var second = time.getSeconds(); 
     if(hour>12){ 
       document.getElementById("block4").innerHTML = hour+":"+minute+":"+second+":"+"PM"; 
     }else { 
      document.getElementById("block4").innerHTML = hour+":"+minute+":"+second+":"+"AM"; 
     } 

   } 



//output 22:20:23:PM 







 

// loads a HTML file (test1.html), and displays the HTML file in a web page, after the file is fully loaded 

function display(some1){ 
    document.getElementById("block1").innerHTML = some1; 
} 




function getdata(mycallback1){ 
    var req = new XMLHttpRequest(); 
    req.open("GET","test1.html",true); 
   req.onload = function(){ 
    if(this.status == 200){ 
         mycallback1(this.responseText); 
    } else { 
         return "error"+ ":" + this.status; 
    } 

   } 
    req.send(); 
} 

getdata(display); 



 

 

let myPromise = new Promise(function(myResolve, myReject) { 

    // "Producing Code" (May take some time) 
      myResolve(); // when successful 

      myReject();  // when error 

    }); 

     

    // "Consuming Code" (Must wait for a fulfilled Promise) 

    myPromise.then( 
      function(value) { /* code if successful */ }, 
      function(error) { /* code if some error */ } 

    ); 

 

 

 

 

function display1(some1){ 
         document.getElementById("block1").innerHTML  = some1; 
       } 

 
 

       let mypromise = new Promise(function(myResolve,myReject){ 
         var time = new Date(); 
         var hour = time.getHours(); 
         if(hour>12){ 
           myResolve(hour+":PM"); 
         } else { 
           myReject("Error"); 
         } 
       }) 

 
 

       mypromise.then( 
         function (value){display1(value)}, 
         function (error) {display1(error)} 
       ) 


 

//using setTimeout 

function display(some){ 
          document.getElementById("block2").innerHTML = some; 
        } 
        var mypromise = new Promise(function(myResolve,myReject){ 
          setTimeout(function(){myResolve ("hello")},3000); 
        }); 
        mypromise.then( 
          function(val){display(val)}, 
        ) 

let mypromise = new Promise(function(myResolve,myReject){ 
         setTimeout(function(){myResolve("happy new year")},3000); 
       }) 

       mypromise.then( 
         function(val){document.getElementById("block2").innerHTML = val} 

       ) 

 

//waiting for a file 

 

function display(some){ 
         document.getElementById("block2").innerHTML = some; 
     } 

     let mypromise1 = new Promise(function(myResolve,myReject){ 
         let req = new XMLHttpRequest(); 
         req.open("GET","test1.html",true); 
         req.onload = function(){ 
              if(req.status == 200){ 
                   myResolve(req.responseText); 
              } else { 
                   myReject("Error"); 
              } 
         } 
         req.send(); 
       }); 

       mypromise1.then( 
         function(val){display(val)}, 
         function (error){display(error)} 

       ); 

 

 

 

 

let promise1 = new Promise((myResolve,myReject)=> { 
          var req  = new XMLHttpRequest(); 
          req.open("GET","test1.html",true); 
          req.onload = function(){ 
               if(this.status == 200){ 
                    myResolve(this.responseText); 
               } else { 
                    myReject(this.status); 

               } 

          } 

          req.send(); 

     }) 

     promise1.then( 

          (val)=>{document.getElementById("block1").innerHTML = val}, 

          (error)=>{document.getElementById("block1").innerHTML = error} 

 
 

     ); 

 

//Using  .catch() method for handling rejection 

 

 

let promise1 = new Promise((resolve,reject)=>{ 

    reject("Error when return the value"); 

}); 

promise1.catch(error=>console.log(error)); 

//output  

//Error when return the value 

 

 

//Using Promise.all() to execute multiple promises in parallel 

 

const promise1 = new Promise((resolve, reject) => { 

  setTimeout(() => { 

    resolve(3); 

  }, 300); 

}); 

const promise2 = new Promise((resolve, reject) => { 

  setTimeout(() => { 

    resolve(2); 

  }, 200); 

}); 

  

Promise.all([promise1, promise2]).then((val) => { 

  console.log(val[0]); 

  console.log(val[1]); 

}); 

//output 

//3 

//2 

 

 

 

let promise1 = new Promise((resolve1,reject1)=> {resolve1("hello")}); 

let promise2 = new Promise((resolve2,reject2)=>{resolve2("welcome")}); 

Promise.all([promise1,promise2]).then(val=>{console.log(val[0] + "\n" + val[1])}); 

//output 

//hello 

//welcome 

 

 


function output(some){
    document.getElementById("block1").innerHTML = some;
}
let promise1 = new Promise(function(resolve1,reject1){
    resolve1("wao");
    reject1("Error1");
});
promise1.then(
    function(val1){output(val1)},
    function(error1){output(error1)}
).then(
    val1_2 =>console.log("Wao"),error1_2 =>console.log("Error2")
);





let promise2 = new Promise(function(resolve2,reject2){
     var a = 5,b= 6;
     a+b>=10 ? resolve2("Good math"): reject2("Bad math");
});
promise2.then(
    function(val2){document.getElementById("block2").innerHTML = val2}
)
promise2.catch(
    function(error2){document.getElementById("block2").innerHTML = error2}
)





var output2 = some2 => document.getElementById("block3").innerHTML = some2; 
let promise3 = new Promise((resolve3,reject3)=>{
    var req = new XMLHttpRequest();
    req.open("GET","test1.html",true);
    req.onload = function(){
         if(this.status == 200){
              resolve3("GET DATA SUCCESSFULL!!!");
         } else {
              return "Error with code " + this.status;
         }
    }
    req.send();
});
promise3.then(val3=>output2(val3),error3=>output2(error3));






let promise4 = new Promise((resolve4,reject4)=>setTimeout(()=>resolve4("DateTime promise"),3000));
let promise5 = new Promise(function(resolve5,reject5){
    setTimeout(function(){resolve5("DateTime promise2")},4000);
})
Promise.all([promise4,promise5]).then(val5 => {
    document.getElementById("block4").innerHTML = val5[0];
    document.getElementById("block5").innerHTML = val5[1];
})






//Async 

 

 

   

function  output(some){ 

  document.getElementById("block1").innerHTML= some; 

} 

async function func1(){return "JAVASCRIPT"}; 

func1().then(val=>output(val)); 

//output JAVASCRIPT 







//Await 





async function func1(){ 

let mypromise1 = new Promise((resolve1,reject1)=>{ 

     resolve1("Good morning"); 

}); 

document.getElementById("block1").innerHTML = await mypromise1; 

 const output_console = await mypromise1; 

 console.log(output_console); 



}; 

func1(); 

//output Good morning 



















async function func1(){ 

 let mypromise1 = new Promise((resolve1,reject1)=> { 

      setTimeout(function(){resolve1("async wait for a set time out")},3000); 




 }); 

 document.getElementById("block1").innerHTML = await mypromise1; 

 const output_console = await mypromise1; 

 console.log(output_console); 



} 

func1(); 















async function func1(){ 

 let promise1 = new Promise((resolve,reject)=>{ 

      let req = new XMLHttpRequest(); 

      req.open("GET","test1.html",true); 

      req.onload = function(){ 

           if(this.status == 200){ 

                resolve("this is waiting for a data from test1.html"); 

           } else { 

                return "Error with code: "+ this.status; 

           } 

      } 

      req.send(); 

 }); 

 document.getElementById("block1").innerHTML = await promise1; 

 const output_console = await promise1; 

 console.log(output_console); 



} 

func1(); 





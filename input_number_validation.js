<!DOCTYPE html>
<html lang="en">


       <head>
              <meta charset="UTF-8">


              <meta name="keywords"  content="HTML,CSS,JAVASCRIPT,BOOSTRAP,W3CSS,
              SASS,JQUERY,ANGULAR JS, REACT JS, PHP, MYSQL, NODE.JS, ASP.NET">


              <meta name="description"   content="THIS IS TEMPLATE FASHION BLOG">


              <meta name="author"   content="PHUONG.TRIEU">



              <meta name="viewport"  content="width=device-width, initial-scale=1.0">




              <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
              <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
       
              <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script> 


              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
              
              
              <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js"></script>
              





              <link rel="shortcut icon" href="image/html_logo.png" type="image/x-icon">


              <title>PHUONG WEBSITE</title>



              <link rel="stylesheet"  type="text/css" href="test1.css">




              <style>


              </style>
       </head>




       <body>

    
          <header>
            
          


          </header>


      
        
       



           
            
          <main>

         
             


<div id="block1">
               <p>Input any number from 3 to 10</p>
               <input id="input1" type="text"  name="number_input" placeholder="Enter your number"
                style="width:400px">
                
                <button id="button1" type="button" name="button1" onclick="func1()"
                >Check</button>

                <div id="result1"></div>

           </div>





           <script>
                document.getElementById("button1").setAttribute("class","w3-button w3-ripple w3-purple w3-text-white w3-hover-aqua");
                document.getElementById("result1").setAttribute("class","text-danger");

                function func1(){
                       var g = document.getElementById("input1");
                       var h = document.getElementById("result1");
                       try{
                            if(g.value == ""){throw  "Number is required!!!"};
                       if(g.value<3){throw "Number is too small!!!"};
                       if(isNaN(g.value)){throw "Your input must be number!!!"};
                       if(g.value>10){throw "Number is too large!!!"};
                       if(Number(g.value)){throw "Number is qualified our requirement!!!"}
                       }catch(err){
                              h.innerHTML = err;
                       }finally{
                             var l = document.createElement("div");
                             l.id = "block2";
                             document.body.appendChild(l);
                             document.getElementById("block2").innerHTML = "End!!!";
                       }
                      
                }
           </script>


        
          
          </main> 

           
          



        
          



 
       
       
       </body>





       <footer>

       
       

       </footer>



</html>


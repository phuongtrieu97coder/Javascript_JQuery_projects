<!DOCTYPE html>
<html lang="en">
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<head>
    
    <style>
     
        
    </style>


</head>

<body> 
<div id="block0" >
         
         </div>




    <div id="block1" >
         
    </div>
   
     <div id="block2" >
          </div>


     <div id="block3" >

       


     </div>




     <div id="block4" >
          

     </div>



     <div id="block5"></div>
     <div id="block6"></div>
     <div id="block7"></div>
     <div id="block8"></div>
     <div id="block9"></div>
     <div id="block10"></div>
     <div id="block11"></div>
     <div id="block12"></div>
     <div id="block13"></div>
     <div id="block14"></div>
     <div id="block15"></div>





    




     
  
   <script>

    async function welcome(){
        return "hello";
         
    }
    welcome().then(welcome_result=>{ document.getElementById("block0").innerHTML = welcome_result});




     var promise1 = new Promise(function(resolve1,reject1){
          resolve1("hi");
     });
     promise1.then(
          function(result){document.getElementById("block1").innerHTML = result},
          function(error){document.getElementById("block2").innerHTML = error}
     );


     var promise2 = new Promise((resolve2,reject2)=>{
          class exercise{
               constructor(ex_name,muscle_work,type_of_ex){
                    this._exercise_name = ex_name;
                    this.$muscle_working = muscle_work;
                    this.type_of_exercise = type_of_ex;
               }
               intro1(){
                    return `We have this exercise called:${this._exercise_name}.
                     This is a ${this.type_of_exercise}, and it works your ${this.$muscle_working} muscles`;

               }
               static intro_error(){
                    return "Sorry this class can't be call"
               }
               intro2(exercise_equipment){
                    var exercise_child_obj = {
                         _exercise_name_1_2:["Deadlift","Barbell Row","Overhead Press"],
                         "$muscle_working_1_2$":{
                              Deadlift:["Back","Biceps","Lower Back","Trap"],
                              $Barbell_Row:["Back","Biceps","Lower Back","Trap"]
                         }
                    };
                    switch(exercise_equipment){
                         case "barbell":
                              return `We have some exercise for barbell like:
                                   ${exercise_child_obj._exercise_name_1_2} \n

                                   Deadlift works with some kinds of muscle like:
                                   ${exercise_child_obj.$muscle_working_1_2$.Deadlift} \n

                                   Barbell Row  works with some kinds of muscle like:
                                   ${exercise_child_obj.$muscle_working_1_2$.$Barbell_Row} \n
                                   `;
                              break;
                         case "machine":
                             function add_script_tag(){
                                  var add_script = document.createElement("script");
                                  add_script.src="test1.php";
                                  document.body.appendChild(add_script);
                             }
                             return add_script_tag();


                              /*
                                 
                              */
                              break;
                         default:
                              return "Error";
                    }

               }
          }

          



          var exercise_obj = new exercise("Squat","Legs","Compound");


          resolve2(exercise_obj.intro2("machine"));
          reject2(exercise.intro_error());
     });




     function get_data(machine_obj){
               document.getElementById("block5").innerHTML = `
                                        We have some exercise for machine like:
                                   ${machine_obj._exercise_name_1_3} \n

                                   Leg press machine works with some kinds of muscle like:
                                   ${machine_obj.$muscle_working_1_3$.leg_press_machine} \n

                                   Leg extension machine  works with some kinds of muscle like:
                                   ${machine_obj.$muscle_working_1_3$.$leg_extension_machine} \n
                                        `; 
          }





     promise2.then(
          (result2)=>{return result2}
     ).then(
          (result3)=>{document.getElementById("block4").innerHTML = "This is a good exercise"}
     )
     promise2.catch(
          (error2)=>{document.getElementById("block3").innerHTML=error2}
     )
     







     var promise3 = new Promise((resolve3,reject3)=>{
          class exercise2{
               constructor(ex_name,muscle_work,type_of_ex){
                    this._exercise_name = ex_name;
                    this.$muscle_working = muscle_work;
                    this.type_of_exercise = type_of_ex;
               }
               intro1_1(){
                    return `We have this exercise called:${this._exercise_name}.
                     This is a ${this.type_of_exercise}, and it works your ${this.$muscle_working} muscles`;

               }
              
               intro2_1(exercise_equipment){
                    var exercise_child_obj = {
                         _exercise_name_1_2:["Deadlift","Barbell Row","Overhead Press"],
                         "$muscle_working_1_2$":{
                              Deadlift:["Back","Biceps","Lower Back","Trap"],
                              $Barbell_Row:["Back","Biceps","Lower Back","Trap"]
                         }
                    };
                    switch(exercise_equipment){
                         case "barbell":
                              return `We have some exercise for barbell like:
                                   ${exercise_child_obj._exercise_name_1_2} \n

                                   Deadlift works with some kinds of muscle like:
                                   ${exercise_child_obj.$muscle_working_1_2$.Deadlift} \n

                                   Barbell Row  works with some kinds of muscle like:
                                   ${exercise_child_obj.$muscle_working_1_2$.$Barbell_Row} \n
                                   `;
                              break;
                         case "machine":
                             function add_script_tag(){
                                  var add_script = document.createElement("script");
                                  add_script.src="test1.php";
                                  document.body.appendChild(add_script);
                             }
                             return add_script_tag();


                              /*
                                 
                              */
                              break;
                         default:
                              return "Error";
                    }

               }
          }

          


          class exercise_child extends exercise2 {
               constructor(ex_name,muscle_work,type_of_ex,level){
                    super(ex_name,muscle_work,type_of_ex);
                    this.level = level;
               }
               intro3(){
                    
                    let promise_child1 = new Promise((resolve_child1,reject_child1)=>{
                         resolve_child1(`We have this exercise called:${this._exercise_name}.
                     This is a ${this.type_of_exercise}, and it works your ${this.$muscle_working} muscles.
                     Notice: This exercise is for ${this.level} training level people`);
                        

                    });
                    let promise_child2 = new Promise((resolve_child2,reject_child2)=>{
                         setTimeout(function(){resolve_child2("This is a greate exercise")},3000);
                    });

                    Promise.all([promise_child1,promise_child2]).then(
                         (result_promise_child)=> {
                             document.getElementById("block7").innerHTML = result_promise_child[0] +"\n"
                             document.getElementById("block8").innerHTML =result_promise_child[1]
                         }
                         
                    );

                    return "\n";
               }
          }

          let exercise_child_obj = new exercise_child("Pull-up","Back","Compound","intermediate");
          resolve3(exercise_child_obj.intro3());
          
     });

     promise3.then((output)=>{
          document.getElementById("block6").innerHTML = output;
     });




     async function async_func(){
          let async_promise = new Promise((resolve_async,reject_async)=>{
               var xmlhttp = new XMLHttpRequest();
               xmlhttp.open("GET","test1.html",true);
               xmlhttp.onload = function(){
                    if(this.status==200){
                         resolve_async(this.responseText);
                    }else {
                         rejet_async(this.status);
                    }
               }
               xmlhttp.send();
          });
          document.getElementById("block9").innerHTML = await async_promise;
     }

     async_func();




   </script>
   
    
   <footer >


</footer>
     
</body>





<!--


  

-->
</html>


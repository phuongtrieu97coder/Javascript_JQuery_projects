setInterval(time_func,1000);
        function time_func(){
          var time = new Date();
          var gethour = time.getHours();
          var getminute = time.getMinutes();
          var getsecond = time.getSeconds();
         
          if(gethour > 12){
            document.getElementById("block4").innerHTML  = gethour+":"+getminute+":"+getsecond+":PM";
          }else {
            document.getElementById("block4").innerHTML  = gethour+":"+getminute+":"+getsecond+":AM";
          }
         
        }


//output ex: 22:8:7:PM





 setInterval(func1,1000);
       function func1(){
            var d = new Date(),hour = d.getHours(),minute = d.getMinutes(),second = d.getSeconds();
            if(hour>12 && minute>10){
                 document.getElementById("block1").innerHTML = hour+":"+minute+":"+second+"PM";
            }else if(hour>12 && minute<10){
               document.getElementById("block1").innerHTML = hour+":"+"0"+minute+":"+second+"PM";
            
            }else if(hour<10 && minute>10){
               document.getElementById("block1").innerHTML = "0"+hour+":"+minute+":"+second+"AM";
            }else if(hour<10 && minute<10){
               document.getElementById("block1").innerHTML = "0"+hour+":"+"0"+minute+":"+second+"AM";
            }else {
               document.getElementById("block1").innerHTML = hour+":"+minute+":"+second+"AM";
            }
       }


//output ex: 22:08:7:PM




setInterval(func1,1000);
        function func1(){
             var d = new Date(),hour = d.getHours(),minute = d.getMinutes(),second = d.getSeconds();
             if(hour>12&&minute<10&&second<10){
                  document.getElementById("block1").innerHTML = hour+":"+"0"+minute+":"+"0"+second+":"+"PM";
             }else if(hour>12&&minute>10&&second>10){
               document.getElementById("block1").innerHTML = hour+":"+minute+":"+second+":"+"PM";
             }else if(hour>12&&minute>10&&second<10){
               document.getElementById("block1").innerHTML = hour+":"+minute+":"+"0"+second+":"+"PM";
             }else if(hour<12&&minute<10&&second<10){
               document.getElementById("block1").innerHTML = "0"+hour+":"+"0"+minute+":"+"0"+second+":"+"AM";
             }else if(hour<12&&minute<10&&second>10){
               document.getElementById("block1").innerHTML = "0"+hour+":"+"0"+minute+":"+second+":"+"AM";
             }else if(hour<12&&minute>10&&second<10){
               document.getElementById("block1").innerHTML = "0"+hour+":"+minute+":"+"0"+second+":"+"AM";
             }else if(hour<12&&minute>10&&second>10){
               document.getElementById("block1").innerHTML = "0"+hour+":"+minute+":"+second+":"+"AM";
             } else {
                  return "Time";
             }
        }

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

<!DOCTYPE html>
<html lang="en">
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
<head>
    
    


</head>

<body> 
     <button onclick="add_script_tag()">Click to check price</button>
     <div id="block1"></div>
     <div id="block2"></div>
     <div id="block3"></div>
     <div id="block4"></div>
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
     <div id="block16"></div>
  
     
   <script>

class car{
    constructor(_name1,branch1){
        this._name1 = _name1;
        this.branch1 = branch1;
    }
    intro1(){
        return "This is a car name " +this._name1 + " of " + this.branch1;
    }
    static intro2(){
        return "welcome to our car showroom";
    }
    get name1(){
        return this._name1;
    }
    set name1(new_name1){
        this._name1 = new_name1;
    }
    get intro3(){
        return "Today is Monday 06/14/2021. Welcome to our car Showroom";
    }
    static intro4(para1){
        return `This is a car name: ${para1._name1} of ${para1.branch1}`;
    }
}


class car_intro extends car{
    constructor(_name1,branch1,$year1,_$price1$_){
        super(_name1,branch1);
        this.$year1 = $year1;
        this._$price1$_ = _$price1$_;

    }
    intro5(){
        var today = new Date().getDay();
        switch(today){
            case 0:
                return "Today is Sunday," + car.intro2()+"\n";
                break;
            case 1:
                return "Today is Monday,"+car.intro2()+"\n";
                break;
            case 2:
                return "Today is Tuesday,"+car.intro2()+"\n";
                break;
            case 3:
                return  "Today is Wednesday,"+car.intro2()+"\n";
                break;
            case 4:
                return "Today is Thursday,"+car.intro2()+"\n";
                break;
            case 5:
                return "Today is Friday,"+car.intro2()+"\n";
                break;
            case 6:
                return "Today is Saturday,"+car.intro2()+"\n";
                break;
            default:
                return "Today is unknown,"+car.intro2()+"\n";
                break;
        }
    }
    intro6(){
        return this.intro1() + " .The year is "+this.$year1+", and the price is " + this._$price1$_;
    }
    intro7(){
        const car_collection = [
            "Honda accord",
            "Honda CR-V",
            "Audi-Q5",
            "Audi e-tron",
            "BMW M3",
            "BMW I-8",
            "Toyota Corolla",
            "Toyota Venza"
        ];
        

        Array.prototype.uppercase = function(){
            for (let i0 = 0 ; i0 < this.length ; i0++){
                this[i0] = this[i0].toUpperCase();
            }
        }
        car_collection.uppercase();

        var txt = ""
        for(let i = 0; i<car_collection.length ; i++){
             txt += `<b>${i}.${car_collection[i]}<b><br>`;
           document.getElementById("block11").innerHTML =`
           <br><b>We have many other cars like:</b> <br>`+txt +"<br><br>" ;
        }
        


        


        let car_collection_branch = {
            "Honda_accord": "Honda",
            _Honda_CR_V : "Honda",
            $Audi_Q5 : "Audi",
            Audi_e_tron: "Audi",
            "_$BMW_M3_$": "BMW",
            _BMW_I_8_: "BMW",
            $Toyota_Corolla$ : "Toyota",
            Toyota_Venza: "Toyota",
            car_collection_year(){
                return this.car_collection_branch_code +".Year:"+ this.car_collection_branch_year+ "\n";
            },
            car_collection_year_code(code1){
                return "The code for this year is " + code1+this.car_collection_branch_code +"\n";
            }


        }

        let honda_accord_year_obj1 = {
            car_collection_branch_code: "Hon_acr",
            car_collection_branch_year: "2021"
        }

        let audi_q5_obj1 = {
            car_collection_branch_code: "aud_q5",
            car_collection_branch_year: "2021"
        }
        document.getElementById("block12").innerHTML ="Honda Accord's" + " year method is " + car_collection_branch.car_collection_year.call(honda_accord_year_obj1)+"<br>";
        document.getElementById("block13").innerHTML ="The code for this year is "+car_collection_branch.car_collection_year_code.call(honda_accord_year_obj1,"ff5t54hyu767#^8^&^")+"<br>";
        document.getElementById("block14").innerHTML ="Audi Q5's" + " year method is " + car_collection_branch.car_collection_year.apply(audi_q5_obj1) + "<br>";
        document.getElementById("block15").innerHTML ="The code for this year is "+car_collection_branch.car_collection_year_code.apply(audi_q5_obj1,["cb34t5t5^&*&^u767#^8^&^"])+"<br>";
        
        
        //console.log("Here's is the price of each car through an object bulletin information: \n");

        /*const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const car_dealership_price_obj = JSON.parse(this.responseText);
                document.getElementById("block1").innerHTML = car_dealership_price_obj.$Car_price$ ;
            }
        }
        xmlhttp.open("GET","car_dealership_price.json",true);
        xmlhttp.send();*/
        
        
        return "\n";
    }
}
const car_obj = new car_intro("Camry LE Hybrid","Toyota",2021,"$20000");
car_obj.name1 = "Camry SE";
console.log(car_obj);
document.getElementById("block1").innerHTML = car_obj + "<br>";
console.log(car_obj._name1);
document.getElementById("block2").innerHTML = car_obj._name1 + "<br>";
console.log(car_obj.intro1());
document.getElementById("block3").innerHTML = car_obj.intro1() + "<br>";
console.log(car.intro2());
document.getElementById("block4").innerHTML = car.intro2() + "<br>";
console.log(car_obj.name1);
document.getElementById("block5").innerHTML = car_obj.name1 + "<br>";
console.log(car_obj.intro3);
document.getElementById("block6").innerHTML = car_obj.intro3 + "<br>";
console.log(car.intro4(car_obj));
document.getElementById("block7").innerHTML = car.intro4(car_obj) + "<br>";
console.log(car_obj.intro5());
document.getElementById("block8").innerHTML = car_obj.intro5() + "<br>";
console.log(car_obj.intro6());
document.getElementById("block9").innerHTML = car_obj.intro6() + "<br>";
console.log("\n");
console.log(car_obj.intro7());
document.getElementById("block10").innerHTML = car_obj.intro7() + "<br>";





    function add_script_tag(){
         var s = document.createElement("script");
         s.src = "test1.php";
         document.body.appendChild(s);
    }
    function car_price(obj1){
     
          document.getElementById("block16").innerHTML = `
          <br>
          <b>Here's is the price of each car through an object bulletin information:</b>

          <br>
          <u>Price of Honda Accord is :
          
          ${obj1.$Car_price$.Honda[0].Honda_accord.price} <br>
          
          
          
          Price of Honda CR-V is :
          
          ${obj1.$Car_price$.Honda[1].Honda_CR_V.price} <br>
          </u
          
          ` ;
        
    }

   </script>
    
  
     
</body>


<!--


  

-->
</html>


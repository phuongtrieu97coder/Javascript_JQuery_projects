class song { 

    intro1 (){ 

        console.log("hello"); 

    } 

    intro2 (){ 

        console.log("welcome"); 

    } 

} 

var song_obj  = new song(); 

console.log(song_obj.intro1()); 

 

//output    hello 

 

 

 

 

 

 

//Class with constructor method 

 

//create a class named: song  that has three properties: name1,type1,director 

 

class song { 

    constructor(name1,type1,director){ 

        this.name1 = name1, 

        this.type1 = type1, 

        this.director = director 

    } 

 
 

}; 

const song_obj = new song("I need you","Trance","Armin Van Buuren"); 

console.log(song_obj); 

/*output 

song { 

  name1: 'I need you', 

  type1: 'Trance', 

  director: 'Armin Van Buuren' 

} 

 */ 

console.log(song_obj.name1); 

//ouput   I need you 

 

 

 

 

 

//make an object through a class and define property for this object 

 

class obj1 { 

    constructor(val1,val2,val3){ 

        this.prop1 = val1; 

        this.prop2 = val2; 

        this.prop3 = val3; 

    } 

} 

const obj1_create = new obj1( 

    "val1", 

{ 

    "prop2_1":"val2_1", 

    prop2_2:"val2_2" 

}, 

["val3_1","val3_2","val3_3"] 

); 

 
 

Object.defineProperty(obj1_create,"$prop4",{ 

    value:{ 

        prop4_1: "val4_1", 

        _prop4_2: ["val4_2_1","val4_2_2"] 

    }, 

    enumerable: true, 

    configurable: true, 

    writable: true 

}) 

console.log(obj1_create); 

/* 

output  

obj1 { 

  prop1: 'val1', 

  prop2: { prop2_1: 'val2_1', prop2_2: 'val2_2' }, 

  prop3: [ 'val3_1', 'val3_2', 'val3_3' ], 

  '$prop4': { prop4_1: 'val4_1', _prop4_2: [ 'val4_2_1', 'val4_2_2' ] } 

} 

 
 

*/ 

 

 

 

//make a class contains properties and class method 

 

class song { 

    constructor(name1,type1,director1){ 

        this.name1 = name1, 

        this.type1 = type1, 

        this.director1 = director1; 

    } 

    intro(){ 

        return `This is a song called: ${this.name1} of DJ: ${this.director1} in the ${this.type1} album`; 

    } 

    intro2(date1){ 

        switch(date1){ 

            case 0: 

                return "Today is Sunday"; 

                break; 

            case 1: 

                return "Today is Monday"; 

                break; 

            case 2: 

                return "Today is Tuesday"; 

                break; 

            case 3: 

                return "Today is Wednesday"; 

                break; 

            case 4: 

                return "Today is Thursday"; 

                break; 

            case 5: 

                return "Today is Friday"; 

                break; 

            case 6:  

                return "Today is Saturday"; 

                break; 

        } 

    } 

} 

const song_obj = new song("Freefall","Trance","Armin Van Buuren"); 

console.log(song_obj); 

console.log(song_obj.type1); 

console.log(song_obj.intro()); 

console.log(song_obj.intro2(new Date().getDay())); 

/*output 

song { 

  name1: 'Freefall', 

  type1: 'Trance', 

  director1: 'Armin Van Buuren' 

} 

Trance 

This is a song called: Freefall of DJ: Armin Van Buuren in the Trance album 

Today is Saturday 

*/ 

 

 

 

 

 
 

class car{ 

    constructor(name1,branch1){ 

        this.name1 = name1; 

        this.branch1 = branch1; 

    } 

    intro_construct(){ 

        return `I have a ${this.name1} car . The branch is ${this.branch1} `; 

    } 

} 

 
 

class car_price extends car { 

    constructor(name1,branch1,year1,price1){ 

        super(name1,branch1); 

        this.year1 = year1; 

        this.price1 = price1; 

         

    } 

    introduction(){ 

        return this.intro_construct()+`.The year is: ${this.year1}. This car is just ${this.price1} dollar`; 

    } 

} 

 
 

const car_price_obj = new car_price("Camry","Toyota",2005,"$3000"); 

console.log(car_price_obj.introduction()); 

document.getElementById("block1").innerHTML = car_price_obj.introduction()+"<br>"; 

//output 

//I have a Camry car . The branch is Toyota .The year is: 2005. This car is just $3000 dollar 

 




class car{ 

    constructor(name1,branch1){ 

        this._name1 = name1; 

        this.branch1 = branch1; 

    } 

    intro_construct(){ 

        return `I have a ${this._name1} car . The branch is ${this.branch1} `; 

    } 

    get name1(){ 

        return this._name1; 

    } 

    set name1(new_name1){ 

        this._name1 = new_name1; 

    } 

} 

 
 

class car_price extends car { 

    constructor(_name1,branch1,year1,price1){ 

        super(_name1,branch1); 

        this.year1 = year1; 

        this.price1 = price1; 

         

    } 

    introduction(){ 

        return this.intro_construct()+`.The year is: ${this.year1}. This car is just ${this.price1} dollar`; 

    } 

     

} 

 
 

const car_price_obj = new car_price("Camry","Toyota",2005,"$23000"); 

car_price_obj.name1 = "Camry LE Hybrid"; 

console.log(car_price_obj.introduction()); 

console.log(car_price_obj.name1); 

document.getElementById("block1").innerHTML = car_price_obj.introduction()+"<br>"; 

//output 

//I have a Camry LE Hybrid car . The branch is Toyota .The year is: 2005. This car is just $23000 dollar 

//Camry LE Hybrid 

 

 







class car{
    constructor(_name1,branch1){
        this._name1 = _name1;
        this.branch1 = branch1;
    }
    intro1(){
        return this._name1 + "," + this.branch1;
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

const car_obj = new car("Camry LE Hybrid","Toyota");
car_obj.name1 = "Camry SE";
console.log(car_obj);
console.log(car_obj._name1);
console.log(car_obj.intro1());
console.log(car.intro2());
console.log(car_obj.name1);
console.log(car_obj.intro3);
console.log(car.intro4(car_obj));


/*
output
car { _name1: 'Camry SE', branch1: 'Toyota' }
Camry SE
Camry SE,Toyota
welcome to our car showroom
Camry SE
Today is Monday 06/14/2021. Welcome to our car Showroom
This is a car name: Camry SE of Toyota
*/




/*
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
*/
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
/*
</script>
*/


/*
code in json file:
car_dealership_price.json




{
    "Branch":["Honda","Audi","BMW","Toyota"],
    "$Car_name":{
        "Honda":["Honda accord","Honda CR-V"],
        "Audi" : ["Audi-Q5","Audi e-tron"],
        "BMW" : ["BMW M3","BMW I-8"],
        "Toyota" : ["Toyota Corolla","Toyota Venza"]
    },
    "_Car_year": {
        "Honda":[
            {
                "Honda_accord":2021
            },
            {
                "Honda_CR_V":2021
            }
        ],
        "Audi" : [
            {
                "Audi_Q5":2019
            },
            {
                "Audi_e_tron":2018
            }
        ],
        "BMW" : [
            {
                "BMW_M3":2020
            },
            {
                "BMW_I_8":2021
            }
        ],
        "Toyota" : [
            {
                "Toyota_Corolla":2020
            },
            {
                "Toyota_Venza":2019
            }
        ]
    },
    "$Car_price$":{
        "Honda":[
            {
                "Honda_accord":{
                    "year":2021,
                    "price": "$30000"
                }
            },
            {
                "Honda_CR_V":{
                    "year":2021,
                    "price": "$28000"
                }
            }
        ],
        "Audi" : [
            {
                "Audi_Q5":{
                    "year":2019,
                    "price": "$64000"
                }
            },
            {
                "Audi_e_tron":{
                    "year":2018,
                    "price": "$60000"
                }
            }
        ],
        "BMW" : [
            {
                "BMW_M3":{
                    "year":2020,
                    "price": "$50000"
                }
            },
            {
                "BMW_I_8":{
                    "year":2021,
                    "price": "$24000"
                }
            }
        ],
        "Toyota" : [
            {
                "Toyota_Corolla":{
                    "year":2020,
                    "price": "$16000"
                }
            },
            {
                "Toyota_Venza":{
                    "year":2019,
                    "price": "$13000"
                }
            }
        ]
    }
}
*/





/*
code in php file
test1.php



<?php

$myfile = fopen("car_dealership_price.json", "r") or die("Unable to open file!");
$json_obj =  fread($myfile,filesize("car_dealership_price.json"));
echo "car_price(".$json_obj.")";

?>
*/







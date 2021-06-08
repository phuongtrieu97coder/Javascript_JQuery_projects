//make an object in another way
const obj3 = {
    "prop1":"value1",
    "prop2":"value2"
}

//make an array that has object as element
let array_obj1 = [
    {"prop1":"val1","prop2":"val2"},
    {"prop1_2":"val1_2","prop2_2":"val2_2"}
]

//make an object that has one property in double quotes contains array value includes many elements as object
var obj4 = {
    "obj4_prop1": [
        {"obj4_prop1_1":"val4_1","obj4_prop1_2":"val4_2"},
        {"obj4_prop1_3":"val4_3","obj4_prop1_4":"val4_4"},
        {"obj4_prop1_5":"val4_5","obj4_prop1_6":"val4_6"},
    ]
};

//make an object to turn into JSON_object
var obj5 = {
    "prop1":"val1",
    "prop2":"val2"
}
const JSON_obj1 = JSON.stringify(obj5);
console.log(JSON_obj1);


//make an array to turn into JSON_array
var array2 = [12,"wao","ko",{"prop1":"val1"},63];
const JSON_array = JSON.stringify(array2);
console.log(JSON_array);

//make a JSON_object and turn it into object
var JSON_obj2 = '{"prop1":"val1","prop2":"val2","prop3":["val3_1","val3_2","val3_3"]}';
const obj6 = JSON.parse(JSON_obj2);
console.log(obj6);

//make a JSON_array and turn it into array
var JSON_array2 = '["el1",23,{"prop1_el2":"val1_2"}]';
const array3 = JSON.parse(JSON_array2);
console.log(array3);

//JSON is a string format for storing and transpoting data
//JSOn is text and text can be transpotted anywhere and can read in any programing language
//data type: string, array,boolean,object,number,null
//JSON can't use with function or date
//we can convert a data type like object,array and so on into JSON format data type using JSON.stringify()
//we can convert a JSON format data type back into a data type like object,array and so on using JSON.parse()
//the file type for JSON files is .json
//the MIME type for JSON text is "application/json"
//object inside a JSON string format is called: object literal(ordinary)
//array inside a JSOn string format is called: array literal(ordinary)

//parsing date
//dates are not allowed in JSON so we need to make it as a string and then convert it back into date later
const JSON_obj3 = '{"prop1":"val1","today":"2021-06-04"}';
const date_obj = JSON.parse(JSON_obj3);
date_obj.today = new Date(date_obj.today);
console.log(date_obj);
console.log(date_obj.today);
//using reviver function as the second parameter inside JSON.parse to check each property before returning value
const date_obj1_2 = JSON.parse(JSON_obj3,function(key1,val1){
    if(key1 == "today"){
        return new Date(val1);
    } else {
        return val1;
    }
})
console.log(date_obj1_2);
console.log(date_obj1_2.today);

//with stringify method , we can turn any date format into string
const date_obj2 = {prop1:"val1",today: new Date()};
const JSON_date_obj = JSON.stringify(date_obj2);
console.log(JSON_date_obj);

//storing and retrieving date with JSON
const employee2 = {em_name:"HP",jobtitle:["web developer","app developer","data scientist"]};
const JSON_employee2 = JSON.stringify(employee2);
localStorage.setItem("testJSON",JSON_employee2);

const text1 = localStorage.getItem("testJSON");
const employee2_obj = JSON.parse(text1);
document.getElementById("block1").innerHTML = employee2_obj;
document.getElementById("block2").innerHTML = text1;
document.getElementById("block3").innerHTML = employee2_obj.jobtitle;
document.getElementById("block4").innerHTML = employee2_obj["jobtitle"][2];


//loop through an object array
const car_info1 = {"name1":"Josh","age":25,"car":["Ford","BMW"]};
for(let z in car_info1.jobtitle){
    console.log(`${car_info1.jobtitle[z]}`);
}
//for loop through array property of an object converted by JSON_car_info string format
const JSON_car_info = '{"name1":"Josh","age":25,"car":["Ford","BMW"]}';
const car_info = JSON.parse(JSON_car_info);
for(let x in car_info.car){
    console.log(car_info.car[x]+",");
}


/*

A common use of JSON is to exchange data to/from a web server.

When receiving data from a web server, the data is always a string.

Parse the data with JSON.parse(), and the data becomes a JavaScript object.

*/

//Convert a JavaScript object into a JSON string, and send it to the server
const myObj = { name: "John", age: 31, city: "New York" };
const myJSON = JSON.stringify(myObj);
window.location = "demo_json.php?x=" + myJSON;


//receive data from a server in JSON format, now you can convert
// it into javascript data type and call them
const myJSON = '{"name":"John", "age":31, "city":"New York"}';
const myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name;



//request JSON from the server by using an AJAX request
//Use the XMLHttpRequest to get data from the server:
//make sure you have json string format data code in the file you want to get data
// XMLHttpRequest helps: 
//update a web page without reloading a web page 
//Request data from a server - after the page has loaded 
//Receive data from a server  - after the page has loaded 
//Send data to a server - in the background
//make sure you have JSON string format data code in the file you want to get data
// new XMLHttpRequest()  create a  new XMLHttpRequest()
//open("GET","json_demo_array.json",true) specified the type of request
//GET is a type of request   , we can use   GET or POST
//url is the file location
// async: true is asynchronous,  false  is synchronous
//send() is send a request  to server  , used for GET
//send(string) is send a request  to server  , used for POST
//onreadystatechange  is a function to be called when the readyState property changes
//readyState is the status of XMLHttpRequest
//0 is request not initialized
//1 is server connection established
//2 is request received
//3 processing request
//4 request finished and response is ready
//status  200 : ok
// 404: page not found
//responseText  : the response data as a string
//responseXML : the response data as XML data 


const xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    const myArr = JSON.parse(this.responseText);
    document.getElementById("block1").innerHTML = myArr[0];
  }
};
xmlhttp.open("GET", "json_demo_array.txt", true);
xmlhttp.send();

//remember to create a file .txt and here is the code in file: json_demo_array.txt:
//[ "Ford", "BMW", "Audi", "Fiat" ]
//output of this request is :
//Ford


const xmlhttp2 = new XMLHttpRequest();
xmlhttp2.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    const myObj = JSON.parse(this.responseText);
    document.getElementById("block2").innerHTML = myObj.name;
    document.getElementById("block3").innerHTML = myObj;
  }
};
xmlhttp2.open("GET", "json_demo_object.txt", true);
xmlhttp2.send();

//remember to create a file .txt and here is the code in file: json_demo_object.txt:
/*
{
    "name":"John",
    "age":31,
    "pets":[
        { "animal":"dog", "name":"Fido" },
        { "animal":"cat", "name":"Felix" },
        { "animal":"hamster", "name":"Lightning" }
    ]
}
*/
//output of this request is :
//John
//[object Object]



const xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        const obj_demo = JSON.parse(this.responseText);
        document.getElementById("block1").innerHTML = obj_demo.prop1;
    }
}
xmlhttp.open("GET","json_demo2.json",true);
xmlhttp.send();

//remember to create a JSON file .json and here is the code in file: json_demo2.json:
/*
{
    "prop1":"val1",
    "prop2":["val2_1","val2_2","val2_3"],
    "prop3":{
        "prop3_1":"val3_1"
        
    },
    "prop4":[
        {"prop4_1":"val4_1","prop4_2":"val4_2"},
        {"prop4_3":"val4_3","prop4_4":"val4_4"}
    ]
}
*/

//JSONP is a method for sending JSON data without worrying about cross-domain issues. 
//JSONP request files using the script tag instead of the XMLHttpRequest object. 
//Ex: <script src="demo_jsonp.php"></script>

//syntax on client web page 

/*<body>  
<div id="block1"></div> 
<script> 
  function func1(obj1){ 

      document.getElementById("block1").innerHTML = obj1.age; 

    } 

  </script> 

  <script src="test1.php"></script> 
</script> 
</body> 
//syntax on test1.php file 
<?php 

$obj1 = '{"name":"john","age":36}'; 

echo "func1(".$obj1.")"; 

//these syntax help to call function on the client web page  func1({"name":"john","age":36}) 

?> 
*/


//you can write data from php and convert them into JSON data type 

 
/*
<?php 

 
 

$myArr = array("John", "Mary", "Peter", "Sally"); 

//convert this array from PHP into JSON array literal 

$myJSON = json_encode($myArr); 

 
 

echo "func1(".$myJSON.")"; 

 
 

?> 

 

//function in client web page
*/

//function in client web page 

 
/*
function func1(arr1){ 

    document.getElementById("block1").innerHTML = arr1; 

  } 

</script> 

<script src="test1.php"></script> 

//use for loop 

 

function func1(obj1){ 

    var text = ""; 

    for(let i in obj1){ 

        text += `${i}: ${obj1[i]} <br>`; 

        document.getElementById("block1").innerHTML = text; 

    } 

} 

*/


/*
create table that has object property from JSON obj literal data of a server made by php file
using JSONP


function func1(obj1){ 

    var text = "<table>"; 

    for(let i in obj1){ 

        text += `<tr><td>${i}: ${obj1[i]} </td><tr>`; 

       

    } 
    text += "</table>";
     document.getElementById("block1").innerHTML = text; 

} 


create table that has array element from JSON array literal data of a server made by php file
using JSONP


function func1(arr1){ 

    var text = "<table border='4'>"; 

    for(let i = 0; i< arr1.length ; i++){ 

        text += `<tr><td>${i}: ${arr1[i]} </td><tr>`; 

    } 
    text += "</table>";
     document.getElementById("block1").innerHTML = text; 

} 




 <button onclick="func1_butt()">click to show jobtitle</button> 

 
 

   <script> 

       //Creating a Dynamic Script Tag 

       //Create and insert the <script> tag when a button is clicked: 

      function func1_butt(){ 

          var s = document.createElement("script"); 

          s.src= "test1.php"; 

          document.body.appendChild(s); 

      } 

      function func1(obj1){ 

          document.getElementById("block1").innerHTML = obj1.jobtitle; 

      } 

 
 

   </script> 

   //syntax on the test1.php 

 

<?php 

$JSON_obj1 = '{"name":"ewr","age":29,"jobtitle":"architecture engineer"}'; 

echo "func1(".$JSON_obj1.")";  

?> 



//create select dropdown menu framework   using JSONP to get data from a server 

       

     var text1 = "<select>"; 

     function func1(obj1){ 

       for(let i1 in obj1){ 

         text1 += `<option>${obj1[i1]}</option>`; 

       } 

       text1 += "</select>"; 

       document.getElementById("block1").innerHTML = text1; 

     } 

   </script> 

  <script src="test1.php"></script> 

 

 

//syntax inside test1.php file: 

<?php 

 
 

$json_obj1 = '{"select_button_val":"Select Code","code1":"#$T%$T","code2":"^Y&U^657#T","code3":"@#RE#$T%$^"}'; 

echo "func1(".$json_obj1.")"; 
 

?> 

*/

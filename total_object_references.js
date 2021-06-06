var obj1 = {
    prop1: "val1",
    prop2: ["val2_1","val2_2","val2_3","val2_4"],
    _prop3: "val3",
    prop4: {
        prop4_1: "val4_1",
        prop4_2: ["val4_2_1","val4_2_2","val4_2_3","val4_2_4"],
        prop4_3:{
            prop4_3_1: "val4_3_1",
            prop4_3_2: {
                prop4_3_2_1: "val4_3_2_1"
            }
        }
    },
    get prop3(){
        return this._prop3;
    },
    set prop3(new_prop3){
        this._prop3 = new_prop3;
    },
    get intro1(){
        return "Hi"
    },
    intro2(){
        return this.prop1 + " is great \n";
    },
    intro3(para3_1,para3_2){
        return para3_1 + para3_2 + "\n";
    },
    intro4:()=> "Yeah",
    intro5: para5_1 => para5_1 *100,
    intro6: (para6_1,para6_2) => {
        console.log(para6_1 / para6_2);
        return "\n";
    },
    intro7: (para7_1) => {
        switch(para7_1){
            case "ph":
                console.log("Hello, Phuong");
                return "\n";
                break;
            case "code":
                console.log("This is a coding program of Phuong");
                return "\n";
                break;
            case "ja":
                console.log("This program is using Javascript");
                return "\n";
                break;
            default:
                console.log("Welcome to this Object program of Phuong");
                break;
        }
    },
    intro8:(para8_1,para8_2,para8_3)=> {
        return {
            prop_intro8_1 : para8_1,
            prop_intro8_2 : para8_2,
            prop_intro8_3 : para8_3
            
        }
    },
    intro9(){
        console.log(`${this.prop2[2]} is an array property value of this obj`);
        return "\n";
    }
}

const {prop1,prop2,_prop3,prop4} = obj1;
console.log(prop1);
console.log(prop2[2]);
console.log(_prop3);
console.log(prop4.prop4_1);
console.log(prop4["prop4_2"][3]);
console.log(prop4["prop4_3"].prop4_3_1);
console.log(prop4["prop4_3"]["prop4_3_2"].prop4_3_2_1);
console.log(obj1.prop3);
console.log(obj1.prop3 = "val3_0");
console.log(obj1.intro1);
console.log(obj1.intro2());
console.log(obj1.intro3(50,80));
console.log(obj1.intro4());
console.log(obj1.intro5(100));
console.log(obj1.intro6(100,20));
console.log(obj1.intro7("ph"));
console.log(obj1.intro7("code"));
console.log(obj1.intro7("ja"));
console.log(obj1.intro8("val8_1","val8_2","val8_3"));
console.log(obj1.intro9());



//another way to make an object
var obj1_2 = {
    "prop1": "val1",
    "prop2": "val2",
    "prop3": "val3",
    $prop4: “val4”
}






var obj2 = Object.create({});
obj2.prop1 = "val1";
obj2.prop2 = ["val2_1","val2_2","val2_3","val2_4"];
obj2.prop3 = {
    prop3_1: "val3_1",
    prop3_2: "val3_2"
}

var prop1_obj3 = "val1";
var prop2_obj3 = ["val2_1","val2_2","val2_3","val2_4"];
var prop3_obj3 = {
    prop3_obj3_1: "val3_1",
    prop3_obj3_2: "val3_2"
}
const obj3 = {prop1_obj3,prop2_obj3,prop3_obj3};



var obj4 = {
    prop1:"val1"
}


let big_obj = Object.assign(obj1,obj2,obj3,obj4);
console.log("\n");
console.log(big_obj);

console.log("\n");

for( a in big_obj){
    console.log(`${a} ${big_obj[a]}`);
}



var obj5 ={
    prop1: ["val1_1","val1_2","val1_3","va1_4"]
}


delete obj5.prop1;


Object.freeze(obj4);


const obj6 = {
    prop1: "Val1"
}





Object.defineProperty(obj6,"prop2",{
    value: "val2",
    enumerable: true,
    configurable:false,
    writable:false
});

Object.defineProperties(obj6,{
    prop3: {
        value: "val3",
        enumerable:false,
        configurable:true,
        writable:true
    },
    prop4: {
        value: "val4",
        enumerable: true,
        configurable: false,
        writable:true
    }
});


console.log(obj6);


//defineProperty with get and set value


var obj1 = {counter: 0};
Object.defineProperty(obj1,"sum",{
    set : function (val) {this.counter += val;}
});
Object.defineProperty(obj1,"multiply",{
    get : function () {return this.counter*=10;}
})
obj1.sum = 3;
console.log(obj1.counter);
//if you want to call the properties : sum or multiply that has get or set method
// , you need to set the return keyword inside 
// get or set method
console.log(obj1.multiply);
//output 
// 3   
// 30




const get_prop_descriptor = Object.getOwnPropertyDescriptor(obj6,"prop4");
console.log(get_prop_descriptor);
console.log(get_prop_descriptor.enumerable);
const get_prop_descriptors = Object.getOwnPropertyDescriptors(obj6);
console.log(get_prop_descriptors);
console.log(get_prop_descriptors.prop3);
console.log(get_prop_descriptors.prop4.configurable);


const turn_obj6_into_AIO = Object.entries(obj6);
console.log(turn_obj6_into_AIO);
console.log("\n");

for(const [key,value] of Object.entries(obj6)){
    console.log(`${key}: ${value}`);
}

Object.entries(obj6).forEach(([key,value]) => console.log(`${key}${value}`));

var AIO1 = new Map([["prop1","val1"],["prop2","val2"],["prop3",{prop3_1:"val3_1",prop3_2:"val3_2"}],["prop4",[45,656,76]]]);
console.log(Object.fromEntries(AIO1));
console.log("\n");
var AIO2 = [["prop1","val1"],["prop2","val2"],["prop3",{prop3_1:"val3_1",prop3_2:"val3_2"}],["prop4",[45,656,76]]]
console.log(Object.fromEntries(AIO2));
console.log("\n");
var AIO3 = [

   ["prop1","val1"],
   ["prop2","val2"],
   [
       "prop3",
      {
          prop3_1:"val3_1",
          prop3_2:"val3_2"
      }
    ],
    [
        "prop4",[45,656,76]
    ]
]
const turn_AIO3_into_object = Object.fromEntries(AIO3);
console.log(turn_AIO3_into_object);



var obj7 = {
    prop1:"val1",
    prop2: "val2"
}


console.log(Object.getOwnPropertyNames(obj7));
console.log(Object.getOwnPropertyNames("welcome"));
Object.getOwnPropertyNames(obj7).forEach(
    function(val,idx,arr){
        console.log(val + ": " + obj7[val]);
    }
);

var arr1 = ["a","b","c","d"];
console.log(Object.getOwnPropertyNames(arr1).sort());


const a_sym = Symbol("$%#T%$");
const b_sym = Symbol.for("4#TY^Y^%Y&^U&*I&*I");
obj7[a_sym] = "localSymbol";
obj7[b_sym] = "globalSymbol";
const get_prop_symbol = Object.getOwnPropertySymbols(obj7);
console.log(get_prop_symbol);
console.log(get_prop_symbol[1]);
console.log(obj7);
console.log(get_prop_symbol.length);


console.log(Object.keys(obj7));
console.log("\n");
console.log(Object.values(obj7));
console.log(Object.keys(arr1));

let obj8 = {
    4: "i",
    8: "e",
    3: "w",
    6: "u"
}
console.log(Object.keys(obj8));
console.log("\n");
console.log(Object.values(obj8));

console.log(Object.keys("welcome"));
console.log("\n");
console.log(Object.values("welcome"));



let prototype1 = {};
const obj9 = Object.create(prototype1);
console.log(Object.getPrototypeOf(obj9) == prototype1);

const obj10 = {a:1,b:2} , obj11 = {a:1,b:2} , obj12 = {c:1,d:2};
console.log(Object.is(obj10,obj10));
console.log(Object.is(obj10,obj11));

Object.freeze(obj11);
Object.seal(obj11);
Object.preventExtensions(obj11);
console.log(Object.isExtensible(obj11));
console.log(Object.isFrozen(obj11));
console.log(Object.isSealed(obj11));


var obj13 = {a:2,b:4};
Object.preventExtensions(obj13);
Object.defineProperty(obj13,"a",{
    configurable:false,
    writable:false
});
console.log(Object.isFrozen(obj13));


var obj14 = {prop1:"val1"};
Object.preventExtensions(obj14);
Object.defineProperty(obj14,"prop1",{
    configurable:false
})
console.log(Object.isSealed(obj14));



let obj15 = [];
console.log(obj15.constructor);
let obj16 = {};
console.log(obj16.constructor);

function tree(tree_name){
    this.tree_name = tree_name;
}

let tree_name_obj = new tree("oak");
console.log(tree_name_obj);
console.log(tree_name_obj.constructor);
console.log(`tree_name_obj.constructor is ${tree_name_obj.constructor}`);



//create an object through a function
function obj16(obj16_prop1,obj16_prop2){
    this.obj16_prop1 = obj16_prop1;
    this.obj16_prop2 = obj16_prop2;
   
}
obj16.prototype.obj16_prop3 = {
    obj16_prop3_1: "val3_1",
    obj16_prop3_2: ["val3_2_1","val3_2_2","val3_2_3"]
}; 

const obj16_object = new obj16("val1",["val2_1","val2_2","val2_3","val2_4"]);
console.log(obj16_object);
console.log(obj16_object.obj16_prop3);


//a function can be invoked(started) automatically without being called  using self-invoke function
(function(){
    console.log("Hello" + obj16_object);
})();


(function(){
    document.getElementByIdg("block1").innerHTML = "welcome " + obj16_object;
})();





 

//call(obj) method 

 

 

var person = { 

    fullName() { 

      return this.firstName + " " + this.lastName; 

    } 

  } 

  var person1 = { 

    firstName:"John", 

    lastName: "Doe" 

  } 

  var person2 = { 

    firstName:"Mary", 

    lastName: "Doe" 

  } 

  console.log(person.fullName.call(person1));  

   // output "John Doe" 

 

 

//Call(obj,arg1,arg2,...); 

 

var person = { 

    fullName(jobtitle,salary) { 

      return "This is " +this.firstName + 

       " " + this.lastName+ ",he is a " + jobtitle + 

        " and he earns " +salary+" every month"; 

    } 

  } 

  var person1 = { 

    firstName:"John", 

    lastName: "Doe" 

  } 

  var person2 = { 

    firstName:"Mary", 

    lastName: "Doe" 

  } 

  console.log(person.fullName.call(person1,"Web Developer","$12000"));  

   // output This is John Doe,he is a Web Developer and he earns $12000 every month 




//apply(obj) method  

 
 

var person = {  

    fullName() {  
      return this.firstName + " " + this.lastName;  
    }  
  }  

 
 

  var person1 = {  
  firstName:"John",  
 lastName: "Doe"  
  }  

 
 var person2 = {  
firstName:"Mary",  
     
lastName: "Doe"  
 }  

 
 

  console.log(person.fullName.apply(person1));   

 
 

   // output "John Doe"  

 
//apply(obj,[“arg1”,”arg2”,…]);  

 

var person = {  

fullName(jobtitle,salary) {  

return "This is " +this.firstName +  

" " + this.lastName+ ",he is a " + jobtitle +  
 " and he earns " +salary+" every month";  

 }  
 }  

var person1 = {  
firstName:"John",  
lastName: "Doe"  

  }  

 
 
var person2 = {  
firstName:"Mary",  
 lastName: "Doe"  
}  

console.log(person.fullName.apply(person1,["Web Developer","$12000"]));   

 
 

   // output This is John Doe,he is a Web Developer and he earns $12000 every month 
/*
output


val1
val2_3
val3
val4_1
val4_2_4
val4_3_1
val4_3_2_1
val3
val3_0
Hi
val1 is great 

130

Yeah
10000
5


Hello, Phuong


This is a coding program of Phuong


This program is using Javascript


{
  prop_intro8_1: 'val8_1',
  prop_intro8_2: 'val8_2',
  prop_intro8_3: 'val8_3'
}
val2_3 is an array property value of this obj




{
  prop1: 'val1',
  prop2: [ 'val2_1', 'val2_2', 'val2_3', 'val2_4' ],
  _prop3: { prop3_1: 'val3_1', prop3_2: 'val3_2' },
  prop4: {
    prop4_1: 'val4_1',
    prop4_2: [ 'val4_2_1', 'val4_2_2', 'val4_2_3', 'val4_2_4' ],
    prop4_3: { prop4_3_1: 'val4_3_1', prop4_3_2: [Object] }
  },
  prop3: [Getter/Setter],
  intro1: [Getter],
  intro2: [Function: intro2],
  intro3: [Function: intro3],
  intro4: [Function: intro4],
  intro5: [Function: intro5],
  intro6: [Function: intro6],
  intro7: [Function: intro7],
  intro8: [Function: intro8],
  intro9: [Function: intro9],
  prop1_obj3: 'val1',
  prop2_obj3: [ 'val2_1', 'val2_2', 'val2_3', 'val2_4' ],
  prop3_obj3: { prop3_obj3_1: 'val3_1', prop3_obj3_2: 'val3_2' }
}


prop1 val1
prop2 val2_1,val2_2,val2_3,val2_4
_prop3 [object Object]
prop4 [object Object]
prop3 [object Object]
intro1 Hi
intro2 intro2(){
        return this.prop1 + " is great \n";
    }
intro3 intro3(para3_1,para3_2){
        return para3_1 + para3_2 + "\n";
    }
intro4 ()=> "Yeah"
intro5 para5_1 => para5_1 *100
intro6 (para6_1,para6_2) => {
        console.log(para6_1 / para6_2);
        return "\n";
    }
intro7 (para7_1) => {
        switch(para7_1){
            case "ph":
                console.log("Hello, Phuong");
                return "\n";
                break;
            case "code":
                console.log("This is a coding program of Phuong");
                return "\n";
                break;
            case "ja":
                console.log("This program is using Javascript");
                return "\n";
                break;
            default:
                console.log("Welcome to this Object program of Phuong");
                break;
        }
    }
intro8 (para8_1,para8_2,para8_3)=> {
        return {
            prop_intro8_1 : para8_1,
            prop_intro8_2 : para8_2,
            prop_intro8_3 : para8_3
            
        }
    }
intro9 intro9(){
        console.log(`${this.prop2[2]} is an array property value of this obj`);
        return "\n";
    }
prop1_obj3 val1
prop2_obj3 val2_1,val2_2,val2_3,val2_4
prop3_obj3 [object Object]
{ prop1: 'Val1', prop2: 'val2', prop4: 'val4' }
{
  value: 'val4',
  writable: true,
  enumerable: true,
  configurable: false
}
true
{
  prop1: {
    value: 'Val1',
    writable: true,
    enumerable: true,
    configurable: true
  },
  prop2: {
    value: 'val2',
    writable: false,
    enumerable: true,
    configurable: false
  },
  prop3: {
    value: 'val3',
    writable: true,
    enumerable: false,
    configurable: true
  },
  prop4: {
    value: 'val4',
    writable: true,
    enumerable: true,
    configurable: false
  }
}
{
  value: 'val3',
  writable: true,
  enumerable: false,
  configurable: true
}
false
[ [ 'prop1', 'Val1' ], [ 'prop2', 'val2' ], [ 'prop4', 'val4' ] ]


prop1: Val1
prop2: val2
prop4: val4
prop1Val1
prop2val2
prop4val4
{
  prop1: 'val1',
  prop2: 'val2',
  prop3: { prop3_1: 'val3_1', prop3_2: 'val3_2' },
  prop4: [ 45, 656, 76 ]
}


{
  prop1: 'val1',
  prop2: 'val2',
  prop3: { prop3_1: 'val3_1', prop3_2: 'val3_2' },
  prop4: [ 45, 656, 76 ]
}


{
  prop1: 'val1',
  prop2: 'val2',
  prop3: { prop3_1: 'val3_1', prop3_2: 'val3_2' },
  prop4: [ 45, 656, 76 ]
}
[ 'prop1', 'prop2' ]
[ '0', '1', '2', '3', '4', '5', '6', 'length' ]
prop1: val1
prop2: val2
[ '0', '1', '2', '3', 'length' ]
[ Symbol($%#T%$), Symbol(4#TY^Y^%Y&^U&*I&*I) ]
Symbol(4#TY^Y^%Y&^U&*I&*I)
{
  prop1: 'val1',
  prop2: 'val2',
  [Symbol($%#T%$)]: 'localSymbol',
  [Symbol(4#TY^Y^%Y&^U&*I&*I)]: 'globalSymbol'
}
2
[ 'prop1', 'prop2' ]


[ 'val1', 'val2' ]
[ '0', '1', '2', '3' ]
[ '3', '4', '6', '8' ]


[ 'w', 'i', 'u', 'e' ]
[
  '0', '1', '2',
  '3', '4', '5',
  '6'
]


[
  'w', 'e', 'l',
  'c', 'o', 'm',
  'e'
]
true
true
false
false
true
true
false
true
[Function: Array]
[Function: Object]
tree { tree_name: 'oak' }
[Function: tree]
tree_name_obj.constructor is function tree(tree_name){
    this.tree_name = tree_name;
}



obj16 {
  obj16_prop1: 'val1',
  obj16_prop2: [ 'val2_1', 'val2_2', 'val2_3', 'val2_4' ]
}
{
  obj16_prop3_1: 'val3_1',
  obj16_prop3_2: [ 'val3_2_1', 'val3_2_2', 'val3_2_3' ]
}


[Done] exited with code=0 in 0.137 seconds






*/

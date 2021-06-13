var obj1 = {
    prop1:"val1",
    _prop2:"val2",
    "prop3":"val3",
    prop4:["val4_1","val4_2","val4_3"],
    $prop5:"val5",
    $prop6$:[
        "val6_1",
        {"val6_2_prop1":["val6_2_prop1_val1","val6_2_prop1_val2"]},
        52,
        ["val6_3","val6_4","val6_5","val6_6"],
        {"val6_4":{
            "val6_4_prop1":"val6_4_value1",
            "val6_4_prop2":["val6_4_value2_1","val6_4_value2_2"]
        }}
    ],
    _prop7:{
        "prop7_1":"val7_1",
        prop7_2:"val7_2",
        "$prop7_3":["val7_3_1","val7_3_2",
             {"val7_3_3_prop1":"val7_3_3_prop1_val1",
              val7_3_3_prop2: ["val7_3_3_prop2_1",{"val7_3_3_prop2_1_1":"val7_3_3_prop2_1_1_val_1"}]
             }
         ]
    },
    get prop2(){
        return this._prop2;
    },
    set prop2(new_prop2){
        this._prop2 = new_prop2;
    },
    get intro1(){
        return "hello";
    },
    intro2(){
        return "wao";
    },
    intro3(para1){return para1 + 10},
    intro4: para1_2 => {return para1_2/2},
    intro5: para1_3 => para1_3 *10,
    intro6: () => "welcome",
    intro7: (para1_4,para1_5) => para1_4 - para1_5,
    intro8: (para1_6,para1_7) => {
        if(para1_6 == para1_7){
            return "match is equal"
        } else if(para1_6 >= para1_7){
            return "para1_6 is greater than para1_7";
        } else {
            return "para1_7 is the greatest numeric value";
        }
    },
    intro9: (para1_8,para1_9,para1_10)=> {
        return {
            intro9_prop1 : para1_8,
            intro9_prop2 : para1_9,
            intro9_prop3 : para1_10
        }
    },
    intro10(){
        console.log( this.prop1 +" is prop1");
        return "\n";
    },
   intro11(para1_11){
        function sum(){
            function subtract(){
                function multiply(){
                    function devide(){
                        console.log(para1_11 - 2);
                        return  "\n";
                    }
                    return devide() *100;
                }
                return multiply() - 50;
            }
            return subtract() + 300;
        }
        return `Calculate result is ${sum()} \n`;
    },

    [Symbol("$%#$T$%Y^%U&U&")]: "localSymbol",
    [Symbol("4554tu6756u76u76")]: "globalSymbol"
}
const {prop1,_prop2,prop3,prop4,$prop5,$prop6$,_prop7} = obj1;
console.log(prop1);
console.log(_prop2);
console.log(prop3);
console.log(prop4[1]);
console.log($prop5);
console.log($prop6$[0]);
console.log($prop6$[1]["val6_2_prop1"]);
console.log($prop6$[1]["val6_2_prop1"][0]);
console.log($prop6$[1].val6_2_prop1[1]);
console.log(_prop7);
console.log(_prop7.prop7_1);
console.log(_prop7["prop7_2"]);
console.log(_prop7["$prop7_3"]);
console.log(_prop7.$prop7_3[1]);
console.log(_prop7.$prop7_3[2]["val7_3_3_prop1"]);
console.log(_prop7.$prop7_3[2]["val7_3_3_prop2"][0]);
console.log(_prop7.$prop7_3[2]["val7_3_3_prop2"][1].val7_3_3_prop2_1_1);
console.log(obj1.prop2);
console.log(obj1.prop2 = "val2_0");
console.log(obj1.intro1);
console.log(obj1.intro2());
console.log(obj1.intro3(60));
console.log(obj1.intro4(8));
console.log(obj1.intro5(10));
console.log(obj1.intro6());
console.log(obj1.intro7(50,20));
console.log(obj1.intro8(100,100));
console.log(obj1.intro8(100,80));
console.log(obj1.intro8(60,80));
console.log(obj1.intro9("intro9_val1","intro9_val2","intro9_val3"));
console.log(obj1.intro10());
console.log(obj1.intro11(193));
console.log(Object.getOwnPropertySymbols(obj1))
console.log(Object.getOwnPropertyNames(obj1));
console.log(Object.getOwnPropertyDescriptors(obj1));
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.getPrototypeOf(obj1));
console.log(Object.isExtensible(obj1));
console.log(Object.isFrozen(obj1));
console.log(Object.isSealed(obj1));
console.log(Object.constructor);


/*

output 


val1
val2
val3
val4_2
val5
val6_1
[ 'val6_2_prop1_val1', 'val6_2_prop1_val2' ]
val6_2_prop1_val1
val6_2_prop1_val2
{
  prop7_1: 'val7_1',
  prop7_2: 'val7_2',
  '$prop7_3': [
    'val7_3_1',
    'val7_3_2',
    { val7_3_3_prop1: 'val7_3_3_prop1_val1', val7_3_3_prop2: [Array] }
  ]
}
val7_1
val7_2
[
  'val7_3_1',
  'val7_3_2',
  {
    val7_3_3_prop1: 'val7_3_3_prop1_val1',
    val7_3_3_prop2: [ 'val7_3_3_prop2_1', [Object] ]
  }
]
val7_3_2
val7_3_3_prop1_val1
val7_3_3_prop2_1
val7_3_3_prop2_1_1_val_1
val2
val2_0
hello
wao
70
4
100
welcome
30
match is equal
para1_6 is greater than para1_7
para1_7 is the greatest numeric value
{
  intro9_prop1: 'intro9_val1',
  intro9_prop2: 'intro9_val2',
  intro9_prop3: 'intro9_val3'
}
val1 is prop1


191
Calculate result is 250 
[ Symbol($%#$T$%Y^%U&U&), Symbol(4554tu6756u76u76) ]
[
  'prop1',   '_prop2', 'prop3',
  'prop4',   '$prop5', '$prop6$',
  '_prop7',  'prop2',  'intro1',
  'intro2',  'intro3', 'intro4',
  'intro5',  'intro6', 'intro7',
  'intro8',  'intro9', 'intro10',
  'intro11'
]
{
  prop1: {
    value: 'val1',
    writable: true,
    enumerable: true,
    configurable: true
  },
  _prop2: {
    value: 'val2_0',
    writable: true,
    enumerable: true,
    configurable: true
  },
  prop3: {
    value: 'val3',
    writable: true,
    enumerable: true,
    configurable: true
  },
  prop4: {
    value: [ 'val4_1', 'val4_2', 'val4_3' ],
    writable: true,
    enumerable: true,
    configurable: true
  },
  '$prop5': {
    value: 'val5',
    writable: true,
    enumerable: true,
    configurable: true
  },
  '$prop6$': {
    value: [ 'val6_1', [Object], 52, [Array], [Object] ],
    writable: true,
    enumerable: true,
    configurable: true
  },
  _prop7: {
    value: { prop7_1: 'val7_1', prop7_2: 'val7_2', '$prop7_3': [Array] },
    writable: true,
    enumerable: true,
    configurable: true
  },
  prop2: {
    get: [Function: get prop2],
    set: [Function: set prop2],
    enumerable: true,
    configurable: true
  },
  intro1: {
    get: [Function: get intro1],
    set: undefined,
    enumerable: true,
    configurable: true
  },
  intro2: {
    value: [Function: intro2],
    writable: true,
    enumerable: true,
    configurable: true
  },
  intro3: {
    value: [Function: intro3],
    writable: true,
    enumerable: true,
    configurable: true
  },
  intro4: {
    value: [Function: intro4],
    writable: true,
    enumerable: true,
    configurable: true
  },
  intro5: {
    value: [Function: intro5],
    writable: true,
    enumerable: true,
    configurable: true
  },
  intro6: {
    value: [Function: intro6],
    writable: true,
    enumerable: true,
    configurable: true
  },
  intro7: {
    value: [Function: intro7],
    writable: true,
    enumerable: true,
    configurable: true
  },
  intro8: {
    value: [Function: intro8],
    writable: true,
    enumerable: true,
    configurable: true
  },
  intro9: {
    value: [Function: intro9],
    writable: true,
    enumerable: true,
    configurable: true
  },
  intro10: {
    value: [Function: intro10],
    writable: true,
    enumerable: true,
    configurable: true
  },
  intro11: {
    value: [Function: intro11],
    writable: true,
    enumerable: true,
    configurable: true
  },
  [Symbol($%#$T$%Y^%U&U&)]: {
    value: 'localSymbol',
    writable: true,
    enumerable: true,
    configurable: true
  },
  [Symbol(4554tu6756u76u76)]: {
    value: 'globalSymbol',
    writable: true,
    enumerable: true,
    configurable: true
  }
}
[
  'prop1',   '_prop2', 'prop3',
  'prop4',   '$prop5', '$prop6$',
  '_prop7',  'prop2',  'intro1',
  'intro2',  'intro3', 'intro4',
  'intro5',  'intro6', 'intro7',
  'intro8',  'intro9', 'intro10',
  'intro11'
]
[
  'val1',
  'val2_0',
  'val3',
  [ 'val4_1', 'val4_2', 'val4_3' ],
  'val5',
  [
    'val6_1',
    { val6_2_prop1: [Array] },
    52,
    [ 'val6_3', 'val6_4', 'val6_5', 'val6_6' ],
    { val6_4: [Object] }
  ],
  {
    prop7_1: 'val7_1',
    prop7_2: 'val7_2',
    '$prop7_3': [ 'val7_3_1', 'val7_3_2', [Object] ]
  },
  'val2_0',
  'hello',
  [Function: intro2],
  [Function: intro3],
  [Function: intro4],
  [Function: intro5],
  [Function: intro6],
  [Function: intro7],
  [Function: intro8],
  [Function: intro9],
  [Function: intro10],
  [Function: intro11]
]
[Object: null prototype] {}
true
false
false
[Function: Function]
[Done] exited with code=0 in 0.139 seconds

*/

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
    }
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



[Done] exited with code=0 in 0.139 seconds

*/

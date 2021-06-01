var arr1 = ["el1","el2","el3","el4"];
var arr2 = ["el1","el2","el3","el4"];
var arr3 = ["el1","el2","el3","el4"];

var arr_concat = arr1.concat(arr2,arr3);
var arr_push = arr2.push("er");
var $arr_pop = arr3.pop();
var _arr_unshift = arr2.unshift("er");
var $arr_shift$_ = arr1.shift();
var arr_constructor = arr3.constructor;
var arr_length = arr2.length;
var arr_reverse = arr1.reverse();
var arr_sort = arr3.sort();
var arr_delete   =  delete arr1[2];
var arr_delete2 = delete arr2["el3"];
delete arr3[3];
var arr_call_el = arr3[3];
var arr_call_el2 = arr2["el4"];
var arr_call_last_el = arr3[arr3.length-1];
var arr_toString = arr1.toString();
var arr_join = arr3.join("*");
var arr_join2 = arr2.join();
var arr_fill = arr1.fill(" and ");
var arr_fill2 = arr1.fill(" and ", 3,4);
var arr_includes = arr2.includes("el2");
var arr_includes2 = arr2.includes("el3",2);
var arr_indexOf = arr1.indexOf("el2");
var arr_indexOf2 = arr2.indexOf("el3",2);
var arr_lastIndexOf = arr3.lastIndexOf("el2");
var arr_lastIndexOf2 = arr2.lastIndexOf("el2",2);
var arr_valueOf = arr3.valueOf();
var arr_isArray = Array.isArray(arr2);
var arr_keys = arr3.keys();
var arr_slice = arr3.slice(2);
var arr_slice2 = arr2.slice(2,4);
var arr_splice_remove = arr3.splice(1,1);
var arr_splice_remove_add = arr3.splice(1,1,"hello");
var arr_max = Math.max.apply(null,arr1);
var arr_min = Math.min.apply(null,arr2);


var arr4 = ["el1","el2","el3","el4"];
arr4.forEach(foreach_func);
function foreach_func(item,index){
    document.getElementById("block1").innerHTML += index + ". " + item + "<br>";
}

var arr5 = [456,787,9898,464,67];
arr5.forEach(foreach_func2);
function foreach_func2(item2,index2,ar2){
    ar2[index2] = item2 * 100;
}
console.log(arr5);
document.getElementById("block2").innerHTML = arr5;


var sum = 0 ;
arr5.forEach(foreach_func3);
function foreach_func3(item3){
    sum += item3;
    document.getElementById("block3").innerHTML = sum;
}

var arr6 = ["el1","el2","el3"];
var text = "";
for(const i = 0; i< arr6.length ; i++){
    text += `<b>${i}:${arr6[i]}</b><br>`;
    document.getElementById("block4").innerHTML = text;
    console.log(text);
    console.log(i + ": " + arr6[i]);
}

var text2 = "";
for(let i2 = arr6.length-1; i2>=0; i2--){
    text2 += `<b>${i2}:${arr6[i2]}</b><br>`;
    document.getElementById("block5").innerHTML = text2;
    console.log(text2);
    console.log(i2 + ": " + arr6[i2]);
}


var turn_arr_into_AIO = arr6.entries();
for(x of turn_arr_into_AIO){
    console.log(x);
    document.getElementById("block6").innerHTML += x + "<br>";
}

Array.prototype.uppercase = function(){
    for(let i3 = 0 ; i3<this.length ; i3++){
        this[i3] = this[i3].toUpperCase();
    }
}
Array.prototype.substring = function(){
    for(let i4 = 0 ; i4<this.length ; i4++){
        this[i4] = this[i4].substring(2,4);
    }
}

arr6.uppercase();
arr6.substring();
console.log(arr6);


//make an array from a string
console.logh(Array.from("welcome"));
//make an array from a set
var set = new Set(["sf","rt","sf","ty"]);
console.log(Array.from(set));
//make an array from a map
const map = new Map([[34,65],[676,89],[89,99]]);
console.log(Array.from(map));
//make an array from a map and output value and key
const mapper = new Map([["prop1","val1"],["prop2","val2"]]);
console.log(Array.from(mapper.keys()));
console.log(Array.from(mapper.values()));
//make an array from an arrow function and output manipulate elements
console.log(Array.from([3,6,8], x=> x+x));
//make an array from an arrow function using length property and output index value
console.log(Array.from({length:8},(v,i)=> i));
//make an array from an arrow function using length property and output the same value
console.log(Array.from({length:6},(v,i)=>"^o^"));


var arr7 = [35,65,76];
arr7.map(map_func)
function map_func(map_item){
    return map_item *100;
}
console.log(arr7);


var ages = [35,67,87,98];
var ages_check = ages.every(check_func);
function check_func(age){
    return age >= 40;
}
console.log(ages_check);
var ages = [35,67,87,98];
var ages_check = ages.some(check_func);
function check_func(age){
    return age >= 40;
}
console.log(ages_check);
var ages = [35,67,87,98];
var ages_check = ages.find(check_func);
function check_func(age){
    return age >= 40;
}
console.log(ages_check);
var ages = [35,67,87,98];
var ages_check = ages.findIndex(check_func);
function check_func(age){
    return age >= 40;
}
console.log(ages_check);
var ages = [35,67,87,98];
var ages_check = ages.filter(check_func);
function check_func(age){
    return age >= 40;
}
console.log(ages_check);


/*<input id="age_to_check" type="number" value="40">
<button onclick="check_func_result()">click to check age</button>*/

var ages2 = [55,67,35,57,13,76,89];
function check_func(age){
    return age <= document.getElementById("age_to_check").value;
}
function check_func_result(){
   document.getElementById("block2").innerHTML = ages2.every(check_func);
}
var ages3 = [55,67,35,57,13,76,89];
function check_func(age2){
    return age2 <= document.getElementById("age_to_check").value;
}
function check_func_result(){
   document.getElementById("block2").innerHTML = ages3.some(check_func);
}
var ages4 = [55,67,35,57,13,76,89];
function check_func(age3){
    return age3 <= document.getElementById("age_to_check").value;
}
function check_func_result(){
   document.getElementById("block2").innerHTML = ages4.find(check_func);
}
var ages5 = [55,67,35,57,13,76,89];
function check_func(age4){
    return age4 <= document.getElementById("age_to_check").value;
}
function check_func_result(){
   document.getElementById("block2").innerHTML = ages5.findIndex(check_func);
}
var ages6 = [55,67,35,57,13,76,89];
function check_func(age5){
    return age5 <= document.getElementById("age_to_check").value;
}
function check_func_result(){
   document.getElementById("block2").innerHTML = ages6.filter(check_func);
}



//<button onclick="reduce_func_result()">click to reduce num1</button>

var num1 = [200,45,76,70];
let num_reduce = num1.reduce(reduce_func);
function reduce_func(total,num){
    return total-num;
}
console.log(num_reduce);

var num2 = [200,45,76,70];
let num_reduce2 = num2.reduceRight(reduceRight_func2);
function reduceRight_func2(total,num){
    return total-num;
}
console.log(num_reduce2);

var num3 = [200,45,76,70];
function reduce_func3(total,num){
    return total + Math.round(num);
}
function reduce_func_result(){
    document.getElementById("block4").innerHTML = num3.reduce(reduce_func3,0);
}


var num4 = [200,45,76,70];
function reduceRight_func4(total,num){
    return total - num;
}
function reduce_func_result(){
    document.getElementById("block4").innerHTML = num4.reduceRight(reduceRight_func3,0);
}


var arr8 = [45,67,78,89,46,23,54,38,35,27,19];
console.log(Math.max.apply(null,arr8));
console.log(Math.min.apply(arr8));
const arr_sorting = arr8.sort(function(a,b){return a-b});
console.log(arr_sorting);
console.log(arr_sorting[0]);
console.log(arr_sorting[arr_sorting.length-1]);
const arr_sorting2 = arr8.sort(function(a,b){return b-a});
console.log(arr_sorting);
console.log(arr_sorting[0]);
console.log(arr_sorting[arr_sorting.length-1]);

//<button onclick="sorting_func()">click to sorting array object</button>

var electro = [
    {type: "washer",year:2020},
    {type: "dryer", year: 2018},
    {type: "microwave", year: 2021},
    {type:"refrigerator",year:2016}
];
sorting_func_result();

function sorting_func(){
    electro.sort(function(c,d){return c.year - d.year});
    sorting_func_result();
}
function sorting_func_result(){
    document.getElementById("block6").innerHTML = `
    
    ${electro[0].type} ${electro[0].year}<br>
    ${electro[1].type} ${electro[1].year}<br>
    ${electro[2].type} ${electro[2].year}<br>
    ${electro[3].type} ${electro[3].year}<br>
    
    `;
}


var electro2 = [
    {type: "washer",year:2020},
    {type: "dryer", year: 2018},
    {type: "microwave", year: 2021},
    {type:"refrigerator",year:2016}
];
sorting_func_result();

function sorting_func(){
    electro.sort(function(c,d){
        var x = c.type.toLowerCase();
        var y = d.type.toLowerCase();
        if(x<y){return -1};
        if(x>y){return 1};
        return 0;
    });
    sorting_func_result();
}
function sorting_func_result(){
    document.getElementById("block6").innerHTML = `
    
    ${electro[0].type} ${electro[0].year}<br>
    ${electro[1].type} ${electro[1].year}<br>
    ${electro[2].type} ${electro[2].year}<br>
    ${electro[3].type} ${electro[3].year}<br>
    
    `;
}



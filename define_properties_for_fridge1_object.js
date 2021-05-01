/*

First, I define an object called fridge1 with two propeties :  name and year that has values: big size , 2020
Next, I define some new properties for this fridge1 object ,  I use the Object.defineProperties to make these properties have some new condition like:
enumerable: true  means that this property can work with for loop in object
writable and configurable true  means that this property can change its value or rewrite value or  delete or copy or adjust and so on

*/


var fridge1 = {
    name: "big size",
    year: 2020
};

// I use Object.defineProperties  to define many properties
Object.defineProperties(fridge1,{
    brand: {
        value: ["sony","parasonic"],
        enumerable:true,
        configurable:true,
        writable: true
    },
    condition: {
        value: "New",
        enumerable: true,
        configurable: false,
        writable: false
    }
});


// this time I use Object.defineProperty  to define just one prorpety
Object.defineProperty(fridge1,"marketplace",{
    value: "Walmart",
    enumerable:true,
    configurable:false,
    writable:false
})


// syntax to ouput the result
console.log("Your fridge information is : \n")
for (let i in fridge1){
    console.log(` ${i} : ${fridge1[i]} \n`);
}


//next is some practise to concat two array in the property value of an object  and show the constructor of this array

//this syntax  make my object  to be easier to call the propeties inside it
var {name,year,brand,condition,marketplace} = fridge1;


var property_arrayvalue_constructor_of_object = brand.constructor;
console.log(property_arrayvalue_constructor_of_object + "\n");


var add_info_into_property_arrayvalue_of_object = brand.concat(["samsung","toshiba"]);
console.log(add_info_into_property_arrayvalue_of_object + "\n")


// output
/* 

Your fridge information is : 

 name : big size 

 year : 2020 

 brand : sony,parasonic 

 condition : New 

 marketplace : Walmart 

function Array() { [native code] }

sony,parasonic,samsung,toshiba


[Done] exited with code=0 in 0.162 seconds





*/

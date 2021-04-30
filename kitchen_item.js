var total_kitchen_item_object = ["kitchen_item","kitchen_item2","kitchen_item3"];


const kitchen_item = {
    type: ["spatula","spoon","chopstick","knife","fork"],
    function_of_item: {
        spatula:["cook","stir","mix"],
        spoon: "eat",
        chopstick: ["eat noodle","cook"],
        knife: ["cut meat","cut vegetable","slice meat","peel fruit"],
        fork: ["eat noodle","eat food"]
    },
    advertisement(item){
        var adver_function = "";
        switch(item){
                case type[0]:
                    adver_function = function_of_item.spatula;
                    console.log(`This is a ${item} and it use for ${adver_function}`);
                    break;
                case  type[1]:
                    adver_function = function_of_item.spoon;
                    console.log(`This is a ${item} and it use for ${adver_function}`);
                    break;
                case type[2]:
                    adver_function = function_of_item.chopstick;
                    console.log(`This is a ${item} and it use for ${adver_function}`);
                    break;
                case type[3]:
                    adver_function = function_of_item.knife;
                    console.log(`This is a ${item} and it use for ${adver_function}`);
                    break;
                case type[4]:
                    adver_function = function_of_item.fork;
                    console.log(`This is a ${item} and it use for ${adver_function}`);
                    break;
                default:
                    console.log("Error");
                    break;
        }
        
        
        
    }
};

const {type,function_of_item,advertisement} = kitchen_item;
console.log(advertisement("fork"));


let kitchen_item2 = (item1,item2,item3) => {
    return {
        type1 : item1,
        type2 : item2,
        type3 : item3
    }
}
console.log(kitchen_item2("microwave","fridge","rice cooker"));



let kitchen_item3 = {
    _cooking_item1: "stove",
    _cooking_item2: "frying pan",
    _cooking_item3: "pot",
    get new_cooking_item(){
        return this._cooking_item2;
    },
    set new_cooking_item_set(new_cooking_item2){
         this._cooking_item2 = new_cooking_item2;
    }
}
console.log(kitchen_item3.new_cooking_item_set = "oven");


let kitchen_item4 = {
    _cooking_item4: "rice_cooker",
    _cooking_item5: "blender",
    get for_loop_through_this_object(){
        for(let key1 in kitchen_item4){
            console.log(`${key1}: ${kitchen_item4[key1]}`);
            
        }
    }
}
const {_cooking_item4,_cooking_item5,for_loop_through_this_object} = kitchen_item4;
 //console.log(for_loop_through_this_object);

 delete kitchen_item4.for_loop_throught_this_object();

total_kitchen_item_object.push("kitchen_item4");
total_kitchen_item_object.pop("kitchen_item4");
total_kitchen_item_object.push("kitchen_item4");

total_kitchen_item_object.unshift("kitchen_item4");
total_kitchen_item_object.shift("kitchen_item4");
console.log(total_kitchen_item_object);


var assign_kitchen_item3_and_kitchen_item4 = Object.assign(kitchen_item3,kitchen_item4);
console.log(assign_kitchen_item3_and_kitchen_item4);



var _cooking_item6 = "cutting board",_cooking_item7 = "can opener",
function_for_these_item = {
    cutting_board:"cutting raw material",
    can_opener: "open the can"
}

var kitchen_item5 = {_cooking_item6,_cooking_item7,function_for_these_item};
console.log(kitchen_item5);

var assign_kitchen_item4_and_kitchen_item5 = Object.assign(kitchen_item4,kitchen_item5);
console.log(assign_kitchen_item4_and_kitchen_item5);

var big_assign = Object.assign(assign_kitchen_item3_and_kitchen_item4,assign_kitchen_item4_and_kitchen_item5);

console.log(big_assign);



function for_loop_through_array(){
    var text= "";
    for(let i = 0 ; i < total_kitchen_item_object.length ; i++){
        text = `<b>${text} ${i}: ${total_kitchen_item_object[i]}</b><br>`;
    }
    document.getElementById('for_loop_result').innerHTML = text;
}


function for_loop_through_object(){
    var text2= "";
    for(let i2 in big_assign){
        text2 = `<b>${text2} ${i2}: ${big_assign[i2]}</b><br>`;
    }
    document.getElementById('for_loop_result2').innerHTML = text2;
}




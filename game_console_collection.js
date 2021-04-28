//array  specified the type of game console
var type = ["Playstation","PC","xbox","Wii"];


//object video_game
let video_game = {



    //child item object that include item of each game console
    item: {
        playstation:["Cyberpunk 2077","Marvel’s Spider-Man: Miles Morales","Grand Theft Auto V"],
        pc: ["Total war three kingdoms", "Fallout4"],
        xbox: ["Product Title Crash Bandicoot 4", "Red Dead Redemption" , "Mortal Kombat 11"]
    },



    //property begin with underscore keyword '  _  '  to match the set and get method
    _price: "$10-$30",
    _year: ["2021","2020","2019"],




    //define the set keyword to set new value for _price  and  _year
    set price_set(new_price){
        this._price = new_price;
    },
    set year_set(new_year){
        this._year = new_year;
    },




    /* defind function with get keyword to call the function in an easier way
     which means we can avoid the opening and ending parenthesis ()
     */

    get introduction_part(){
        console.log(`Welcome to ${year_set[0]} gaming collection`);

        //delete the 'undefine' keyword in output console
        return "";
    }

};



//set new value for price and year of object video game
price_set = "$15-$35";
year_set = ["2020","2019","2018"];




//define object property equal to the name of object to call the property in an easy way
const {item,_price,_year,output_with_for_loop,introduction_part} = video_game;



//output call  the introduction_part function
console.log(introduction_part);


//output call the content
//use \n to creat  a  line break to make the output readable;


console.log(`
\n   This year Playstation will sell new game like : ${item.playstation}
\n   Pc will present : ${item.pc}
\n   Xbox is going to be : ${item.xbox}
\n   The important thing is the price will in the range ${price_set}
\n
`

)




/* create new object  */

var create_new_object_func = (game_console1,game_console2,game_console3,game_console4) => {

    //condition  to create new object 
    if( (game_console1 === type[0]) && (game_console2 === type[1])
     && (game_console3 === type[2]) && (game_console4 === type[3]))
     {

        //make every property in object game_console_type equal to the array type that had declared in the beginning of this program;
         let sony_game_console = type[0];
         let computer_game_console = type[1];
         let microsoft_game_console = type[2];
         let nintendo_game_console = type[3];

         //factory function  game_console_brand
         let game_console_brand = (brand1 = type[0],brand2= type[1],brand3= type[2],brand4= type[3]) => {
             return {
                 playstation : brand1,
                 pc : brand2,
                 xbox: brand3,
                 wii: brand4


                }

         }

         //syntax to create new object   game_console_type
         var game_console_type = {sony_game_console,computer_game_console,microsoft_game_console,nintendo_game_console,game_console_brand};
         
         
         //output the object  to know if there is some error in this object or not
         console.log(game_console_type);
         console.log(game_console_type.game_console_brand());


     //the output when there is no matching condition which means the program can not create object game_console_type
     } else {
         console.log("Sorry, there is some error in the effort to release your result.So we can not create a new object for you");
     };

     return "";
}


//call the function
create_new_object_func('Playstation','PC','xbox','Wii');

//use \n to creat  a  line break to make the output readable;
console.log('\n')





//create new type array of game console 
/*use unshift to add an element to the beginning of the array,  shift to remove it
use push to add an element to the end of the array, pop to remove it 
*/



type.unshift('Virtual reality');
type.push('Nintendo');
console.log(type + "\n");

//create new function to loop through the array and object
function just_for_loop_and_create_object(){

    //condition to use for loop in array
    type.length >=5 ? type.pop() + type.shift() + "\n": type.reverse();


    //use for loop in array to output array value
    for (var i = 0 ; i < type.length ; i++ ){
        console.log("Type of game console: " + type[i] + "\n");
    };


    //condition to creat object  game_console_type2
    if (type.length >=3){
        
        //make every property in object game_console_type2 equal to the array type that had declared in the beginning of this program;
        let sony_game_console2 = type[0];
        let computer_game_console2 = type[1];
        let microsoft_game_console2 = type[2];
        let nintendo_game_console2 = type[3];
         //syntax to create new object   game_console_type2
        var game_console_type2 = {
            sony_game_console2,computer_game_console2,microsoft_game_console2,nintendo_game_console2
        }
        
        
        //use for loop in object to ouput the object value
        for(let key2 in game_console_type2){
            console.log(`${key2}:${game_console_type2[key2]}`);
        }


    }
}

//call the function just_for_loop_and_create_object
just_for_loop_and_create_object();





/* output 

Welcome to 2020 gaming collection



   This year Playstation will sell new game like : Cyberpunk 2077,Marvel’s Spider-Man: Miles Morales,Grand Theft Auto V

   Pc will present : Total war three kingdoms,Fallout4

   Xbox is going to be : Product Title Crash Bandicoot 4,Red Dead Redemption,Mortal Kombat 11

   The important thing is the price will in the range $15-$35



{
  sony_game_console: 'Playstation',
  computer_game_console: 'PC',
  microsoft_game_console: 'xbox',
  nintendo_game_console: 'Wii',
  game_console_brand: [Function: game_console_brand]
}
{ playstation: 'Playstation', pc: 'PC', xbox: 'xbox', wii: 'Wii' }


Virtual reality,Playstation,PC,xbox,Wii,Nintendo

Type of game console: Playstation

Type of game console: PC

Type of game console: xbox

Type of game console: Wii

sony_game_console2:Playstation
computer_game_console2:PC
microsoft_game_console2:xbox
nintendo_game_console2:Wii

[Done] exited with code=0 in 0.136 seconds



*/

var entertainment = {
    type0: ["cartoon","movie","drama","comedy"],

    show: {
        cartoon: ["orgy","doreamon","great teacher onizusa","mermaid"],
        movie: ["click","Hancock","Fast & Furious","The god father","the Matric","The day after tomorrow"],
        channel: ["cartoon network","animax","amazon prime","disney+"],
        drama: ["The Boys","Training Day","American horror story","House","Hanibal","Hunter"]
    },

    _episode: "1-50",
    year:"1900-2021",
    get episode_get(){
        return this._episode;
    },
    set episode_set(new_episode_prop){
        this._episode = new_episode_prop;
    },
    introduction1(para1){
         console.log(`Entertainment Object for Study with many type of Entertainment for recreation like : ${type0} \n
         \n`);

         switch(para1){
             case type0[0]:
                 console.log(`Welcome to our Program called: Entertainment Object \n 
                 We have ${para1} propeties that contains a lot of cartoon like : ${show.cartoon} \n`);
                 break;
             case type0[1]:
                    console.log(`Welcome to our Program called: Entertainment Object \n 
                    We have ${para1} propeties that contains a lot of movie like : ${show.movie} \n`);
                    break;
            case type0[2]:
                console.log(`Welcome to our Program called: Entertainment Object \n 
                    We have ${para1} propeties that contains a lot of drama like : ${show.drama} \n`);
                    break;
            default:
                console.log(`Welcome to our Program called: Entertainment Object \n `);
                break;
         };
         return " \n";
    },
    introduction2: (para2) => {
        console.log(`Entertainment Object for Study with many show of Entertainment for recreation.\n`);

        if (para2 === show["cartoon"][0]){
                console.log(`Welcome to our Program called: Entertainment Object \n 
                    We have ${para2} show that is a  ${type0[0]} \n`);
                    
        } else if (para2 === show["movie"][1]){
            console.log(`Welcome to our Program called: Entertainment Object \n 
                    We have ${para2} show that is a  ${type0[1]} \n`);
                    
        } else if (para2 == show["drama"][5]){
            console.log(`Welcome to our Program called: Entertainment Object \n 
                    We have ${para2} show that is a  ${type0[2]} \n`);
                    
        } else {
            console.log(`Welcome to our Program called: Entertainment Object \n 
                    Sorry !!! Your para2 is not in our Program,Please input into parameter of this function another value \n`);
                    
        }

        return  "\n";
    }
}

//syntax to make properties in entertainment object to be easier to call
const {type0,show,_episode,introduction1,introduction2} = entertainment;



//create object entertainment2 and defineProperty for them in two way


//use defineProperty to define one properties
var entertainment2 = {};
Object.defineProperty(entertainment2,"price",{
    value: "$1-$10 each episode",
    enumerable:true,
    configurable:true,
    writable:true
});


// use defineProperties to define two or more properties
Object.defineProperties(entertainment2,{
    companies:{
        value: [
            "Disney",
            "Marvel",
            "warner bros",
            "20th Century Fox",
            "Paramount Pictures.",
            "Lionsgate Films"
        ],

        enumerable:true,
        configurable:false,
        writable:false

    } ,



    Director_Disney:{
        value:["Jennifer Dubin","Alan Wagner","Anne Sweeney","Rich Ross","Gary Marsh "],
        enumerable:true,
        configurable:false,
        writable:false
    },



    Director_Warner_Bros: {
        value:["TOM ASCHEIM","CAROLYN BLACKWOOD","ROBERT BLAIR","RICHARD BRENER","PAUL BROUCEK"],
        enumerable:true,
        configurable:true,
        writable:true
    }
});






//output show up object with for in loop

console.log("Basic Loop through object : \n");

console.log("Entertainment1 object using for in loop: \n");
for(let i in entertainment){
    console.log(`${i}: ${entertainment[i]}`);
}



console.log("\n Entertainment1 Object full detail \n");
console.log(entertainment );

//call set/get/function in object entertainment
console.log(`\n Entertainment object property introduction 1 : \n `);
console.log(`${introduction1("cartoon")} \n`);



entertainment.episode_set = "1-100 ep";
console.log("\n Entertainment object after set new value for episode \n" + entertainment.episode_get);


console.log(`\n Entertainment object property introduction 2 : \n `);
console.log(`${introduction2("orgy")} \n`);




//output entertainment2 object with for in loop
console.log("\n Entertainment2 object: \n");

for(let i2 in entertainment2){
    console.log(`${i2}: ${entertainment2[i2]}`);
}







//turn object properties into array and output the result and the result using two types of forEach loop
console.log("\n Turn object properties into array \n");
var turn_object_prop_into_array = Object.entries(entertainment2);
console.log(turn_object_prop_into_array);
console.log("\n");




//type1 for each loop
console.log("\n Type 1 for each loop \n")
for(const [key,value] of Object.entries(entertainment2)){
    console.log(`${key} : ${value}`);
}

console.log("\n");




//type2 for each loop
console.log("\n Type 2 for each loop \n")
Object.entries(entertainment2).forEach(([key,value]) => console.log(`${key} : ${value}`));
console.log("\n");




var entertainment3 = Object.create({});
entertainment3.Employees = {
    Wall_Disney: "32 000 workers",
    Warner_Bros: "8000 workers",
    _20th_Century_Fox: "2300 workers",
    Paramount_Pictures:"3000 workers",
    Lionsgate_Films:"3500 workers"

};

entertainment3.Product = "Film,cartoon,sitcom,drama,reality show,gameshow,..etc..";




//out put Entertainment3 object using for in loop
console.log("\n Entertainment3 Object using for in loop: \n");

for(let i3 in entertainment3){
    console.log(`${i3}: ${entertainment3[i3]}`);
}

console.log("\n Entertainment3 Object full detail \n");
console.log(entertainment3);



//turn Entertainment3 object's properties into array and output with 2 types of forEach loop
console.log("\n Turn Entertainment3 object's properties into array \n")
var turn_object_prop_into_array_2 = Object.entries(entertainment3);
console.log(turn_object_prop_into_array_2);

console.log("\n Output Entertainment3 object's array with two type of forEach loop \n");


console.log(" Type1 forEach loop \n");
Object.entries(entertainment3).forEach(([key,value]) => console.log(`${key} : ${value}`));


console.log("\n  Type2 forEach loop \n");
for(const [key,value] of Object.entries(entertainment3)){
    console.log(`${key}: ${value}`);
}


//Make the big Entertainment Object by assign  3 object
var Big_Entertainment = Object.assign(entertainment,entertainment2,entertainment3);
console.log("\n \n Big_Entertainment Object: \n");
console.log(Big_Entertainment);




/*

output


Basic Loop through object : 

Entertainment1 object using for in loop: 

type0: cartoon,movie,drama,comedy
show: [object Object]
_episode: 1-50
year: 1900-2021
episode_get: 1-50
episode_set: undefined
introduction1: introduction1(para1){
         console.log(`Entertainment Object for Study with many type of Entertainment for recreation like : ${type0} \n
         \n`);

         switch(para1){
             case type0[0]:
                 console.log(`Welcome to our Program called: Entertainment Object \n 
                 We have ${para1} propeties that contains a lot of cartoon like : ${show.cartoon} \n`);
                 break;
             case type0[1]:
                    console.log(`Welcome to our Program called: Entertainment Object \n 
                    We have ${para1} propeties that contains a lot of movie like : ${show.movie} \n`);
                    break;
            case type0[2]:
                console.log(`Welcome to our Program called: Entertainment Object \n 
                    We have ${para1} propeties that contains a lot of drama like : ${show.drama} \n`);
                    break;
            default:
                console.log(`Welcome to our Program called: Entertainment Object \n `);
                break;
         };
         return " \n";
    }
introduction2: (para2) => {
        console.log(`Entertainment Object for Study with many show of Entertainment for recreation.\n`);

        if (para2 === show["cartoon"][0]){
                console.log(`Welcome to our Program called: Entertainment Object \n 
                    We have ${para2} show that is a  ${type0[0]} \n`);
                    
        } else if (para2 === show["movie"][1]){
            console.log(`Welcome to our Program called: Entertainment Object \n 
                    We have ${para2} show that is a  ${type0[1]} \n`);
                    
        } else if (para2 == show["drama"][5]){
            console.log(`Welcome to our Program called: Entertainment Object \n 
                    We have ${para2} show that is a  ${type0[2]} \n`);
                    
        } else {
            console.log(`Welcome to our Program called: Entertainment Object \n 
                    Sorry !!! Your para2 is not in our Program,Please input into parameter of this function another value \n`);
                    
        }

        return  "\n";
    }

 Entertainment1 Object full detail 

{
  type0: [ 'cartoon', 'movie', 'drama', 'comedy' ],
  show: {
    cartoon: [ 'orgy', 'doreamon', 'great teacher onizusa', 'mermaid' ],
    movie: [
      'click',
      'Hancock',
      'Fast & Furious',
      'The god father',
      'the Matric',
      'The day after tomorrow'
    ],
    channel: [ 'cartoon network', 'animax', 'amazon prime', 'disney+' ],
    drama: [
      'The Boys',
      'Training Day',
      'American horror story',
      'House',
      'Hanibal',
      'Hunter'
    ]
  },
  _episode: '1-50',
  year: '1900-2021',
  episode_get: [Getter],
  episode_set: [Setter],
  introduction1: [Function: introduction1],
  introduction2: [Function: introduction2]
}

 Entertainment object property introduction 1 : 
 
Entertainment Object for Study with many type of Entertainment for recreation like : cartoon,movie,drama,comedy 

         

Welcome to our Program called: Entertainment Object 
 
                 We have cartoon propeties that contains a lot of cartoon like : orgy,doreamon,great teacher onizusa,mermaid 

 
 


 Entertainment object after set new value for episode 
1-100 ep

 Entertainment object property introduction 2 : 
 
Entertainment Object for Study with many show of Entertainment for recreation.

Welcome to our Program called: Entertainment Object 
 
                    We have orgy show that is a  cartoon 


 


 Entertainment2 object: 

price: $1-$10 each episode
companies: Disney,Marvel,warner bros,20th Century Fox,Paramount Pictures.,Lionsgate Films
Director_Disney: Jennifer Dubin,Alan Wagner,Anne Sweeney,Rich Ross,Gary Marsh 
Director_Warner_Bros: TOM ASCHEIM,CAROLYN BLACKWOOD,ROBERT BLAIR,RICHARD BRENER,PAUL BROUCEK

 Turn object properties into array 

[
  [ 'price', '$1-$10 each episode' ],
  [
    'companies',
    [
      'Disney',
      'Marvel',
      'warner bros',
      '20th Century Fox',
      'Paramount Pictures.',
      'Lionsgate Films'
    ]
  ],
  [
    'Director_Disney',
    [
      'Jennifer Dubin',
      'Alan Wagner',
      'Anne Sweeney',
      'Rich Ross',
      'Gary Marsh '
    ]
  ],
  [
    'Director_Warner_Bros',
    [
      'TOM ASCHEIM',
      'CAROLYN BLACKWOOD',
      'ROBERT BLAIR',
      'RICHARD BRENER',
      'PAUL BROUCEK'
    ]
  ]
]



 Type 1 for each loop 

price : $1-$10 each episode
companies : Disney,Marvel,warner bros,20th Century Fox,Paramount Pictures.,Lionsgate Films
Director_Disney : Jennifer Dubin,Alan Wagner,Anne Sweeney,Rich Ross,Gary Marsh 
Director_Warner_Bros : TOM ASCHEIM,CAROLYN BLACKWOOD,ROBERT BLAIR,RICHARD BRENER,PAUL BROUCEK



 Type 2 for each loop 

price : $1-$10 each episode
companies : Disney,Marvel,warner bros,20th Century Fox,Paramount Pictures.,Lionsgate Films
Director_Disney : Jennifer Dubin,Alan Wagner,Anne Sweeney,Rich Ross,Gary Marsh 
Director_Warner_Bros : TOM ASCHEIM,CAROLYN BLACKWOOD,ROBERT BLAIR,RICHARD BRENER,PAUL BROUCEK



 Entertainment3 Object using for in loop: 

Employees: [object Object]
Product: Film,cartoon,sitcom,drama,reality show,gameshow,..etc..

 Entertainment3 Object full detail 

{
  Employees: {
    Wall_Disney: '32 000 workers',
    Warner_Bros: '8000 workers',
    _20th_Century_Fox: '2300 workers',
    Paramount_Pictures: '3000 workers',
    Lionsgate_Films: '3500 workers'
  },
  Product: 'Film,cartoon,sitcom,drama,reality show,gameshow,..etc..'
}

 Turn Entertainment3 object's properties into array 

[
  [
    'Employees',
    {
      Wall_Disney: '32 000 workers',
      Warner_Bros: '8000 workers',
      _20th_Century_Fox: '2300 workers',
      Paramount_Pictures: '3000 workers',
      Lionsgate_Films: '3500 workers'
    }
  ],
  [
    'Product',
    'Film,cartoon,sitcom,drama,reality show,gameshow,..etc..'
  ]
]

 Output Entertainment3 object's array with two type of forEach loop 

 Type1 forEach loop 

Employees : [object Object]
Product : Film,cartoon,sitcom,drama,reality show,gameshow,..etc..

  Type2 forEach loop 

Employees: [object Object]
Product: Film,cartoon,sitcom,drama,reality show,gameshow,..etc..

 
 Big_Entertainment Object: 

{
  type0: [ 'cartoon', 'movie', 'drama', 'comedy' ],
  show: {
    cartoon: [ 'orgy', 'doreamon', 'great teacher onizusa', 'mermaid' ],
    movie: [
      'click',
      'Hancock',
      'Fast & Furious',
      'The god father',
      'the Matric',
      'The day after tomorrow'
    ],
    channel: [ 'cartoon network', 'animax', 'amazon prime', 'disney+' ],
    drama: [
      'The Boys',
      'Training Day',
      'American horror story',
      'House',
      'Hanibal',
      'Hunter'
    ]
  },
  _episode: '1-100 ep',
  year: '1900-2021',
  episode_get: [Getter],
  episode_set: [Setter],
  introduction1: [Function: introduction1],
  introduction2: [Function: introduction2],
  price: '$1-$10 each episode',
  companies: [
    'Disney',
    'Marvel',
    'warner bros',
    '20th Century Fox',
    'Paramount Pictures.',
    'Lionsgate Films'
  ],
  Director_Disney: [
    'Jennifer Dubin',
    'Alan Wagner',
    'Anne Sweeney',
    'Rich Ross',
    'Gary Marsh '
  ],
  Director_Warner_Bros: [
    'TOM ASCHEIM',
    'CAROLYN BLACKWOOD',
    'ROBERT BLAIR',
    'RICHARD BRENER',
    'PAUL BROUCEK'
  ],
  Employees: {
    Wall_Disney: '32 000 workers',
    Warner_Bros: '8000 workers',
    _20th_Century_Fox: '2300 workers',
    Paramount_Pictures: '3000 workers',
    Lionsgate_Films: '3500 workers'
  },
  Product: 'Film,cartoon,sitcom,drama,reality show,gameshow,..etc..'
}
{ first_name: 'phuong', class_name: 'trieu' }

[Done] exited with code=0 in 0.156 seconds


*/

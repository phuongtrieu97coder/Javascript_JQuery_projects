let fitness_workplace = {
    types : [
        "cardiorespiratory fitness",
        "muscular strength",
        "muscular endurance",
        "body composition",
        "flexibility"
    ],
    
    activities:{
       cardiorespiratory_fitness: [
           "swimming",
           "jogging",
           "cycling"
       ],
       muscular_strength: [
           "weight_lifting",
           "crossfit",
           "bodybuilding",
           "powerlifting"

       ]

    },

    benefit: {
        Cardiorespiratory_fitness: [
            "Reduce: heart disease, lung cancer, type 2 diabetes , stroke",
            " increases endurance and overall health",
            "The heart muscle is strengthened so that it is able to pump more blood per heartbeat."
        ],
        Muscular_strength: [
            "Increase strength, gain muscle",
            " more power is allowed to be exerted"
            
        ]

    }

};

var {types,activities,benefit} = fitness_workplace;

var function1 = (para1) => {
    document.getElementById('result1').innerHTML = para1;
    return para1;
}

var function2 = para2 => {
    var text1 = "";
    for(let i1 = 0 ; i1< para2.length ; i1++){
        text1 = `<b>${text1} ${para2[i1]}</b><br>`;
    }
    document.getElementById('result1').innerHTML = text1;
}
var function3 = (para3) => {
    var text2 = "";
    for(let i2 = 0 ; i2 < para3.length ; i2++){
        text2 = `<b>${text2} ${para3[i2]}</b><br>`;
    }
    document.getElementById("result1").innerHTML = text2;
}

var function4 = para4 => {
   var text3 = "";
   for(let i3 = 0 ; i3 < para4.length; i3++){
       text3 = `<b>${text3} ${para4[i3]}</b><br>`;
   }
   document.getElementById('result1').innerHTML = text3;
}
var function5 = para5 => {
    var text4 = "";
    for(let i4 = 0 ; i4<para5.length ; i4++){
        text4 = `<b>${text4} ${para5[i4]}</b> <br>`;
    }
    document.getElementById('result1').innerHTML = text4;
}


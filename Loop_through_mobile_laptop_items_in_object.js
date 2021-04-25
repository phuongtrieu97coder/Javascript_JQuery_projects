let mobile = {
    brand: ["Apple","Samsung","Google","Motorola"],
    model: ["Iphone 12","Galaxy s30","Google Pixel 5","moto g stylus"],
    year: 2021,
    introduction (arg1){
        console.log(`This is ${arg1} of ${this.brand[0]} in ${this.year}`);
    }
};

const {branch,model,year} = mobile;

let laptop = {
    brand2: ["Microsoft","HP","Acer","Apple","Dell"],
    model2: [
        "Surface Laptop4",
        "HP SPECTRE X360 CONVERTIBLE LAPTOP - 15T-EB000 TOUCH",
        "Acer Laptop Aspire  A51",
        "MacBook Pro - Space Gray 13‑inch ",
        "Alienware m15 Ryzen Edition R5"],

    year2: 2021,
    introduction2: ()=> {
        console.log(`This is ${model2[0]} of ${brand2[0]} in ${year2}`);
    }
};

const {brand2,model2,year2} = laptop;

var function1 = para1 => {
    para1.year = 2022;
    mobile.introduction(model[0]);
    for (let key in mobile){
        console.log(`${key}: ${mobile[key]}`);
       
    };
};

let function2 = () => {
    laptop.introduction2();
    for (let key2 in laptop){
        console.log(`${key2}: ${laptop[key2]}`);
       
    };
};

function1(mobile);
function2();

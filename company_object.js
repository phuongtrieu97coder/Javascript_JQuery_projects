var company = {
    name:"Apple",
    employee: 200000,
    stock_price: 134.43,
    revenue: "114.44 Billion",
    net_income: "28.76 Billion",




    product: {
        prod_name: ["iphone","ipad","imac","apple tv"],
        type_of_product: {
            iphone:["iphone s","iphone 12","iphone x","iphone 12s"],
            ipad: ["ipad pro","ipad air","ipad mini"]
            
        }
    },




    system_technology(para1){
        var product_system = {
            ipad_pro:[
                "12.9inch and 11inch",
                "USB-C connector with support for Thunderbolt / USB 4",
                "5G cellular2",
                "Compatible with Apple Pencil (2nd generation)",
                "Compatible with Magic Keyboard and Smart Keyboard Folio"
            ],
            ipad_air:[
                "Liquid Retina display1",
                "A14 Bionic chip",
                "USB-C connector",
                "4G LTE cellular2",
                "Compatible with Apple Pencil (2nd generation)",
                "Compatible with Magic Keyboard and Smart Keyboard Folio"
            ]
        }

        para1==="ipad_pro"? console.log(product_system.ipad_pro) : console.log("Sorry, we don't have this item");
    }
}

const {name,employee,stock_price,revenue,net_income,product,system_technology} = company;
//console.log(system_technology('ipad_pro'));


var company2 = new Object();
company2.name2 = "Google";
company2.employee2 = "300000";
company2.stock_price2 = "2295";
company2.revenue2 = "182.5 billion USD";
console.log(company2);

var name3 = "Microsoft";
var employee2 = "400000";
var product3 = {
    prod_name3: ["laptop","tablet","computer","software"],
        type_of_product3: {
            software:["microsoft_office","window 10 home" , "adobe"]
            
        }
};

var company3 = {name3,employee2,product3};
company3.revenue3 = "143 billion USD";
console.log(company3);


var silicon_valley_corp = (company_name_1,company_name_2) => {
    return {
        sili_com_name1 : company_name_1,
        sili_com_name2 : company_name_2,
        
        result(){
            console.log(`we have some company like ${this.sili_com_name1} and ${this.sili_com_name2}`);
        }   
    }
    
}
console.log(silicon_valley_corp("Oracle","Netflix"));
console.log(silicon_valley_corp("Tesla","Facebook").result());


/* output

[Running] node "c:\Users\terro\Project vs code 2017\test1.js"
{
  name2: 'Google',
  employee2: '300000',
  stock_price2: '2295',
  revenue2: '182.5 billion USD'
}
{
  name3: 'Microsoft',
  employee2: '400000',
  product3: {
    prod_name3: [ 'laptop', 'tablet', 'computer', 'software' ],
    type_of_product3: { software: [Array] }
  },
  revenue3: '143 billion USD'
}
{
  sili_com_name1: 'Oracle',
  sili_com_name2: 'Netflix',
  result: [Function: result]
}
we have some company like Tesla and Facebook
undefined

[Done] exited with code=0 in 0.125 seconds



*/

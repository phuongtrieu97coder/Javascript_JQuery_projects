class employee{
    constructor(name1,age1,code1){
        this._name1 = name1;
        this.$age1 = age1;
        this.code1 = code1;
    }
    static intro1(){
        return "Hello ";
    }
    static intro1_2(para1){
        return "Good morning "+para1._name1;
    }

    intro2(){
        return "We have total 4 employees like: "+this._name1+`
        . Our employee 1 is: ${this._name1[0]}.He is ${this.$age1.John} years old
        . Our employee 2 is: ${this._name1[1]}.He is ${this.$age1.Christ} years old
        . Our employee 3 is: ${this._name1[2]}.She is ${this.$age1.Hana} years old
        . Our employee 4 is: ${this._name1[3]}.She is ${this.$age1.Jane} years old
   
        ` }

    

    get _code1(){
        return this.code1;
    }
    set _code1(new_code1){
        this.code1 = new_code1;
    }
}


const employee_obj = new employee(["John","Christ","Hana","Jane"],{
    John:36,
    Christ:42,
    Hana:32,
    Jane:29
},
 "X3N6G8K3I5E7"
);


employee_obj._code1 = "X3N6G8K3I5E7,X3N6G8K3I5E2,X3N6G8K3I5E5,X3N6G8K3I5E9";

console.log(employee.intro1());
console.log(employee.intro1_2(employee_obj));
console.log("\n TODAY WE CELEBRATE SOME OF OUR EMPLOYEE THAT REWARD A NEW SALARY THIS MONTH \n");

console.log("Our employee codes are : " +employee_obj._code1 +"\n");

console.log(employee_obj.intro2());





class salary extends employee{
    constructor(name1,age1,salary){
        super(name1,age1)
        this.salary = salary
        
    }
    intro3(){
        return "Employee named: "+this._name1 + ".He is "+this.$age1+" years old." +`He earned
        ${this.salary} dollar this month two days ago`; 
    }
    intro4(job_position){
        return "Employee named: "+this._name1 + ".She is "+this.$age1+" years old." +`She earned
        ${this.salary} dollar this month two days ago . She is the best ${job_position} of our company`; 
    }
    intro5(job_position){
        return "Employee named: "+this._name1 + ".He is "+this.$age1+" years old." +`He earned
        ${this.salary} dollar this month two days ago . He is the best ${job_position} of our company`; 
    }
}
const salary_obj = new salary("John",36,"$20000");
const salary_obj2 = new salary("Christ",42,"$30000");
const salary_obj3 = new salary("Hana",32,"$25000");
const salary_obj4 = new salary("Jane",29,"$18000");





console.log("Here is the reward chart: \n")




console.log("Employee name: " +salary_obj._name1);
console.log("Employee_age:" + salary_obj.$age1);
console.log(salary_obj.intro5("Financial Accountant"));



let employee_obj2 = {
   _name1: "Chris",
   $age1: 42,
   salary:"$30000"
}

let employee_obj3 = {
   _name1: "Hana",
   $age1: 32,
   salary:"$25000"
}

let employee_obj4 = {
   _name1: "Jane",
   $age1: 29,
   salary:"$18000"
}
console.log("\n \n")



console.log("Employee name: " +salary_obj2._name1);
console.log("Employee_age:" + salary_obj2.$age1);
console.log(salary_obj.intro5.call(employee_obj2,"Web Develop Engineer"));




console.log("\n \n")

console.log("Employee name: " +salary_obj3._name1);
console.log("Employee_age:" + salary_obj3.$age1);
console.log(salary_obj.intro4.apply(employee_obj3,["Graphic Designer"]));



console.log("\n \n")

console.log("Employee name: " +salary_obj4._name1);
console.log("Employee_age:" + salary_obj4.$age1);
console.log(salary_obj.intro4.apply(employee_obj4,["Marketing Exercutive"]));



/*
[Running] node "c:\xampp\htdocs\web_develop_project\test1.js"
Hello 
Good morning John,Christ,Hana,Jane

 TODAY WE CELEBRATE SOME OF OUR EMPLOYEE THAT REWARD A NEW SALARY THIS MONTH 

Our employee codes are : X3N6G8K3I5E7,X3N6G8K3I5E2,X3N6G8K3I5E5,X3N6G8K3I5E9

We have total 4 employees like: John,Christ,Hana,Jane
        . Our employee 1 is: John.He is 36 years old
        . Our employee 2 is: Christ.He is 42 years old
        . Our employee 3 is: Hana.She is 32 years old
        . Our employee 4 is: Jane.She is 29 years old
   
        
Here is the reward chart: 

Employee name: John
Employee_age:36
Employee named: John.He is 36 years old.He earned
        $20000 dollar this month two days ago . He is the best Financial Accountant of our company

 

Employee name: Christ
Employee_age:42
Employee named: Chris.He is 42 years old.He earned
        $30000 dollar this month two days ago . He is the best Web Develop Engineer of our company

 

Employee name: Hana
Employee_age:32
Employee named: Hana.She is 32 years old.She earned
        $25000 dollar this month two days ago . She is the best Graphic Designer of our company

 

Employee name: Jane
Employee_age:29
Employee named: Jane.She is 29 years old.She earned
        $18000 dollar this month two days ago . She is the best Marketing Exercutive of our company

[Done] exited with code=0 in 0.134 seconds





*/

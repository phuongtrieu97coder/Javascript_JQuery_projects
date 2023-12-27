//'const' specifies a constant variable, 'kelvin' is the name of the variable, 293 is the number value of this variable
const kelvin = 293;
//Celsius is 273 degrees less than, so we are going to create a constant 'celsius' variable and assign it a value by subtracting 273 from the 'kelvin' variable.
const celsius = kelvin-273;

//creates a 'fahrenheit' variable that can be used to assign new value in the further steps. This variable has  the value as celsius*(9/5)+32
let fahrenheit = celsius*(9/5)+32;

//The syntax below uses the .floor() method from the built-in Math object to round down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

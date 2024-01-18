let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
num = String(num)
console.log(`${num.length}`);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

num = 123.45
let num1 = String(num).replace('.',"").length
console.log(`${num} has ${num1}  digits but a length of ${String(num).length}`);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (String(num).includes('.')) {
    console.log(`The length of num is ${String(num).length - 1}`);
} else{
    console.log(`The length of num is ${String(num).length}`);
}
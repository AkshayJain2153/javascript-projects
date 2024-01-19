const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let newStr = str.slice(3) + str.slice(0,3)

console.log(newStr);


//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original str was ${str} and the modified string is ${newStr}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let numOfLettersToMove = input.question("Enter the number of letters to be relocated: ")


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (numOfLettersToMove > str.length && numOfLettersToMove < 0) {
    numOfLettersToMove = 3 ;
    console.log("Error: Its not allowed");
    console.log(`The original str was ${str} and you entered the number of letters to modify the original string is : ${numOfLettersToMove} but it is greater than the length of string ${newStr}`); 
} else{
    newStr = str.slice(numOfLettersToMove) + str.slice(0,numOfLettersToMove)
    console.log(`The original str was ${str} and the number of letters it is going relocated from its position is : ${numOfLettersToMove} and the new modified string is ${newStr}`);
}
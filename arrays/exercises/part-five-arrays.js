let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split());  // default split with empty space as default seprator is empty space
console.log(str.split('e')); // It got splited as 'e' is the seprator
console.log(str.split(' ')); // Split at space creating new array of words
console.log(str.split('')); // It split whole array into individual character

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join(' '));
console.log(arr.join(''));

//3) Do split or join change the original string/array?
// No, both split and join returns new values without changing the original array/String

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

console.log(cargoHold.split(',').sort().join(','));

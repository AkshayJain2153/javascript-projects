/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

// Exercise -1 solution 
// a
for (let num = 0; num <= 20; num++) {
  console.log(num);
}

// b
for (let oddNum = 3; oddNum <= 29; oddNum += 2) {
  console.log(oddNum);
}

// c
for (let evenNum = 12; evenNum >= -14; evenNum -= 2) {
  console.log(evenNum);
}

// d
for (let multipleOfThree = 50; multipleOfThree >= 20; multipleOfThree--) {
  if (multipleOfThree % 3 == 0) {
    console.log(multipleOfThree);
  }
}


/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */

//  Exercise 2 solution

// a
let str = 'LaunchCode';
let arr = [1, 5, 'LC101', 'blue', 42];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  
}

// b
for (let i = (str.length)-1; i >= 0; i--) {
  console.log(str[i]);
  
}



/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */


  //  Solution Exercise 3

  // a
  let newArr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];

  let even = []
  let odd = []

  for (let index = 0; index < newArr.length; index++) {
    if (newArr[index] % 2 == 0) {
      even.push(newArr[index])
    } else{
      odd.push(newArr[index])
    }
    
  }

  // b

  console.log("The Even Numbers in the array is : " + even);
  console.log("The Odd Numbers :" + odd);
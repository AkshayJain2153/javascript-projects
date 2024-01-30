//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.

nums1.sort(function(a, b){return a-b})
nums2.sort(function(a, b){return a-b})
nums3.sort(function(a, b){return a-b})

console.log(`Sorted num1 array in ascending order is : `, nums1);
console.log(`Sorted num2 array in ascending order is : `, nums2);
console.log(`Sorted num3 array in ascending order is : `, nums3);


//Sort each array in decending order.


nums1.sort(function(a, b){return b-a})
nums2.sort(function(a, b){return b-a})
nums3.sort(function(a, b){return b-a})

console.log(`Sorted num1 array in decending order is : `, nums1);
console.log(`Sorted num2 array in decending order is : `, nums2);
console.log(`Sorted num3 array in decending order is : `, nums3);


// 3 Yes, the sort function alter the original array instead of creating new array.

// 4 No, my function which is sortedNumberArray did not alter the original array instead new array is created and returned it.
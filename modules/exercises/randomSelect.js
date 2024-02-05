function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  let randonELementIndex = Math.floor(Math.random()* arr.length)
  return arr[randonELementIndex]
}

//TODO: Export the randomFromArray function.
module.exports = randomFromArray;
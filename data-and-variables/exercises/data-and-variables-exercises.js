// Declare and assign the variables below
let spaceShuttleName = "Determination";
let shuttleSpeedInMph = 17500;
let distanceToMarsInKm = 225000000;
let distanceToMoonInKm = 384400;

const milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof spaceShuttleName);
console.log(typeof shuttleSpeedInMph);
console.log(typeof distanceToMarsInKm);
console.log(typeof distanceToMoonInKm);
console.log(typeof milesPerKm);

// Calculate a space mission below
let distanceToMarsInMiles = distanceToMarsInKm * milesPerKm;
let timeInHoursToMars = distanceToMarsInMiles / shuttleSpeedInMph;
let daysToMars = timeInHoursToMars / 24;

// Print the results of the space mission calculations below


console.log(`${spaceShuttleName} will take ${daysToMars} days to reach Mars.`);

// Calculate a trip to the moon below
let distanceToMoonInMiles = distanceToMoonInKm * milesPerKm;
let timeInHoursToMoon = distanceToMoonInMiles / shuttleSpeedInMph;
let daysToMoon = timeInHoursToMoon / 24;

// Print the results of the trip to the moon below
console.log(`${spaceShuttleName} will take ${daysToMoon} days to reach the Moon.`);
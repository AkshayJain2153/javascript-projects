let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function () { return Math.floor(Math.random() * 11) }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function () { return Math.floor(Math.random() * 11) }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function () { return Math.floor(Math.random() * 11) }
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function () { return Math.floor(Math.random() * 11) }
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: function () { return Math.floor(Math.random() * 11) }
};


// After you have created the other object literals, add the astronautID property to each one.

superChimpOne["astronautID"] = 1;

salamander["astronautID"] = 3;

superChimpTwo["astronautID"] = 6;

beagle["astronautID"] = 9

tardigrade["astronautID"] = 10


// console.log(superChimpOne);


// Create an array to hold the animal objects.

let animalCrew = [superChimpOne, salamander, superChimpTwo, beagle, tardigrade];



// Print out the relevant information about each animal.




// Start an animal race!

function fitnessTest(candidates) {
   let results = [], numSteps, turns;
   for (let i = 0; i < candidates.length; i++) {
      numSteps = 0;
      turns = 0;
      while (numSteps < 20) {
         numSteps += candidates[i].move();
         turns++;
      }
      results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
}


console.log(fitnessTest(animalCrew));
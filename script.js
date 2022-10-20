// "use strict";

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log("I can drive");

// // const interface = "Audio"; // strict mode does not allow to use this words
// // const private = 534; // strict mode does not allow to use this words
// // const if = 23; // strict mode does not allow to use this words

// function logger() {
//   console.log("My name is Dmitriy");
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// // console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23"); // function too

// // Function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// Arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   //   return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearUntilRetirement(1991, "Dmitriy"));
// console.log(yearUntilRetirement(1980, "Bob"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   console.log(apples, oranges);
//   const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired!`);
//     return -1;
//   }
// };
// console.log(yearUntilRetirement(1991, "Dmitriy"));
// console.log(yearUntilRetirement(1950, "Mike"));

// Coding Challenge #1

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}) `);
//   } else if (avgKoalas >= 2 * avgDolphins)
//     console.log(`Koalas win (${Koalas} vs. ${avgDolphins}) `);
//  } else {
//     console.log("No team wins...");

//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);

//Test 2

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// let scoreDolphins = calcAverage(85, 54, 41);
// let scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins}) vs. (${avgKoalas}).`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas}) vs. (${avgDolphins}).`);
//   } else {
//     console.log("No team wins...");
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);

// ARRAYS Section

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);
// // friends = ["Bob", "Alice"];
// const firstName = "Dmitriy";
// const dmitriy = [firstName, "Angve", 2037 - 1988, "student", friends];
// console.log(dmitriy);
// console.log(dmitriy.length);

// Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// ARRAYS
// const friends = ["Michael", "Steven", "Peter"];

//ADD elements
// const newLength = friends.push("Jay"); // add in the end
// console.log(friends);
// console.log(newLength);

// friends.unshift("John"); // add to the beginning
// console.log(friends);

// //REMOVE elements
// friends.pop(); //remove last of the element
// const popped = friends.pop(); // saves removed element
// console.log(popped); // show removed element
// console.log(friends);

// friends.shift();
// // const shifted = friends.shift();
// // console.log(shifted);
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// const dmitriyArray = [
//   "Dmitriy",
//   "Angve",
//   2037 - 1988,
//   "student",
//   ["Michael", "Peter", "Steven"],
// ];

// const dmitriy = {
//   firstName: "Dmitriy",
//   lastName: "Angve",
//   age: 2037 - 1988,
//   job: "student",
//   friends: ["Michael", "Peter", "Steven"],
// };

// const dmitriy = {
//   firstName: "Dmitriy",
//   lastName: "Angve",
//   age: 2037 - 1988,
//   job: "student",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(dmitriy);

// console.log(dmitriy.lastName); // dot notation
// console.log(dmitriy["lastName"]); // bracket notation

// const nameKey = "Name";
// console.log(dmitriy["first" + nameKey]);
// console.log(dmitriy["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Dmitriy? Choose between firstName, lastName, age, job and friends"
// );

// if (dmitriy[interestedIn]) {
//   console.log(dmitriy[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job and friends"
//   );
// }

// dmitriy.location = "Portugal";
// dmitriy["twitter"] = "@angve";
// console.log(dmitriy);

// //Challenge

// dmitriy.friends["Michael"] = "Best friend";
// console.log(
//   `${dmitriy.firstName} has ${dmitriy.friends.length}  friends and his best friend is called ${dmitriy.friends[0]}`
// );

// const dmitriy = {
//   firstName: "Dmitriy",
//   lastName: "Angve",
//   birthYear: 1988,
//   job: "student",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicence: true,

//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },

//   calcAge: function () {
//     // console.log(this);
//     return 2037 - this.birthYear;
//   },
//   calcAge: function () {
//     this.age = 2037 - this.birthYear; //create new property dmitriy.age
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicence ? "a" : "no"} drivers's licence`;
//   },
// };

// console.log(dmitriy.calcAge(1988));

// console.log(dmitriy.getSummary());

// Challenge
// const mark = {
//   fullName: "Mark Smith",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     return (this.bmi = this.mass / this.height ** 2);
//   },
// };

// const john = {
//   fullName: "John Miller",
//   mass: 72,
//   height: 1.55,
//   calcBMI: function () {
//     return (this.bmi = this.mass / this.height ** 2);
//   },
// };
// console.log(mark.calcBMI());
// console.log(john.calcBMI());
// console.log(mark.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
//       john.fullName
//     }'s (${john.calcBMI()})!`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
//       mark.fullName
//     }'s (${mark.calcBMI()})!`
//   );
// }

// LOOPS (Циклы)
// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

// for loops keeps running while condition is TRUE
// for (let rep = 1; rep <= 30; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// const dmitriy = [
//   "Dmitriy",
//   "Angve",
//   2037 - 1988,
//   "student",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < dmitriy.length; i++) {
//   console.log(dmitriy[i], typeof dmitriy[i]);

//   //Filling types array
//   //   types[i] = typeof dmitriy[i];
//   types.push(typeof dmitriy[i]);
// }

// console.log(types);
// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// //continue and break
// console.log("---ONLY STRINGS---");
// for (let i = 0; i < dmitriy.length; i++) {
//   if (typeof dmitriy[i] !== "string") continue;
//   console.log(dmitriy[i], typeof dmitriy[i]);
// }

// console.log("---BREAK WITH NUMBER---");
// for (let i = 0; i < dmitriy.length; i++) {
//   if (typeof dmitriy[i] === "number") break;
//   console.log(dmitriy[i], typeof dmitriy[i]);
// }

// const dmitriy = [
//   "Dmitriy",
//   "Angve",
//   2037 - 1988,
//   "student",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];
// // 0, 1, ..., 4
// // 4, 3, ..., 0

// for (let i = dmitriy.length - 1; i >= 0; i--) {
//   console.log(i, dmitriy[i]);
// }

// // loop inside the loop
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---------Starting ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   // console.log(`WHILE: Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end...");
// }

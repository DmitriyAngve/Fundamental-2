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

// ---------------------CODEWARS DAY #1-----------------------

// ---------------------FIRST KATA-----------------------------
/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

// First solution
/*
let dna = "ACGT";
function DNAStrand(dna) {
  let result = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      result += "T";
    } else if (dna[i] === "T") {
      result += "A";
    } else if (dna[i] === "C") {
      result += "G";
    } else if (dna[i] === "G") {
      result += "C";
    } else {
      result += dna[i];
    }
  }
  return result;
}
console.log(DNAStrand(dna));
*/

// Second solution
/*
let dna = "ACGT";
let pairs = { A: "T", T: "A", C: "G", G: "C" };
const DNAStrand = (dna) => dna.replace(/./g, (е) => pairs[е]); // str.replace(regexp|substr, newSubstr|function[,flags]). /./g - каждый символ g - глобальное сопоставление
console.log(DNAStrand(dna));
*/

// ---------------------SECOND KATA---------------------------
/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
Examples (a, b) --> output (explanation)

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

// First solution !!!!RECOURSION!!!!
// function getSum(a, b) {
//   if (a === b) {
//     return a;
//   } else if (a < b) {
//     return a + getSum(a + 1, b);
//   } else {
//     return a + getSum(a - 1, b);
//   }
// }
// console.log(getSum(-2, 2));

//Second solution
// function getSum(a, b) {
//   return ((a + b) * (Math.abs(a - b) + 1)) / 2;
// }
// console.log(getSum(-2, 1));

// ---------------------THIRD KATA---------------------------

/*
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.
number 	                          price (cents)
n < 5 	                          100
n >= 5 and n < 10 	              95
n >= 10 	                        90
*/

//First solution
// function saleHotdogs(n) {
//   if (n < 5) {
//     return 100 * n;
//   } else if (n >= 5 && n < 10) {
//     return 95 * n;
//   } else if (n >= 10) {
//     return 90 * n;
//   }
// }
// console.log(saleHotdogs(11));

//Second solution Ternary operator
// function saleHotdogs(n) {
//   return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
// }
// console.log(saleHotdogs(11));

// ---------------------FOURTH KATA---------------------------

/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"

Notes:

    If either input is an empty string, consider it as zero.

*/

//First solution
// function sumStr(a, b) {
//   return String(Number(a) + Number(b));
// }
// console.log(sumStr("", ""));

//Second solution
// const sumStr = (a, b) => String(+a + +b);
// console.log(sumStr(1, 2));

// ---------------------FOURTH KATA---------------------------

/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
Examples

makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes

    The number can be negative already, in which case no change is required.
    Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense
*/

//First solution
// function makeNegative(num) {
//   return num < 0 ? num : num * -1;
// }
// console.log(makeNegative(-1));

//Second solutiom
// function makeNegative(num) {
//   return Math.abs(num);
// }

// ---------------------FIFTH KATA-----------------------

//First solution
// const number = function (busStops) {
//   let sumPeople = 0;
//   for (let stop of busStops) {
//     sumPeople += stop[0] - stop[1];
//   }
//   return sumPeople;
// };

//Second solution
// const number = (busStops) =>
//   busStops.reduce((people, stop) => people + stop[0] - stop[1]);
// // array.reduce(callback[, initialValue])

// ---------------------SIXTH KATA-----------------------
/*
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

*/
// First solution
// function isTriangle(a, b, c) {
//   return a < b + c && b < a + c && c < a + b;
// }
// console.log(isTriangle(3, 4, 5));

// ---------------------SEVENTH KATA----------------------
/*
Write a function that checks if a given string (case insensitive) is a palindrome. Palindrome is 
*/

// First solution

// function isPalindrome(x) {
//   y = x.split("").reverse().join("");
//   if (x.toLowerCase() === y.toLowerCase()) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isPalindrome("ABbA"));

// Second solution with arrow function
// const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split('').reverse().join('');

// ---------------------EIGHTH KATA----------------------
/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

// First solution

// function abbrevName(fullName) {
//   return fullName
//     .split(" ")
//     .map((i) => i[0].toUpperCase())
//     .join(".");
// }
// // split разделяет строку на подстроки по сепаратору ("пробел")
// // map создает новый массив путём применения к каждому элементу старого массива функцию (i[0].toUpperCase())
// // join объединяет элементы массива после map в строку с сепаратором (".")
// console.log(abbrevName("Harry Potter"));

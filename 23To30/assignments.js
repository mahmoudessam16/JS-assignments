// Number Assignments
/* assignment one */
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100 * 1000); // 100000
console.log(Number(100000)); // 100000
console.log(Math.floor(100000.544)); // 100000
console.log(Math.ceil(99999.56)); // 100000
console.log(Math.trunc(100000.43)); // 100000
console.log(parseInt(100000)); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Math.round(100000.4)); // 100000
console.log(1e5); // 100000


// Assignment Two
console.log(-(Number.MIN_SAFE_INTEGER)); // 9007199254740991


// Assignment Three
console.log((Number.MAX_SAFE_INTEGER).toString().length); // 16


// Assignment Four
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+(parseFloat(myVar).toFixed(2))); // 100.57

// Assignment Five
let num = 10;
// Only Use isInteger() method
console.log(Number.isInteger(num) + Number.isInteger(num)); // 2


// Assignment six
let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Number(flt.toFixed())); // 10


// Assignment Seven
console.log(Math.floor(Math.random() * 5));

/* ------------------------------------------------------------------------------------------ */

// String Assignments
// Assignment One
let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.split("", 1).join().toLowerCase()); // eee


// Assignment Two
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
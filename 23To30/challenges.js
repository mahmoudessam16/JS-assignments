// Number Challenges
let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;


// Find Smallest Number In All Variables And Return Integer
console.log(Math.min(a,b,c,d));

// Use Variable a + d One Time To Get The Needed Output
console.log(Math.pow(a, Math.round(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));


// Use Variables b + d To Get This Values
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.ceil(Math.trunc(b) / Math.ceil(d))); // 67 => Number

/* ------------------------------------------------------------------------------------------ */

// String Challenges
let str = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(`${str.charAt(2).toUpperCase()}${str.slice(3, 7)}`); // Zero

// 8 H
console.log(str.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(`[${str.slice(0, 6)}]`);

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${str.substr(0, 6)} ${str.substr(11)}`); // Elzero School

// Solution Must Be Dynamic And String May Change
console.log(`${str.charAt(0).toLowerCase()}${str.slice(1, str.length - 1).toUpperCase()}${str[str.length - 1].toLowerCase()}`); // eLZERO WEB SCHOOl

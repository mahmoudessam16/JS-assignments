// Assignments From 31 to 32
// Assignment One
console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(! -50 >= +"-40"); // true
console.log(! 10 <= -"-40"); // true
console.log(typeof "10" != typeof 10); // true
console.log(typeof 20 != false); // true

// Assignment Two
let num1 = 10;
let num2 = 20;

console.log(typeof num1 === typeof num2); // true
console.log(num1 < num2); // true
console.log(num2 > num1); // true
console.log(num1 != num2); // true
console.log(num1 !== num2); // true


// Assignment Three
let a1 = 20;
let b = 30;
let c = 10;

console.log(a1 < b && a1 > c || a1 < b); // true
console.log(a1 < b && a1 > c); // true
console.log(!(a1 > b) && !(a1 > b) && !(a1 < c) && !(a1 < c)); // true



// Assignments From 33 to 37
// Assignment One
// Test Case 1
let num = 120; // "009"

// // Test Case 2
// let num = 20; // "020"

// // Test Case 3
// let num = 110; // "110"

if (num < 10) {
    console.log(`00${num}`);
} else if (num > 10 && num < 100) {
    console.log(`0${num}`);
} else {
    console.log(num);
}


// Assignment Two
let num3 = 9;
let str = "9";
let str2 = "20";

if (num3 == str) {
    console.log("{num1} Is The Same Value As {str}")
} 
if (num3 == str && typeof num3 !== typeof str) {
    console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if (num3 != str2 && typeof num3 !== typeof str2) {
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
} 
if (str != str2 && typeof str === typeof str2) {
    console.log("{str} Is The Same Type As {str2} But Not The Same Value")
}
// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"


// Assignment Three
let num4 = 10;
let num5 = 30;
let num6 = "30";

if (num4 != num6 && typeof num4 !== typeof num6 && num6 != num4 && num5 == num6 && typeof num6 !== typeof num5 && num6 !== num4 && typeof num6 !== typeof num5) {
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
    console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
}

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"



// Assignment Four
// Edit What You Want Here

let num7 = 10;
let num8 = 10;
let num9 = "10";
let num10 = 20;
/*
    Do Not Edit Below This Line
    Needed Output
    True 7 Times
*/
// Condition 1
if (num7 === num8) {
    console.log("True");
} else {
    console.log("False");
}
// Condition 2
if (num7 === num8 && num7 < num10) {
    console.log("True");
} else {
    console.log("False");
}
// Condition 3
if (num7 === num8 && num7 == num9) {
    console.log("True");
} else {
    console.log("False");
}
// Condition 4
if ((num7 + num8) === num10) {
    console.log("True");
} else {
    console.log("False");
}
// Condition 5
if ((num7 + +num9) === num10) {
    console.log("True");
} else {
    console.log("False");
}
// Condition 6
if ((num7 + num8 + +num9) > num4) {
    console.log("True");
} else {
    console.log("False");
}
// Condition 7
if (num10 - (num7 + +num9) + num8 + num7 + true === 21) {
    console.log("True");
} else {
    console.log("False");
}

// Switch Assignment
let day = "   tuesday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
switch (`${day.trim().charAt(0).toUpperCase()}${day.trim().slice(1)}`) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM")
        break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM")
        break;
    default:
        console.log("Its Not A Valid Day");
        break;
}

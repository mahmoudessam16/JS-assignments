// If Condition Challenge
let a = 10;

if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 To 40");
} else if (a > 40) {
    console.log("> 40");
} else {
    console.log("Unknown");
}

// Write With Ternary 
a < 10 ? console.log(10) : a >= 10 && a <= 40 ? console.log("10 to 40") : a > 40 ? console.log("> 40") : console.log("Unknown");


// challenge two
let st = "Elzero Web School";

if ((st.length * 2).toString() === "34") {
    console.log("Good");
}

if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
    console.log("Good");
}

if (typeof st.length !== "string") {
    console.log("Good");
}

if (typeof st.length === "number") {
    console.log("Good");
}

if (st.substr(0, 6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}


// Switch Challenge
let job = "Developer";
let salary = 0;

switch (job) {
    case "Manager":
        salary = 8000;
        console.log(salary);
        break;
    case "IT":
    case "Support":
        salary = 6000;
        console.log(salary);
        break;
    case "Developer":
    case "Designer":
        salary = 7000;
        console.log(salary);
        break;
    default: 
        salary = 4000
        console.log(salary);
        break;
}

let holidays = 1;
let money = 0;

if (holidays === 0) {
    money = 5000;
    console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
    money = 3000;
    console.log(`My Money is ${money}`);
} else if (holidays === 3) {
    money = 2000;
    console.log(`My Money is ${money}`);
} else if (holidays === 4) {
    money = 1000;
    console.log(`My Money is ${money}`);
} else if (holidays === 5) {
    money = 0;
    console.log(`My Money is ${money}`);
} else {
    money = 0;
    console.log(`My Money is ${money}`);
}
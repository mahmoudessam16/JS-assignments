// Assignment One
let dateNew = new Date();
let myBirthday = new Date("04/16/2000");

let myAge = dateNew - myBirthday;
console.log(`${(myAge / 1000).toFixed()} Seconds`);
console.log(`${(myAge / 1000 / 60).toFixed()} Minutes`);
console.log(`${(myAge / 1000 / 60 / 60).toFixed()} Hours`);
console.log(`${(myAge / 1000 / 60 / 60 / 24).toFixed()} Days`);
console.log(`${(myAge / 1000 / 60 / 60 / 24 / 30).toFixed()} Months`);
console.log(`${(myAge / 1000 / 60 / 60 / 24 / 30 / 12).toFixed()} Days`);

// Needed Output
// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"

console.log("#".repeat(50))

// Assignment Two
let date = new Date();
date.setTime(1000);
date.setHours(0);
date.setFullYear("1980");
console.log(date);

// Needed Output
// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"
console.log("#".repeat(50));

// Assignment Three
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let date1 = new Date();
date1.setDate(0);
console.log(date1);
console.log(`Previous Month Is ${months[date1.getMonth("")]} And Last Day Is ${date1.getDate()}`);

// Needed Output
// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"


console.log("#".repeat(50));

// Assignment Four
let myBirthday1 = new Date("04/16/2000");
let myBirthday2 = new Date();
myBirthday2.setTime(0);
myBirthday2.setHours(0);
myBirthday2.setFullYear(2000, 3, 16);

console.log(myBirthday1);
console.log(myBirthday2);

// Needed Output
// Sun Apr 16 2000 00:00:00 GMT+0300 (Arabian Standard Time)
// Sun Apr 16 2000 00:00:00 GMT+0300 (Arabian Standard Time)

console.log("#".repeat(50));


// Assignment Five
let before = performance.now();
for (let i = 0; i < 100; i++) {
    document.write(`${i}`);
    document.write(`<br>`);
}
let after = performance.now();
let differ = (after - before).toFixed();

console.log(`Loop Took ${differ} Milliseconds.`);

// Needed Output
// "Loop Took 1921 Milliseconds."


console.log("#".repeat(50));

// Assignment Six
// Write Your Generator Function Here
function* gen() {
    let index = 14;
    let increment = 1;
    while (true) {
        yield index;
        yield index += parseInt(`${increment}00`) + 40;
        index += parseInt(`${increment+=2}00`) + 40;
        increment+=2;
    }
}

let generator1 = gen();

console.log(generator1.next()); // {value: 14, done: false}
console.log(generator1.next()); // {value: 154, done: false}
console.log(generator1.next()); // {value: 494, done: false}
console.log(generator1.next()); // {value: 1034, done: false}
console.log(generator1.next()); // {value: 1774, done: false}
console.log(generator1.next()); // {value: 2714, done: false}
console.log(generator1.next()); // {value: 3854, done: false}
console.log(generator1.next()); // {value: 5194, done: false}
console.log(generator1.next()); // {value: 6734, done: false}
console.log(generator1.next()); // {value: 8474, done: false}


console.log("#".repeat(50));

// Assignment Seven
function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
}

//  Write Your Generator Function Here
function* genAll() {
    yield* new Set(genNumbers());
    yield* new Set(genLetters());
}

let generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}


let str = "EEEElllllzzzzeeerrrroooo";

let result = [...new Set(str.split(""))].join("");

console.log(result);
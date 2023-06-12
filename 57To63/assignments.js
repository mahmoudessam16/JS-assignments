/* Assignment One */
function sayHello(theName, theGender) {
    // Your Code Here
    if (theGender === "Male") {
        console.log(`Hello Mr ${theName}`);
    } else if (theGender === "Female") {
        console.log(`Hello Miss ${theName}`);
    } else if (theGender === undefined) {
        console.log(`Hello ${theName}`);
    }
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"



/* Assignment Two */
function calculate(firstNum, secondNum, operation) {
    // Your Code Here
    if (secondNum === undefined && operation === undefined) {
        console.log(`Second Number Not Found`);
    } else if (operation === undefined || operation === "add") {
        console.log(firstNum + secondNum);
    } else if (operation === "subtract") {
        console.log(firstNum - secondNum);
    } else if (operation === "multiply") {
        console.log(firstNum * secondNum);
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

/* Assignment three */
function ageInTime(theAge) {
    // Your Code Here
    if (theAge < 10 || theAge > 100) {
        console.log('Age Out Of Range')
    } else {
        console.log(`Months => ${theAge * 12}`);
        console.log(`Weeks => ${theAge * 52}`);
        console.log(`Days => ${theAge * 365}`);
        console.log(`Hours => ${theAge * 365 * 24}`);
        console.log(`Minutes => ${theAge * 365 * 24 * 60}`);
        console.log(`seconds => ${theAge * 365 * 24 * 60 * 60}`);
    }
}
// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months


/* Assignment Five */
function createSelectBox(startYear, endYear) {
    // Your Code Here
    document.write('<select>');
    for (let i = startYear; i <= endYear; i++) {
        document.write(`<option value="${i}">${i}</option>`)
    }
    document.write('</select>');
}
createSelectBox(2000, 2021);


/* Assignment Six */
function multiply(...nums) {
    let result = 1;
    for (let i = 0; i < nums.length; i++) {
        if (typeof nums[i] === 'string') {
            continue;
        }
        result *= parseInt(nums[i]);
    }
    console.log(result)
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
// Assignment One
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let filterMix = mix.filter(el => isNaN(el)).join("");
console.log(filterMix);
// Elzero


// Assignment Two
let myString2 = "EElllzzzzzzzeroo";
let convertString = myString2.split("").filter((el, index) => myString2.indexOf(el) === index).reduce((acc, curr) => `${acc}${curr}`);
console.log(convertString);
// Elzero



// Assignment Three
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let myArraySolution = myArray.reduce((acc, curr) => acc + curr).split("").map(el => el === ',' ? "" : el).reduce((acc, curr) => `${acc}${curr}`);
console.log(myArraySolution);
// Elzero


// Assignment Four
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let onlyNums = numsAndStrings.filter(el => !isNaN(el)).map(el => -el);
console.log(onlyNums);

// [-1, -10, 10, 20, -5, -3]



// Assignment Five
let nums = [2, 12, 11, 5, 10, 1, 99];

let numsSolution = nums.reduce((acc, curr) => {
    if (curr % 2 !== 0) {
        return acc + curr;
    } else if (curr % 2 === 0) {
        return acc * curr;
    }
},1);

console.log(numsSolution);

// 500
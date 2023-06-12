// challenge One
let names = function (...nums) {
    return `String [${nums.join("],[")}] => Done !`
};

// previous Example in arrow
let namesArrow = (...nums) => `String [${nums.join("],[")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim", "Sayed"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !


// Challenge Two
let myNumbers = [20, 50, 10, 60];
let calc = (one, two, ...nums) => (one + two) * nums;

console.log(calc(10, myNumbers[true + true], myNumbers.length)); // 80
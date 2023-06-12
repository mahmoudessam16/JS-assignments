// Assignment One
let setOfNumbers = new Set().add(10);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);
let iterator = setOfNumbers.keys();
iterator.next().value;
iterator.next().value;
console.log(iterator.next().value);



// Assignment Two
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log([...new Set(myFriends)].sort());
// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']



// Assignment Three
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
    city: "Cairo"
};

let keys = Object.keys(myInfo);
let values = Object.values(myInfo);

let map = new Map();
for (let i = 0; i < keys.length; i++) {
    map.set(keys[i], values[i]);
}
console.log(map);
console.log(map.size);
console.log(map.has("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true


// Assignment Four
let theNumber = 100020003000;

console.log(Number([...new Set(theNumber.toString())].filter(el => el > 0).join("")));

// Needed Output
// 123


// Assignment Five
let theName = "Elzero";

console.log(Array.from(theName));
console.log([...theName]);
console.log(theName.split(""));
console.log([...new Set(theName)]);
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']


// Assignment Six
let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let lengthOfNums = chars.filter(el => typeof el === 'number');
let lengthOfStr = chars.filter(el => typeof el === 'string');
chars = [...lengthOfNums, ...lengthOfStr];
console.log(chars.copyWithin(0, chars.indexOf(lengthOfStr[0]), chars.indexOf(lengthOfStr[0]) + lengthOfNums.length));

// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']


// Assignment Seven
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
console.log([].concat(numsOne, numsTwo));
console.log([...Array.from(numsOne), ...Array.from(numsTwo)]);

// Needed Output
// [1, 2, 3, 4, 5, 6]
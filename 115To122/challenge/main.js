// Challenge
let chosen = 2;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];


let {title, age, available, skills: [,two]} = myFriends[chosen - 1];

console.log(title);
console.log(age)
console.log(available ? "Available" : "Not Available");
console.log(two);


// Assignment One
let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
let [a1, , , , e1] = myNumbers;
console.log(a1 * e1); // 5


// Assignment Two
let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here
let [a2, b2, c2, [d2, e2, [f2, g2]]] = mySkills;

console.log(`My Skills: ${a2}, ${b2}, ${c2}, ${d2}, ${e2}, ${f2}, ${g2}`);
// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel


// Assignment Three
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
let allArrays = [].concat(arr1, arr2, arr3);
// Write Your Destructuring Assignment Here
let [c3, , , , , , , a3, b3] = allArrays;

console.log(`My Best Friends: ${a3}, ${b3}, ${c3}`);
// My Best Friends: Shady, Mahmoud, Ahmed



// Assignment Four
const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
let {age: a4, working: w4, country: c4, hobbies: [h1, , h3]} = member;

console.log(`My Age Is ${a4} And Iam ${w4 ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c4}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming



// Assignment Five
const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
        "Oath In Felghana": ["USA", "Japan"],
        "Ark Of Napishtim": {
            US: "20 USD",
            JAP: "10 USD",
        },
        Origin: "30 USD",
    },
};

// Write Your Destructuring Assignment/s Here
let {title: t5, developer: d5} = game;
let keys = Object.keys(game.releases);
let [o5, a5] = keys;
let {"Oath In Felghana": [u5, j5], "Ark Of Napishtim": {US: u_price, JAP: j_price}, Origin: or} = game.releases;
console.log(keys);

console.log(`My Favourite Games Style Is ${t5} Style`);
// My Favourite Games Style Is YS Style
console.log(`And I Love ${d5} Games`);
// And I Love Falcom Games
console.log(`Although I Love ${a5}`);
// Although I Love Ark Of Napishtim
console.log(`My Best Release Is ${o5} It Released in ${u5} & ${j5}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan
console.log(`${a5} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD
console.log(`${a5} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD
console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD






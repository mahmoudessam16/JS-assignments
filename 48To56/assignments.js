// Assignments From 48 To 53
/* Assignment One */
let start1 = 10;
let end1 = 100;
let exclude = 40;

for (let i = start1; i <= end1; i += start1) {
    if (i === exclude) {
        continue;
    }
    console.log(i);
}
// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100


/* Assignment Two */ 
let start2 = 10;
let end2 = 0;
let stop2 = 3;

for (let i = start2; i > end2; i -= +true) {
    if (i < start2) {
        console.log(`0${i}`);
    } else {
        console.log(i);
    }
    if (i === stop2) {
        break;
    }
}
// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03


/* Assignment Three */
let start3 = 1;
let end3 = 6;
let breaker3 = 2;

for (let i = start3; i <= end3; i++) {
    console.log(i);
    for (let j = breaker3; j < end3; j += breaker3) {
        console.log(`-- ${j}`)
    }
}
// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4


/* Assignment Four */
let index = 10;
let jump = 2;

let i = index;
for (;;) {
  // Write Your Code Here
    console.log(i);
    i -= jump;
    if (i === jump) {
        break;
    }
}
// Output
// 10
// 8
// 6
// 4

/* Assignment Five */ 
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = 1;

for (let i = 0; i < friends.length; i++) {
    if (friends[i][+false] === "A") {
        continue;
    }
    console.log(`${counter} => ${friends[i]}`);
    counter++;
}
// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"


/* Assignment Six */
let start4 = 0;
let swappedName = "elZerO";
let swappedNameArr = swappedName.split("")
let finalWord = [];

for (let i = start4; i < swappedNameArr.length; i++) {
    if (swappedNameArr[i] === swappedNameArr[i].toLowerCase()) {
        swappedNameArr[i] = swappedNameArr[i].toUpperCase();
    } else {
        swappedNameArr[i] = swappedNameArr[i].toLowerCase();
    }
    finalWord.push(swappedNameArr[i]);
}
console.log(finalWord.join(""));
// Output
// "ELzERo"

/* Assignment Seven */
let start5 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start5; i < mix.length; i++) {
    if (typeof mix[i] === 'string' || mix[i] === +true) {
        continue;
    }
    console.log(mix[i]);
}
// Output
// 2
// 3
// 4


// Assignments For Lessons 54 To 56
let friends2 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index2 = 0;
let counter2 = 0;

while (index2 < friends2.length) {
    if (typeof friends2[index2] === 'number' || friends2[index2].startsWith("A")) { 
        index2++;
        continue;
    }
    console.log(`${++counter2} => ${friends2[index2]}`);
    index2++;
}
// Output
"1 => Sayed"
"2 => Mahmoud"
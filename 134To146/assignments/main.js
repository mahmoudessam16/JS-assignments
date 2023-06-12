// Assignment One
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let regexIp = /\d{4}:\w{3}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/g;
console.log(ip.match(regexIp));


// Assignment Two
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let regexSpecialNames = /Os(\d*)O/ig;
console.log(specialNames.match(regexSpecialNames));
// Output
// ['Os10O', 'OsO', 'Os100O']


// Assignment Three
let phone = "+(995)-123 (4567)";
let regexPhone = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g;
console.log(phone.match(regexPhone));


// Assignment Four
let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
/*
    [1] https? => s Letter may be exist or not.
    [2] \/\/ => I have made scaping for those slashs to bring them with url
    [3] (?:[-\w]+\.)? => all inside parentheses may exist or not
    [4] ([-\w]+) => hyphen and all letters after it may be exist or not
    [5] \w+ => letter or more
    [6] (?:\.\w+)? => all inside parentheses may exist or not
*/ 


// Assignment Five
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let reDate = /\d{2}(\/|(\s-\s)|\s)\d{2}(\/|(\s-\s)|\s)(\d{2,4})/g; // Write Pattern Here

console.log(date1.match(reDate)); // "25/10/1982"
console.log(date2.match(reDate)); // "25 - 10 - 1982"
console.log(date3.match(reDate)); // "25 10 1982"
console.log(date4.match(reDate)); // "25 10 82"
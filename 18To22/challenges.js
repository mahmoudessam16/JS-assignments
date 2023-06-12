// Challenge One
let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
/*  
    [++a]
        - value: 11,
        - Explain: pre Increment
    [+] => Just Plus Mark
    [+][b++]
        - First Plus => Type Coersion to convert string to number
        - value: 20,
        - Explain: Post Increment
    [+] => Just Plus Mark
    [+][c++]
        - First Plus => Type Coersion to convert string to number
        - value: 80,
        - Explain: Post Increment
    [-] => Just Minus Mark
    [+][a++]
        - First Plus => Type Coersion to convert string to number
        - value: 10,
        - Explain: Post Increment
*/

console.log(++a + -b + +c++ - -a++ + +a);
/*
    [++a]
        - value: 11,
        - Explain: pre Increment
    [+] => Just Plus Mark
    [-b]
        - value: 20,
        - Explain: type coersion to convert string to number
    [+] => Just Plus Mark
    [+][c++]
        - First Plus => Type Coersion to convert string to number
        - value: 80,
        - Explain: Post Increment
    [-] => Just Minus Mark
    [-][a++]
        First Minus => Unary Negation to convert positive number to negative
        - value: -10,
        - Explain: Post Increment
    [+] => Just Plus Mark
    [+a] 
        - Value: 10,
        - Explain: Unary Plus
*/


// Challenge Two
let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * +e); // 2000
console.log(-d + (++e * ++g) + ++f); // 173
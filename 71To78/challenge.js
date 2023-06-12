let myString1 = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString1.split(",").filter(el => isNaN(parseInt(el))).map(el => el === "_" ? " " : el).join("").slice(true, -isNaN(myString1));

console.log(solution);
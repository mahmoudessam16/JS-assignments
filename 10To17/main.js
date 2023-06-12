// Variables And Concatenation Challenge
let title = "Mahmoud";
let description = "Mahmoud Web School";
let date = "25/10";
let markUp = `
    <div class="parent">
        <h3>${title}</h3>
        <p>${description}</p>
        <span>${date}</span>
    </div>
    <hr>
`;
document.write(markUp.repeat(4));

// Assignment One
let numberOne = 10;
let numberTwo = 20;

// Add Variables Here

// Ouput
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne + "" + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String
console.log(numberOne + "\n" + numberTwo);
/*
    Normal Concatenate
    20
    10
*/
console.log(`${numberOne} 
${numberTwo}    
`);
/*
    Template Literals Way
    20
    10
*/


// Assignment Two
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object


// Assignment Three
console.log("\`I'm In " + "\n" + "\\\\\n" + "Love \\\\ \"\"\" '''\n" + "++ With ++\n" + "\\\"\"\"\\\"\"\"\n" + "\"\"Javascript\"\"``");

// Assignment Three
let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_
// Assignment One
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
      // Write Your Code Here
        return `${zName.slice(0, zName.indexOf(" "))}${zName.slice(zName.indexOf(" "), zName.indexOf(" ") + 2).toUpperCase()}.`;
    }
    function ageWithMessage(zAge) {
      // Write Your Code Here
        return zAge.slice(0, 2);
    }
    function countryTwoLetters(zCountry) {
      // Write Your Code Here
        return zCountry.slice(0, 2).toUpperCase();
    }
    function fullDetails() {
      // Write Your Code Here
        return `Hello ${namePattern(zName)}, Your Age Is ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}`;
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY


// Assignment Two
function itsMe() {
    return `Iam A Normal Function`;
}
let itsMeArrow = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function

function urlCreate(protocol, web, tld) {
    return `${protocol}://www.${web}.${tld}`;
}
let urlCreateArrow = () => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


// Assignment Three
function checker(zName) {
    return function (status) {
        return function (salary) {
            return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
        };
    };
}

let checkerArrow = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble


// Assignment Four
function specialMix(...data) {
    // Your Code Here
    let result = 0;
    for (let i = 0; i < data.length; i++) {
        if (isNaN(parseInt(data[i])) === false) {
            result += parseInt(data[i]);
        } 
    }
    if (result === 0) {
        return "All Is Strings";
    }
    return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings


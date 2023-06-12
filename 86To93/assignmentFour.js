let divOne = document.querySelector('.one');
let divTwo = document.querySelector('.two');
let titleOne = divOne.title;
let titleTwo = divTwo.title;
let oneContent = divOne.textContent; 
let twoContent = divTwo.textContent; 

divOne.title = titleTwo;
divTwo.title = titleOne;
divOne.textContent = twoContent;
divTwo.textContent = `${oneContent} ${document.querySelectorAll('div').length}`;

console.log(divOne);
console.log(divTwo);

// Assignment One
// let msg = prompt("Print Number From – To");
// let controlNums = msg.split("-");
// let start = Math.min(controlNums[0], controlNums[1]);
// let end = Math.max(controlNums[0], controlNums[1]);

// for (let i = start; i <= end; i++)  {
//     console.log(i);
// }


// Assignment Two
let popup = document.querySelector('.popup');
let closeBtn = document.querySelector('i');

setTimeout(() => {
    popup.style.display = 'block';
}, 5000);

closeBtn.onclick = () => {
    popup.style.display = "none";
}
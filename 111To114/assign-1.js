let selectOne = document.querySelector('#one');
let selectTwo = document.querySelector('#two');
let selectThree = document.querySelector('#three');

if (localStorage.getItem("fontFamily")) {
    selectOne.value = localStorage.getItem("fontFamily");
}
if (localStorage.getItem("color")) {
    selectTwo.value = localStorage.getItem("color");
}
if (localStorage.getItem("fontSize")) {
    selectThree.value = localStorage.getItem("fontSize")
}

selectOne.onchange = (e) => {
    localStorage.setItem("fontFamily", e.target.value);
}

selectTwo.onchange = (e) => {
    localStorage.setItem("color", e.target.value);
}

selectThree.onchange = (e) => {
    localStorage.setItem("fontSize", e.target.value);
}
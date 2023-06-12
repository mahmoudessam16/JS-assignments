let addClass = document.querySelector('.classes-to-add');
let removeClass = document.querySelector('.classes-to-remove');
let container = document.querySelector('.classes-list div');

addClass.onblur = addClasses;
function addClasses() {
    if (addClass.value.length > 0) {
        let classesArr = addClass.value.split(" ").sort();
        for (let i = 0; i < classesArr.length; i++) {
            let child = document.createElement("span");
            child.textContent = classesArr[i].toLowerCase();
            container.append(child);
        }
    }
    addClass.value = "";
}
removeClass.addEventListener('blur', removeClasses);

function removeClasses() {
    if (removeClass.value.length > 0) {
        let classesArr = removeClass.value.split(" ");
        for (let i = 0; i < classesArr.length; i++) {
            if (classesArr[i].toLowerCase() === document.querySelector('span').textContent) {
                document.querySelector('span').remove();
            }
        }
    }
    removeClass.value = "";
}
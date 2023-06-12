let form = document.querySelector('form');
let numberOfElements = document.querySelectorAll('.input')[0];
let elementTextContent = document.querySelectorAll('.input')[1];
let tagName = document.querySelector("select");
let results = document.querySelector('.results');


form.onsubmit = () => {
    for (let i = 0; i < numberOfElements.value; i++) {
        let childEle = document.createElement(`${tagName.value}`);
        childEle.className = 'box';
        childEle.title = 'Element';
        childEle.id = `id-${i + 1}`;
        childEle.textContent = elementTextContent.value;
        results.appendChild(childEle);
    }
    return false;
}

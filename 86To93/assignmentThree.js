let input = document.querySelector("[name='dollar']");
let result = document.querySelector(".result");

input.onchange = function () {
    result.innerHTML = `{${this.value}} USD Dollar = {${(this.value * 15.6).toFixed(2)}} Egyptian Pound`
}
console.log(input);
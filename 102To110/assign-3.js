let div = document.querySelector('div');
let counter = setInterval(count , 1000);

function count() {
    div.innerHTML -= 1;
    if (div.innerHTML === "5") {
        window.open("https://elzero.org", "_blank", "width=400, height=500, top=300, left=600")
    }
    if (div.innerHTML === "0") {
        clearInterval(counter);
    }
}
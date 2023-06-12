let ourElement = document.querySelector('.our-element');
ourElement.nextElementSibling.remove();
let preElement = document.createElement('div');
preElement.className = "start";
preElement.title = "Start Element";
preElement.setAttribute('data-value', "Start");
preElement.textContent = "Start";

let endElement = document.createElement('div');
endElement.className = "end";
endElement.title = "End Element";
endElement.setAttribute('data-value', "End");
endElement.textContent = "End";

ourElement.before(preElement);
ourElement.after(endElement)
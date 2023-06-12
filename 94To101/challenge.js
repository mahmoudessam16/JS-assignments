document.body.style.fontFamily = "Arial";
document.body.style.margin = "0px";
let header = document.createElement('header');
header.style.cssText = `
        display: flex; 
        justify-content: space-between; 
        align-items: center;
        padding: 0 20px`;
let logo = document.createElement('div');
let logoText = document.createTextNode("Mahmoud");
logo.appendChild(logoText);
logo.style.cssText = `
        color: #14a714;
        font-weight: bold;
`;
let links = document.createElement('ul');
links.style.cssText = `
        display: flex;
        list-style: none`;

let link1 = document.createElement('li');
let link1Text = document.createTextNode('Home');
link1.appendChild(link1Text);
link1.style.marginLeft = "20px";
link1.style.cursor = "pointer";

let link2 = document.createElement('li');
let link2Text = document.createTextNode('About');
link2.appendChild(link2Text);
link2.style.marginLeft = "20px";
link2.style.cursor = "pointer";

let link3 = document.createElement('li');
let link3Text = document.createTextNode('Service');
link3.appendChild(link3Text);
link3.style.marginLeft = "20px";
link3.style.cursor = "pointer";

let link4 = document.createElement('li');
let link4Text = document.createTextNode('Contact');
link4.appendChild(link4Text);
link4.style.marginLeft = "20px";
link4.style.cursor = "pointer";

links.append(link1, link2, link3, link4);
logo.classList = 'logo';
links.classList = 'links';
header.append(logo, links);


// Start Content
let content = document.createElement("div");
content.className = "content";
content.style.cssText = `
        display: flex;
        justify-content: center;
        padding: 10px;
        flex-wrap: wrap;
        background-color: #f1f1f1;
        margin: 0;
`;
for (let i = 0; i < 15; i++) {
    let product = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.style.margin = "0px";
    let productText = document.createTextNode(`${i + 1}`);
    h1.appendChild(productText);
    let productText2 = document.createTextNode(`Product`);
    let p = document.createElement('p');
    p.style.margin = "0px";
    p.appendChild(productText2);
    product.style.cssText = `
        width: 30%;
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color: white;
        margin: 1%;
        padding: 25px 0;
        border-radius: 10px;
    `;
    product.append(h1, p);
    product.className = "product";
    content.append(product);
}


// Start Footer
let footer = document.createElement("footer");
footer.className = "footer";
let footerText = document.createTextNode(`CopyWrite ${new Date().getFullYear()}`)
footer.appendChild(footerText);
footer.style.cssText = `
        background-color: #14a714;
        color: white;
        height: 65px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold
`;

document.body.append(header, content, footer);

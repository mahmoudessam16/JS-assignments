for (let i = 0; i < 100; i++) {
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let h3Text = document.createTextNode(`[${i}]- This is Product ${i + 1}`);
    let pText = document.createTextNode("Paragraph for product");
    h3.appendChild(h3Text);
    p.appendChild(pText);
    div.appendChild(h3);
    div.appendChild(p);
    document.body.appendChild(div);
}
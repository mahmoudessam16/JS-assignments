async function getData(apiLink) {
    try {
        const resolvedValue = await new Promise((res, rej) => {
            let req = new XMLHttpRequest();
            req.open("GET", apiLink);
            req.send();
            req.onload = function () {
                if (this.readyState === 4 && this.status === 200) {
                    res(JSON.parse(this.responseText));
                } else {
                    rej(Error("Data Isn't found"));
                }
            };
        });
        resolvedValue.length = 10;
        for (let i = 0; i < resolvedValue.length; i++) {
            let div = document.createElement("div");
            let h3 = document.createElement("h3");
            h3.textContent = resolvedValue[i].title;
            let p = document.createElement("p");
            p.textContent = resolvedValue[i].description;
            div.append(h3, p);
            document.querySelector(".articles").append(div);
        }
    } catch (rejectedValue) {
        throw new Error(rejectedValue);
    }
}

getData("articles.json");


// Same Functionality as above, but by another function (fetch, async, await)
fetch("articles.json").then(async data => {
    let articlesArr = await data.json();
    articlesArr.length = 5;
    console.log(articlesArr);
    // Then we have to manipulate the DOM Here!
});


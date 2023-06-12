// Assignment One
let req = new XMLHttpRequest();
req.open("GET", "articles.json");
req.send();

req.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let mainData = JSON.parse(this.responseText);
        let JSONMainData = JSON.stringify(mainData);
        let parentDIV = document.createElement("div");
        parentDIV.id = "data";
        for (let i = 0; i < mainData.length; i++) {
            let childDIV = document.createElement('div');
            let h2Title = document.createElement("h2");
            h2Title.textContent = `Title ${mainData[i].id}`;
            let author = document.createElement("p");
            author.textContent = `---Author: ${mainData[i].writer}`;
            let content = document.createElement("p");
            content.textContent = `--- ${mainData[i].content}`;
            let category = document.createElement("p");
            category.textContent = `--- ${mainData[i].section}`;
            let hr = document.createElement('hr');
            childDIV.append(h2Title, author, content, category, hr);
            parentDIV.append(childDIV);
            document.body.append(parentDIV);
        }
    }
}

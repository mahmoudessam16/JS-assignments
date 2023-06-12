let allImages = document.querySelectorAll("div img");

allImages.forEach((image) => {
    image.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    image.alt = "Elzero Logo";
})
console.log(allImages);
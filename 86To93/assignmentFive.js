let allImages = document.querySelectorAll("img");

allImages.forEach((image) => {
    if (image.hasAttribute('alt')) {
        image.setAttribute('alt', 'Old');
    } else {
        image.setAttribute('alt', 'Elzero New')
    }
})
console.log(allImages);
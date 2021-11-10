function loaded() {
    alert("Изображения загружены");
}
  
function preloadImages(sources, collback) {
    let counter = 0
    sources.forEach(element => {
        let img = document.createElement('img');

        img.onload = img.onerror = () => {
            ++counter;
            if (counter === sources.length) return collback();
           
        };
        img.src = element;
    });
}

let sources = [
    "https://en.js.cx/images-load/1.jpg",
    "https://en.js.cx/images-load/2.jpg",
    "https://en.js.cx/images-load/3.jpg"
];

preloadImages(sources, loaded);
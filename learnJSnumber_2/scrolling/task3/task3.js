// решение не мое ----------------------------------------------------------

// function isVisible(elem) {

//     let coords = elem.getBoundingClientRect();

//     let windowHeight = document.documentElement.clientHeight;

//     // видны верхний ИЛИ нижний край элемента
//     let topVisible = coords.top > 0 && coords.top < windowHeight;
//     let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

//     return topVisible || bottomVisible;
//   }
//   function showVisible() {
// //находим все элементы img в документе
//     for (let img of document.querySelectorAll('img')) {
// //объявляем переменную, равную значению атрибута 'data-src' каждой картинки 
//       let realSrc = img.dataset.src;
// //цикл не работает по img без атрибута 'data-src'
//       if (!realSrc) continue;
// //если верхний или нижний край элемента находится внутри окна, то
//       if (isVisible(img)) {
        
// //элемент отбразится 
//         img.src = realSrc;

//         img.dataset.src = '';
//       }
//     }
//   }

//   window.addEventListener('scroll', showVisible);
//   showVisible();
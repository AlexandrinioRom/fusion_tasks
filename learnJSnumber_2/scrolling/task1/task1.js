// решение не мое -------------------------------------

// document.addEventListener('scroll', scrollHandler);

// fillWindow();

// function scrollHandler(e) {

//   if (scrollBottom() > 50) return;
//   addCurrentDate();
// }

// function fillWindow() {
// // как я понял наполняет видимое окно, пока не появится прокрутка на высоту высоты элемента
// // до этого момента scrollBottom() возвращает 0
//   while (scrollBottom() === 0) {
//     addCurrentDate();
//   }
// }

// function scrollBottom() {
// // высота всего документа - на сколько прокручен - высота видимой части без рамки
//
//   return document.documentElement.scrollHeight - scrollY - document.documentElement.clientHeight;
// }

// function addCurrentDate() {
// // добавляет элемент и вставляет его в боди
//   const p = document.createElement('p');
//   p.textContent = `Date: ${new Date()}`;
//   document.body.append(p);
// }
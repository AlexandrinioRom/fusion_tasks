
// решение не мое ---------------------------------------


// const runOnKeys = (func, ...codes) => {
//     let arr = []
    
//     document.addEventListener('keydown', e => {
        
//         if (event.repeat) return;
        
//         let arrElem = codes.find(code => e.code === code);
//         if (!arrElem) return;
        
//         arr.push(arrElem);
        
//         if (arr.length === codes.length) {
//             func();
//             arr.length = 0;
//         }
//     });
//     document.addEventListener('keyup', function(e) {
//         let index = arr.indexOf(e.code);
//         if (index !== -1) arr.splice(index, 1);
//     });
    
// }    


        

// runOnKeys (()=> console.log(1),'KeyQ','KeyW','KeyE');

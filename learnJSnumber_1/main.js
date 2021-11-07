'use strict';

//------------------------Number - мое решение------------------------

// let a = +prompt('write the fist number')
// let b = +prompt('write the second number')

// const sum = (a,b) => (+(a.toFixed(2)) + +(b.toFixed(2)))

// alert(sum(a,b));


//------------------------String - мои решения-------------------------



// const checkSpam = str => 
//     (str.toLowerCase().includes('viagra') ||
//     str.toLowerCase().includes('xxx')) ?
//     true:false;
// alert(checkSpam('free xxx'));



// const truncate = (str, maxlength) => {
//     return (maxlength < str.length) ?
//     str.slice(0,(maxlength+1 - str.length))+ '…':
//     str
// };

// alert(truncate("Вот, что мне!", 20));


// const styles = ['Джаз','Блюз',]
// styles.push('Рок-н-ролл');

// styles[Math.floor((styles.length - 1) / 2)] = "Классика";

// console.log(styles.shift())
// styles.unshift("Рэп","Рэгги")
// console.log(styles)


//----------------------Object.keys, values, entries - мое решение-------




// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };


// const topSalary = salaries => Object.entries(salaries).length
// console.log(topSalary(salaries));




//----------------------Date - мои решения-----------------------

// function getLastDayOfMonth(year, month) {
//     if (month == 0 ){
//         month = 1
//     }
//     let date = new Date(year, month);
//     let dateCopyMax = 0;
//     let dateCopy = new Date(year, month, dateCopyMax)
    
//     let a = date.getMonth();
//     let b = dateCopy.getMonth();
    
//     while ( a == b) {
//         dateCopyMax++
//     }
//     return   console.log(dateCopy.getDate()); 
// }

// getLastDayOfMonth(2013, 30)



// function getSecondsToTomorrow() {
//     let date = new Date();
//     let dateCopy = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1);
//     let rezult = dateCopy - date;
//     return Math.round(rezult/1000);
// }
// console.log(getSecondsToTomorrow()); 


//---------------------JSON - то что не смог сам решить-----------


// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Совещание",
//     occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//     place: room
//   };
  
//   room.occupiedBy = meetup;
//   meetup.self = meetup;
  
//   alert( JSON.stringify(meetup, function replacer(key, value) {
//     return (key != "" && value == meetup) ? undefined : value;
//   }));
  
  /*
  {
    "title":"Совещание",
    "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
    "place":{"number":23}
  }
  */



// ---------------------Рекурсия - мои решения -----------------------

// function sumTo(n) {
//     if (n == 0){
//         return n 
//     }
//     return n + sumTo(n-1)
// }

// const sumTo = n => (n==0)? n : n + sumTo(n-1);

// function sumTo(n) {
//     let sum = 0;
//     for(let i = 1; i <= n; i++){
//         sum +=i
//     }return sum;
// }



// --------------------Замыкания - мое решение----------------------

//фильтрация с помощью функции 



// function inBetween(a, b) {

//   return function(A) {
//     let c = a <= A;
//     let f = b >= A;
//     let between = (f == c);
//     return between
//   }; 
  
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(2,5)) ); 



//---------------------------Объект функции - мое решение--------------------------



// function makeCounter() {

//   function counter() {
//     return counter.count++;
//   };

//   counter.count = 0;

//   counter.set = a => counter.count = a

//   counter.decrease = () => counter.count--

//   return counter;
  
// }


//-------------------------Декораторы - мои решения --------------------------------





// сложнА - слишком сложнА 



//------------------------Привязка контекста - мои решения ------------------------



// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); - изменил this на user



// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false)); 

//Как я понял --- 
// this - user, arg - true для ok(), false для fail()





//-------------------------


//-------------------------Конструктор --------------------------------


// function Calculator () {
  
//   this.read = function() {
//     this.a = +prompt();
//     this.b = +prompt()
//   }
  
//   this.sum = function (a,b) {
   
//    return this.a + this.b
//   } 
//   this.mul = function(a,b) {
    
//     return this.a * this.b
//   }
// }

// let calculator = new Calculator();

// calculator.read();

// console.log(calculator.mul());



//------------------------------------Класс базовый синтаксис-----------------------------------



// не решил 



//-----------------------------------Наследование классов - мои решения ------------------------




// class Animal {

//   constructor(name) {
//     this.name = name;
//   }

// }

// class Rabbit extends Animal {
//   constructor(name) {

//     super(name); ----------------------------------------Важно
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// alert(rabbit.name);


//----------------------------------Статические свойства и методы------------------------------



// не ломай голову - все просто!!!


// статические свойства и методы - свойства, методы самого класса, которые также наследуются

// пример ниже: 


// const user = {
//   name: 'John',
//   surname: 'Smith',
//   age: 28
// }

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))


// То есть всем известные методы keys, values, entries - методы класса. 
//Условно можно представить, что они записаны следующим образом:



// class Object {
//   // code...

//   static keys(object) {
//     // some code static method
//   }

//   // code...
// }

// ... или же так:

// class Object {
//   // some code class
// }

// Object.keys = function(object) {
//   // some code method
// }




//-------------------------------------Приватные и защищенные методы и свойства--------------------




//  Защищённые поля наследуются и имеют префикс _ - не поддерживается на уровне языка,т.к 
// это простое соглашение. Программисты должны обращаться к полю, начинающемуся с _,
// только из его класса и классов, унаследованных от него.


//  Приватные поля имеют префикс #. JavaScript гарантирует,
// что мы можем получить доступ к таким полям только внутри класса.



//----------------------------------Расширение встроенных классов----------------------------------




// Встроенные классы расширяют друг друга. Но они не могут наследовать статические 
// методы друг друга 




//--------------------------------Проверка класса instanceof --------------------------------------




//Оператор instanceof позволяет проверить,
// к какому классу принадлежит объект, с учётом наследования.


// Работает с классами, функциями-конструкторами и встроенными классами




//-------------------------------Примеси ----------------------------------------------------------





//примесь – это класс, методы которого предназначены для использования в других классах,
// причём без наследования от примеси.

//Примеси могут наследовать друг друга.

//Мы можем использовать примеси для расширения функциональности классов,
// например, для обработки событий

//С примесями могут возникнуть конфликты, если они перезаписывают существующие методы класса.
// Стоит помнить об этом и быть внимательнее при выборе имён для методов примеси, чтобы их избежать.


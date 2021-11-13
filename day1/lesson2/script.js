// const num = 100; //Number
// console.log(typeof num); //number

// const str = 'Str'; //String
// console.log(typeof str); //string

// const bool = true; //Boolean
// console.log(typeof bool); //boolean

// const arr = [1, 2, 3, 4]; //Array
// console.log(Array.isArray(arr));
// console.log(typeof arr); //object

// const obj = { a: 100, b: 200 }; //Object
// console.log(typeof obj); //object

// undefined //undefined
// null // object

//-------------------------------------------------
// Массивы

const arr = [1000, 2000, 3000, 4000];
// console.log(arr);

// arr[5] = 6000;

// console.log(arr[4]);

// for (let i = 0; i < arr.length; i += 1) {
//   console.log(arr[i]);
// }

// for (let item of arr) {
//   console.log(item);
// }

// arr.forEach((item) => {
//   console.log(item);
// });

// console.log(arr);
// arr.push(5000); // добавить в конец
// // arr.push(5000, 6000);
// console.log(arr);

// arr.pop(); // удалить с конца и вернуть
// console.log(arr);

// arr.shift(); // удалить с начала
// console.log(arr);

// arr.unshift(1000); // добавить в начало
// console.log(arr);

// ---------------------------------------------------
// FUNCTIONS

// есть контекст (this)
// глобальная
// можно вызвать до объявления
// function print(text) {
//   console.log('------------------');
//   console.log(text);
//   console.log('------------------');
// }

// print(':)))) kto ya');

// нет контекста (this)
// локальная
// нельзя вызвать до объявления
// const print = (text, num) => {
//   console.log(text);
//   console.log(num);
// };

// print('text', 100);

// -----------------------------------------
// CALLBACK

// const myFunc = (callback) => {
//   console.log(111);
//   callback();
//   console.log(222);
// };

// myFunc(() => {
//   console.log(555);
// });

// -------------------------------------------
// Перебирающие методы массивов

// console.log(arr);

// FOREACH
//проход по массиву
//ничего не возвращает
//не меняет исходный массив

// arr.forEach((element, index, array) => {
//   console.log(element);
//   console.log(index);
//   console.log(array);
// });

// ---------------------------------------------
// MAP
// возвращает новый массив
// не меняет исходный массив

// const newArr = arr.map((element) => (element += 1));
// const newArr2 = arr.map((element) => {
//   return (element += 1);
// });

// console.log(newArr);

// ------------------------------------------------
//FILTER
// возвращает новый массив
// не меняет исходный массив

// const filteredArr = arr.filter((element) => {
//   return element > 2000;
// });

// console.log(filteredArr);

// const words = ['ssdd', 'word', '5lett', 'qweasd'];

// const longWords = words.filter((word) => word.length >= 5);

// console.log(longWords);

// ---------------------------------------------------
// явный возврат / неявный возврат
// только стрелочные функции

// явный возврат
// const sum = (a, b) => {
//   return a + b;
// };

// неявный возврат
// const sum = (a, b) => a + b;

// console.log(sum(1, 2));

// -----------------------------------------------------
// Тернарный оператор

// const a = 1000;

// console.log(a === 1000 ? 'ранво' : 'котлетка');

// ----------------------------------------------------
//Литеральная строка / литеральный оператор

// const name = 'Q';
// const age = 20;
// const hobby = 'Run';

// //Пользователь: Q. Возраст: 20. Хобби: Run
// const resultStr = `Пользователь: ${name}. Возраст: ${age}. Хобиб: ${hobby}!`;
// console.log(resultStr);

// console.log(`a: 100, b: 200, a + b: ${100 + 200}`);

// -------------------------------------------------
// let a = 1000;
// const b = 1000;
// console.log(`a: ${a}, b: ${b}`);

// ------------------------------------------------------------------------
// Асинхронность

// Promise

// let promise = new Promise((resolve, reject) => {
//   if (Math.random() > 0.5) reject('Ошибка');
//   setTimeout(() => {
//     // переведёт промис в состояние fulfilled с результатом "result"
//     resolve('result');
//   }, 3000);
// });

// console.log(1);
// console.log(2);

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const func = async () => {
//   const data = await promise;
//   console.log(data);
// };

// func();

// console.log(4);
// console.log(5);

// fetch('https://api.thecatapi.com/v1/images/search')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const fetchData = async () => {
//   try {
//     const response = await fetch('https://api.thecatapi.com/v1/images/search');
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// fetchData();

// --------------------------------------------------------------------------
// try catch

// console.log(1);

// try {
//   console.log(x);
// } catch (err) {
//   //do nothing
// }

// console.log(2);

// -----------------------------------------------------------------------------
// localStorage

// localStorage.setItem('myData', JSON.stringify({ a: 100, b: 200 }));

// const data = localStorage.getItem('myData');
// const parseData = JSON.parse(data);

// console.log(parseData);

// 1. Створити пустий масив та :
// a. заповнити його 50 парними числами за допомоги циклу.


// let array = [];
// for (let i = 2; i <= 100; i = i + 2) {
//     if (i % 2 == 0) {
//         array.push(i);
//         // console.log(i);
//     }
// }


// b. заповнити його 50 непарними числами за допомоги циклу.


// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 1) {
//         array.push(i);
//         // console.log(i);
//     }
// }


// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)


// for (let i = 0; i < 20; i++) {
//     array.push(Math.floor(Math.random() * 20));
// }
// // console.log(array);


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)


// for (let i = 0; i < 20; i++) {
//     array.push(Math.floor(Math.random() * (732 - 8 + 1)) + 8);
// }
// // console.log(array);


// 2. Вивести за допомогою console.log кожен третій елемен


// for (let i = 0; i < array.length; i+=3) {
//     console.log(array[i]);
// }


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (let i = 0; i < array.length; i+=3) {
//     if (array[i] % 2 == 0) {
//         console.log(array[i]);
//     }
// }


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив


// let arraySecond = [];
// for (let i = 0; i < array.length; i+=3) {
//     if (array[i] % 2 == 0) {
//         console.log(array[i]);
//         arraySecond.push(array[i]);
//     }
// }
// console.log(arraySecond);


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56


// for (let i = 0; i < array.length; i++) {
//     if (array[i + 1] % 2 == 0) {
//         console.log(array[i]);
//     }
// }
// console.log(array);

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.


// let price = 0;
// let array = [100, 250, 50, 168, 120, 345, 188];
// for (let i = 0; i < array.length; i++) {
//     price = price + array[i];
// }
// console.log(price / array.length);


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.


// let arraySecond = [];
// let array = [112, 54, 53, 5443, 11];
// for (let i = 0; i < array.length; i++) {
//     arraySecond.push(array[i] * 5);
// }
// console.log(arraySecond);


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.


// let arraySecond = [];
// let array = [12, 'tesla', true, 435, 'car', false, 567, 'random'];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number') {
//         arraySecond.push(array[i]);
//     }
// }
// console.log(arraySecond);


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]


// let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// for (let i = 0; i < usersWithId.length; i++) {
//     for (let j = 0; j < citiesWithId.length; j++) {
//         if (usersWithId.id == citiesWithId.user_id) {
//             usersWithId[i].adress = citiesWithId[j];
//         }
//     }
// }
// console.log(usersWithId);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//         console.log(array[i]);
//     }
// }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.


// let secondArray = [];
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < array.length; i++) {
//     secondArray.push(array[i]);
// }
// console.log(secondArray);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.


// let array = [ 'a', 'b', 'c'];
// let text = '';
// for (let i = 0; i < array.length; i++) {
//     text = text + array[i];
// }
// console.log(text);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let text = '';
// let i = 0;
// let array = ['a', 'b', 'c'];
// while (i < array.length) {
//     text = text + array[i];
//     i++;
// }
// console.log(text);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово


// let text = '';
// let array = ['a', 'b', 'c'];
// for (let x of array) {
//     text = text + x;
// }
// console.log(text);
//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.


// function concatenation () {
//     let num = arguments[0]
//
//     if (arguments.length === 1) {
//         return arguments[0];
//     }
//     else if (arguments.length === 2) {
//         return num + arguments[1];
//     }
// }
//
// console.log(concatenation(50))
// console.log(concatenation(60, 40))


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]


// function acceptArray(arr1, arr2) {
//     let newArray = [];
//     if (arr1.length === arr2.length) {
//         for (let i = 0; i < arr1.length; i++) {
//             for (let j = 0; j < arr2.length; j++) {
//                 if (i === j) {
//                     newArray.push(arr1[i] + arr2[j]);
//                 }
//             }
//         }
//     }
//     return newArray;
// }
//
// let firstArray = [1, 2, 3, 4];
// let secondArray = [2, 3, 4, 5];
// console.log(acceptArray(firstArray, secondArray));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


// let users = [
//     {name: 'bodya', age: 24, model: 'Audi'},
//     {name: 'oleksandr', age: 23, model: 'Tesla'},
//     {name: 'ihor', age: 22, model: 'BMW'}
// ];
//
// function AcceptArrayObject(arr) {
//     let newArray = [];
//     for (let Element of arr) {
//         for (let key in Element) {
//             newArray.push(key);
//         }
//     }
//     return newArray;
// }
//
// console.log(users);
// console.log(AcceptArrayObject(users));


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let users = [
//     {name: 'bodya', age: 24, model: 'Audi'},
//     {name: 'oleksandr', age: 23, model: 'Tesla'},
//     {name: 'ihor', age: 22, model: 'BMW'}
// ];
//
// function AcceptArrayObject(arr) {
//     let newArray = [];
//     for (let Element of arr) {
//         for (let key in Element) {
//             newArray.push(Element[key]);
//         }
//     }
//     return newArray;
// }
//
// console.log(users);
// console.log(AcceptArrayObject(users));


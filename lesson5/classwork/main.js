// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


// let numMinimum = (num1, num2, num3) => {
//     if (num1 < num2 && num1 < num3) {
//         console.log(num1);
//     } else if (num2 < nu1 && num2 < num3) {
//         console.log(num2);
//     } else {
//         console.log(num3);
//     }
// }
// numMinimum(5, 10, 15);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)


// let numMaximum = (num1, num2, num3) => {
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1);
//     } else if (num2 > num1 && num2 > num3) {
//         console.log(num2);
//     } else {
//         console.log(num3);
//     }
// }
// numMaximum(5, 10, 15);


// - створити функцію яка повертає найбільше число з масиву


// let arrayMaximum = [12, 5342, 11, 612, 611, 1224, 8745, 121, 356, 622];
// let maxArray = (array) => {
//     let max = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement > max) {
//             max = arrayElement;
//         }
//     }
//     return max;
// }
// document.write(maxArray(arrayMaximum));


// - створити функцію яка повертає найменьше число з масиву


// let arrayMinimum = [12, 5342, 11, 612, 611, 1224, 8745, 121, 356, 622];
// let minArray = (array) => {
//     let min = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement < min) {
//             min = arrayElement;
//         }
//     }
//     return min;
// }
// document.write(minArray(arrayMinimum));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


// let arrayNumbers = [1, 4, 2, 15, 11, 18];
// let sumNumbers = (array) => {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum = arrayElement + sum;
//     }
//     return sum;
// }
// document.write(sumNumbers(arrayNumbers));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


// let arrayNumber = [2, 5, 6, 25, 15, 1];
// let mediumOfNumbers = (array) => {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum = arrayElement + sum;
//     }
//     return sum/array.length;
// }
// document.write(mediumOfNumbers(arrayNumber));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// let minMax = (...arg) => {
//     let min = arg[0];
//     let max = arg[0];
//     for (const element of arg) {
//         if (element > max) {
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log(max);
//     return min;
// }
// document.write(minMax(44, 16, 2, 1516));


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


// let random = (array) => {
//     let arrayRandom = [];
//     for (let i = 0; i < array; i++) {
//         arrayRandom.push(Math.floor(Math.random() * 100));
//     }
//     return arrayRandom;
// }
// document.write(random(20));


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.


// let random = (min, limit) => {
//     let array = [];
//     for (let i = 0; i < min; i++) {
//         array.push(Math.round(Math.random() * limit));
//     }
//     return array;
// }
// document.write(random(20, 200));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


// let array = [10, 15, 20, 25];
// let reverse = (arr) => {
//     let newArray = [];
//     for (let i = arr.length - 1, j = 0; i >= 0; i--, j++ ) {
//     newArray[j] = arr[i];
//     }
//     return newArray;
// }
// let a = reverse(array);
// console.log(a);


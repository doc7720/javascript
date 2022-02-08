// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


// function numberMinimum(number1, number2, number3) {
//     if (number1 < number2 && number1 < number3) {
//         console.log(number1);
//     } else if (number2 < number1 && number2 < number3) {
//         console.log(number2);
//     } else {
//         console.log(number3);
//     }
// }
// numberMinimum(10, 25, 5);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)


// function numberMaximum(number1, number2, number3) {
//     if (number1 > number2 && number1 > number3) {
//         console.log(number1);
//     } else if (number2 > number1 && number2 > number3) {
//         console.log(number2);
//     } else {
//         console.log(number3);
//     }
// }
// numberMaximum(10, 25, 5);


// - створити функцію яка повертає найбільше число з масиву


// let arrayMaximum = [12, 45, 216, 1, 9494, 121291, 562, 121, 3151, 111];
// function maxArray(array) {
//     let maximum = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement > maximum) {
//             maximum = arrayElement;
//         }
//     }
//     return maximum;
// }
// document.write(maxArray(arrayMaximum));


// - створити функцію яка повертає найменьше число з масиву


// let arrayMinimum = [12, 45, 216, 1, 9494, 121291, 562, 121, 3151, 111];
// function minArray(array) {
//     let minimum = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement < minimum) {
//             minimum = arrayElement;
//         }
//     }
//     return minimum;
// }
// document.write(minArray(arrayMinimum));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


// let arraySum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function SumElements (array) {
//     let sum = 0;
//     for (const arrayElement of array) {
//     sum = arrayElement + sum;
//     }
//     return sum;
// }
// document.write(SumElements(arraySum));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


// let arrayMedium = [12, 28, 20];
// function mediumElements(array) {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum = arrayElement + sum;
//     }
//     return sum/array.length;
// }
// document.write(mediumElements(arrayMedium));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// function minMax() {
//     let min = arguments[0];
//     let max = 0;
//     for (const element of arguments) {
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
// document.write(minMax(20, 55, 11, 155, 2512,));


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


// function random(array) {
//     let arrayRandom = [];
//     for (let i = 0; i < array; i++) {
//     arrayRandom.push(Math.floor(Math.random()*100));
//     }
//     return arrayRandom;
// }
// document.write(random(10));


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.


// function random(min, limit) {
//     let array = [];
//     for (let i = 0; i < min; i++) {
//     array.push(Math.round(Math.random() * limit));
//     }
//     return array;
// }
// document.write(random(20, 100));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


// let array = [12, 14, 15, 17];
// function reverse(arr) {
//     let newArray=[];
//     console.log(arr);
//     for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
//         console.log(i)
//           newArray[j] = arr[i];
//     }
//     return newArray;
// }
// let a = reverse(array);
// console.log(a);
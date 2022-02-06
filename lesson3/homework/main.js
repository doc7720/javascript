// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


// let number = [25, 55, 798, 1231, 31253];
// let text = ['car', 'music', 'bus', 'phone', 'sport'];
// let different = ['apple', 454, true, false, 12223];
// console.log(number);
// console.log(text);
// console.log(different);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль


// let array = [];
// array[0] = 'apple';
// array[1] = 'tomato';
// array[2] = 'orange';
// console.log(array);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Tesla</div>`);
// }
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i} - model S</div>`);
// }
//
// let k = 0;
// while (k < 20) {
//     document.write(`<h1>model X</h1>`);
//     k++;
// }
//
// let m = 0;
// while (m < 20) {
//     document.write(`<h1>${m} - model 3</h1>`);
//     m++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


// let numberArray = [12, 23, 44, 55, 66, 76, 324, 232, 1231, 565];
// for (let i = 0; i < numberArray.length; i++) {
//    console.log(numberArray[i]);
// }

// let textArray = ['apple', 'plum', 'banana', 'orange', 'pear', 'peach', 'cherry', 'grapes', 'melon', 'apricot'];
// for (let i = 0; i < textArray.length; i++) {
//     console.log(textArray[i]);
// }

// let difficultArray = [54, 'moto', true, 343, 'phone', false, 666, 'car', 3672, 'house'];
// for (let i = 0; i < difficultArray.length; i++) {
//     console.log(difficultArray[i]);
// }

// let booleanArray = [54, 'moto', true, 343, 'phone', false, 666, 'car', 3672, 'house'];
// for (let i = 0; i < booleanArray.length; i++) {
//     if (typeof booleanArray[i] === 'boolean') {
//         console.log(booleanArray[i]);
//     }
// }

// let numberArray = [54, 'moto', true, 343, 'phone', false, 666, 'car', 3672, 'house'];
// for (let i = 0; i < numberArray.length; i++) {
//     if (typeof numberArray[i] === 'number') {
//         console.log(numberArray[i]);
//     }
// }

// let stringArray = [54, 'moto', true, 343, 'phone', false, 666, 'car', 3672, 'house'];
// for (let i = 0; i < stringArray.length; i++) {
//     if (typeof stringArray[i] === 'string') {
//         console.log(stringArray[i]);
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


// let array = [];
// array[0] = 25;
// array[1] = 'phone';
// array[2] = true;
// array[3] = 666;
// array[4] = 'plain';
// array[5] = false;
// array[6] = 6221;
// array[7] = 'snow';
// array[8] = 932;
// array[9] = 'holiday';
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// for (let i = 1; i < 10; i++) {
//     console.log(i);
//     document.write(`${i}`);
// }

// for (let i = 1; i < 100; i++) {
//    console.log(i);
//     document.write(`${i} <br>`);
// }

// for (let i = 1; i < 100; i+=2) {
//    console.log(i);
//     document.write(`${i} <br>`);
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(`${i} <br>`);
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 1) {
//         console.log(i);
//         document.write(`${i} <br>`);
//     }
// }
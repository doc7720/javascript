// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою


// let squareRectangle = (a, b) => {return a * b}
// console.log(squareRectangle(5, 5));


// - створити функцію яка обчислює та повертає площу кола


// let squareCircle = (r) => {
//     let radius = r ** 2;
//     return 3.14 * radius;
// }
// console.log(squareCircle(7));


// - створити функцію яка обчислює та повертає площу циліндру


// let squareCylinder = (r, h) => {return 2 * 3.14 * r * h;}
// console.log(squareCylinder(5, 10));


// - створити функцію яка приймає масив та виводить кожен його елемент


// let array = [5, 10, 15, 20, 25, 'tesla', 'okten', 'iphone', true, false];
// let fnArray = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }
// fnArray(array);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент


// let createParagraph = (text) => {
//     document.write(`<p>${text}</p>`);
//     document.write(`<p>${text}</p>`);
//     document.write(`<p>${text}</p>`);
// }
// createParagraph(`okten`);


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


// let createElements = (arg) => {
//     document.write(`<ul>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`</ul>`);
// }
// createElements(`okten`);


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


// let createElements = (arg, number) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < arg.length; i++) {
//         document.write(`<li>${arg}</li>`);
//     }
//     document.write(`</ul>`);
// }
// createElements(`okten`, 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// let allArray = [5, 10, 15, 20, 25, 'tesla', 'okten', 'iphone', true, false];
// let primitive = (array) => {
//     document.write(`<ol>`);
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ol>`);
// }
// primitive(allArray);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


// let arrayObjects = [{id: 1, name: 'Bodya', age: 24}, {id: 2, name: 'Petro', age: 20}, {id: 3, name: 'Vasya', age: 22}];
// let acceptObjects = (array) => {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id}. ${arrayElement.name} - ${arrayElement.age}</div>`);
//     }
// }
// acceptObjects(arrayObjects);
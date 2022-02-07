// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


// function calculateRectangle(a, b) {
//     let squareRectangle = a * b;
//     return squareRectangle;
// }
// console.log(calculateRectangle(5,5));


// - створити функцію яка обчислює та повертає площу кола з радіусом r


// function calculateCircle(r) {
//     let radiusCircle = r ** 2;
//     let squareCircle = 3.14 * radiusCircle;
//     return squareCircle;
// }
// console.log(calculateCircle(5));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r


// function calculateCylinder(r, h) {
//     let squareCylinder = 2 * 3.14 * r * h;
//     return squareCylinder;
// }
// console.log(calculateCylinder(5, 10));


// - створити функцію яка приймає масив та виводить кожен його елемент


// let array = [12, 15, 432, 'phone', 'car', 'yellow'];
// function arrayElements(array) {
//     for (let i = 0; i < array.length; i++) {
//         document.write(array[i]);
//     }
// }
// arrayElements(array);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент


// function createText(text) {
//     document.write(`<p>${text}</p>`);
//     document.write(`<p>${text}</p>`);
//     document.write(`<p>${text}</p>`);
// }
// createText(`okten`);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


// function createText(text) {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// createText(`okten`);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


// function createText(text, number) {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// createText(`okten`, 10);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// let array = [12, 15, 432, 'phone', 'car', 'yellow', true, false];
// function createList(array) {
//     document.write(`<ol>`);
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ol>`);
// }
// createList(array);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


// let createArray = [{id: 1, name: 'Bohdan', age: 24}, {id: 2, name: 'Oleksandr', age: 22}, {id: 3, name: 'Oleh', age: 23} ];
// function arrayObject(array) {
//     for (const arrayElement of array) {
//     document.write(`<div>${arrayElement.id}. ${arrayElement.name} - ${arrayElement.age}</div>`);
//     }
// }
// arrayObject(createArray);
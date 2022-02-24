// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


// let divFirst = document.createElement('div');
// divFirst.innerText = 'Write text';
// document.body.appendChild(divFirst);
// let divSecond = document.createElement('div');
// divSecond.innerText = 'Enter text  ';
// document.body.appendChild(divSecond);
//
// let formFirst = document.createElement('form');
// formFirst.setAttribute('name', 'formFirst');
// divFirst.appendChild(formFirst);
//
// let formSecond = document.createElement('form');
// formSecond.setAttribute('name', 'formSecond');
// divSecond.appendChild(formSecond);
//
// let inputFirst = document.createElement('input');
// inputFirst.setAttribute('name', 'inputFirst');
//
// let inputSecond = document.createElement('input');
// inputSecond.setAttribute('name', 'inputSecond');
//
// let inputThird = document.createElement('input');
// inputThird.setAttribute('name', 'inputThird');
//
// let inputFourth = document.createElement('input');
// inputFourth.setAttribute('name', 'inputFourth');
//
// let button = document.createElement('button');
// button.innerText = 'sent';
//
// document.body.appendChild(button);
//
// formFirst.append(inputFirst, inputSecond);
// formSecond.append(inputThird, inputFourth);
//
//
// button.addEventListener('click', function () {
//     console.log(document.forms.formFirst.inputFirst.value);
//     console.log(document.forms.formFirst.inputSecond.value);
//     console.log(document.forms.formSecond.inputThird.value);
//     console.log(document.forms.formSecond.inputFourth.value);
// });


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


// let inputFirst = document.createElement('input');
// let inputSecond = document.createElement('input');
// let inputThird = document.createElement('input');
// let button = document.createElement('button');
//
// button.innerText = 'Create';
// document.body.append(inputFirst, inputSecond, inputThird, button);
//
//
// button.addEventListener('click', function () {
//     let tr = inputFirst.value;
//     let td = inputSecond.value;
//     let enterText = inputThird.value;
//
//     function generationTable(tr, td, inner) {
//         let table = document.createElement('table');
//         let divTable = document.createElement('div');
//
//         table.style.border = '1px solid blue';
//         divTable.appendChild(table);
//         document.body.appendChild(divTable);
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             tr.style.border = '1px solid red';
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.style.border = '1px solid yellow';
//                 td.innerText = `${inner}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//
//     generationTable(tr, td, enterText);
// });


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку


// let array = ['dog', 'cat', 'rat'];
// let input = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'Sent';
// document.body.append(input, button);
//
// button.addEventListener('click', function () {
//     let a = input.value;
//
//     for (let arr of array) {
//         if (arr === a) {
//             alert('It`s a bad word');
//             input.value = '';
//             return;
//         }
//     }
//
//     if (a) {
//         alert('All is well');
//         input.value = '';
//     }
// });
//
//

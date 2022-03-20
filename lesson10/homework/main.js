// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let disappear = document.getElementById('text');
// let button = document.getElementById('btn');
// button.onclick = function () {
//     disappear.style.display = 'none';
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button2 = document.getElementById('btn2');
// button2.onclick = function () {
//     button2.style.display = 'none';
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let button3 = document.getElementById('btn3');
// button3.onclick = function () {
//     let age = document.getElementById('age').value;
//     if (!age) {
//         alert('You don`t write your age');
//     } else if (age < 18) {
//         alert('You are not old enough');
//     } else {
//         alert('Welcome');
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике

let menuDiv = document.querySelector('.menu');
let listH1 = menuDiv.querySelector('.title');

listH1.onclick = function () {
    menuDiv.classList.toggle('hidden');
}


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
];
//
let divCreate = document.createElement('div');
for (const element of comments) {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    let hr = document.createElement('hr');

    h3.innerText = element.title;
    p.innerHTML = element.body;
    btn.innerHTML = 'Hide';

    btn.onclick = () => {
        p.classList.add('pHidden');
    }
    div.append(h3, p, btn);
    divCreate.append(div, hr);
}
document.body.appendChild(divCreate);



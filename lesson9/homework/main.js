// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


// let div = document.createElement('div');
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');
// div.style.backgroundColor = 'yellow';
// div.style.color = 'blue';
// div.style.fontSize = '50px';
// document.body.appendChild(div);
// document.body.appendChild(div.cloneNode(true));


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.


// let menuArr = ['Main', 'Products', 'About us', 'Contacts'];
// let menuCreate = document.getElementsByClassName('menu')[0];
// for (const key of menuArr) {
// let liCreate = document.createElement('li');
// liCreate.innerText = key;
// menuCreate.appendChild(liCreate);
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


// for (const object of coursesAndDurationArray) {
//     let divCreate = document.createElement('div');
//     divCreate.innerText = `${object.title} ${object.monthDuration}`;
//     document.body.appendChild(divCreate);
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


// for (const object of coursesAndDurationArray) {
//     let divCreate = document.createElement('div');
//     let h1Create = document.createElement('h1');
//     h1Create.innerText = object.title;
//     let pCreate = document.createElement('p');
//     pCreate.innerText = object.monthDuration;
//     divCreate.appendChild(h1Create);
//     divCreate.appendChild(pCreate);
//     document.body.appendChild(divCreate);
// }

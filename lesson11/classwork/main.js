// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.


const favoritesKey = 'favorites';
localStorage.setItem(favoritesKey, JSON.stringify([]));
const container = document.getElementById('container');

users.forEach(user => {
    let createDiv = document.createElement('div');
    createDiv.className = 'user';
    let createDivSecond = document.createElement('div');
    createDiv.innerText = `Name: ${user.name}\nAge: ${user.age}\nStatus: ${user.status}`
    let button = document.createElement('button');
    button.innerText = 'Add to favorites';
    button.onclick = () => {
        const favorites = JSON.parse(localStorage.getItem(favoritesKey));
        favorites.push(user);
        localStorage.setItem(favoritesKey, JSON.stringify(favorites));
        button.disabled = true;
    }
    createDiv.append(createDivSecond, button);
    container.appendChild(createDiv);
})
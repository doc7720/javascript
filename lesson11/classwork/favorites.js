const favoritesKey = 'favorites';
const container = document.getElementById('container');
const users = JSON.parse(localStorage.getItem(favoritesKey));

users.forEach(user => {
    let createDiv = document.createElement('div');
    createDiv.className = 'user';
    let createDivSecond = document.createElement('div');
    createDivSecond.innerText = `Name: ${user.name}\nAge: ${user.age}\nStatus: ${user.status}`;
    createDiv.appendChild(createDivSecond);
    container.appendChild(createDiv);
})
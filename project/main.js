let container = document.getElementsByClassName('users')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const item of value) {
            let createDiv = document.createElement('div');
            createDiv.classList.add('user');
            let force = document.createElement('a');
            force.innerText = `${item.id} - ${item.name}`;
            force.href = `./user-details.html?data=${JSON.stringify(item)}`;
            createDiv.appendChild(force);
            container.appendChild(createDiv);
        }
    });
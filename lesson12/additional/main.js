// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(users => {
        let createDiv = document.createElement('div');
        createDiv.classList.add('newClass');
        for (const user of users) {
            let createDivSecond = document.createElement('div');
            createDivSecond.classList.add('user');
            createDivSecond.innerHTML = `
            <h4>id: ${user.id}</h4>
            <h3>Name: ${user.name}</h3>
            <p>Username: ${user.username}</p>
            <h5>Email: ${user.email}</h5>`;

            let button = document.createElement('button');
            button.innerText = 'Click';
            button.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    .then(users => {
                        if (user.id === user.id) {
                            let createDivThird = document.createElement('div');
                            createDivThird.classList.add('createDivThird');
                            createDivThird.innerHTML = `
            <h3>Address:</h3>
            <h5>Street: ${user.address.street}</h5>
            <h5>Suite: ${user.address.suite}</h5>
            <h5>City ${user.address.city}</h5>
            <h5>Zipcode: ${user.address.zipcode}</h5>
            <h3>Geo:</h3>
            <h5>lat: ${user.address.geo.lat}</h5>
            <h5>lng: ${user.address.geo.lng}</h5>
            <h4>Phone: ${user.phone}</h4>
            <h4>Website: ${user.website}</h4>
            <h3>Company:</h3>
            <h5>Name: ${user.company.name}</h5>
            <h5>catchPhrase: ${user.company.catchPhrase}</h5>
            <h5>bs: ${user.company.bs}</h5>
                     `;
                            createDivSecond.appendChild(createDivThird)
                        }
                        button.disabled = true;
                    })
            }
            createDivSecond.appendChild(button);
            createDiv.appendChild(createDivSecond);
            document.body.appendChild(createDiv);
        }
    });
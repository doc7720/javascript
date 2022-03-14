// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(posts => {
        let createDiv = document.createElement('div');
        createDiv.classList.add('newClass');
        for (const post of posts) {
            let createDivSecond = document.createElement('div');
            createDivSecond.classList.add('post');
            createDivSecond.innerHTML = `
            <h4>id: ${post.id}</h4>         
            <h3>Title: ${post.title}</h3>           
            <p>Body: ${post.body}</p>       
                `;
            createDiv.appendChild(createDivSecond);
            document.body.appendChild(createDiv);
        }
    });

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
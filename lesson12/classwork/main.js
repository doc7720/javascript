// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

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
            <p>Body: ${post.body}</p>`;

            let button = document.createElement('button');
            button.innerText = 'Click';
            button.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                    .then(response => response.json())
                    .then(comments => {
                        for (const comment of comments) {
                            if (post.id === comment.postId) {
                                let createDivThird = document.createElement('div');
                                createDivThird.classList.add('createDivThird');
                                createDivThird.innerHTML = `
            <h3>Id: ${comment.id}</h3>
            <h4>Name: ${comment.name}</h4>
            <h5>Email: ${comment.email}</h5>
            <h6>Body: ${comment.body}</h6>
                `;
                                createDivSecond.appendChild(createDivThird)
                            }
                            button.disabled = true;
                        }
                    })
            }
            createDivSecond.appendChild(button);
            createDiv.appendChild(createDivSecond);
            document.body.appendChild(createDiv);
        }
    });
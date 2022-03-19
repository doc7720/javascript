let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('data'));

let container = document.getElementsByClassName('post')[0];
container.innerText = JSON.stringify(post);
let createDiv = document.getElementsByClassName('comment')[0];
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(value => {
        for (const comment of value) {
            let createLi = document.createElement('li');
            createLi.innerText = comment.body;
            createDiv.appendChild(createLi);
        }
    })
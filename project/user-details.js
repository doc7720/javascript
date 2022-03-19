let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));

let container = document.getElementsByClassName('user-details')[0];
let thirdContainer = document.getElementsByClassName('posts')[0];
let postButton = document.getElementsByClassName('postButton')[0];
container.innerText = `${JSON.stringify(user)}`;
postButton.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(value => {
            for (const item of value) {
                let secondContainer = document.createElement('div');
                secondContainer.classList.add('post');
                secondContainer.innerText = item.title;
                let secondBtn = document.createElement('button');
                secondBtn.innerText = 'post';
                secondBtn.onclick = function () {
                    location.href = `./post-details.html?data=${JSON.stringify(item)}`;
                }
                secondContainer.appendChild(secondBtn);
                thirdContainer.appendChild(secondContainer);
                postButton.disabled = true;
            }
        })
}
container.appendChild(postButton);
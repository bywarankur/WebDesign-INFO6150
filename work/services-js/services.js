let posts = [];
const list = document.querySelector(".posts");
let lastOpenComment = 1;

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
        posts = data;
        render();
    });

function render() {
    list.innerHTML = posts
        .map(
            (post) =>
                `<li>
            <a href ="#" id="${post.id}" class = "post-btn" name= "post" onclick = "getpostcomments(${post.id}) ">${post.title}</a>
           
            <p>${post.title}</p>
            <p>${post.body}</p>
            <p data-comment="${post.id}" class="hideEle"></p>
        </li>`
        )
        .join("");
}

function getpostcomments(id) {
    fetchComments(id)
        .then((responseData) => {
            comments = responseData;

            renderComments(id);
            showComments(lastOpenComment, id);

            lastOpenComment = id;
        })
        .catch((err) => {});
}

function fetchComments(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        method: "GET",
    })
        .catch(() => {
            return promise.reject({
                code: "network-error",
            });
        })
        .then((response) => {
            if (response.ok) {
           
                return response.json();
            }
            return response.json().then((err) => promise.reject(err));
        });
}

let comments = [];
function renderComments(id) {
    const post = document.querySelector(`[data-comment="${id}"]`);
    post.innerHTML = comments
        .map(
            (comment) =>
                `<ul>
                <p class = "name" >${comment.name}</p>
                <p class="comments">${comment.body}</p>

   </ul>`
        )
        .join(" ");
}
function showComments(lastOpenComment, id) {
    const ulEle = document.querySelector(`[data-comment="${lastOpenComment}"]`);
    ulEle.classList.add("hideELe");
    document
        .querySelector(`[data-comment="${id}"]`)
        .classList.remove("hideELe");
}






























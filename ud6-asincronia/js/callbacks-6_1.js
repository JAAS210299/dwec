const posts = [
    { title: "Post1", body: "This is post one" },
    { title: "Post2", body: "This is post two" }
];

function getPosts() {
    setTimeout(() => {
        let output = ``;
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(newPost, callback) {
    setTimeout(() => {
        posts.push(newPost);
        callback(); // Llamamos a getPosts cuando se termina de agregar el nuevo post
    }, 2000);
}

createPost({ title: "Post3", body: "This is post three" }, getPosts);

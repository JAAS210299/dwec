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

function createPost(newPost) {
    return new Promise((resolve) => {
        setTimeout(() => {
            posts.push(newPost);
            resolve();
        }, 2000);
    });
}

async function init() {
    await createPost({ title: "Post3", body: "This is post three" });
    getPosts();
}

init();

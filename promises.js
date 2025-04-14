// "https://jsonplaceholder.typicode.com/todos"

async function getPosts(limit) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let posts = await response.json()
    posts = posts.slice(0, limit)
    return posts
}

getPosts(3)
    .then((posts) => console.log(posts))

async function getJSONPosts(url) {
    return fetch(url).then(reponse => reponse.json())
}

getJSONPosts("https://jsonplaceholder.typicode.com/todos")
    .then((result) => {
        console.log(result)
    })



async function getPosts() {
    const postDataContainer = document.getElementById('post-data');
    postDataContainer.innerHTML = ''; // Limpiar contenido anterior
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Error en la red');
        }
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        postDataContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function displayPosts(posts) {
    const postDataContainer = document.getElementById('post-data');
    const ul = document.createElement('ul');
    posts.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${post.title}</strong><p>${post.body}</p>`;
        ul.appendChild(li);
    });
    postDataContainer.appendChild(ul);
}
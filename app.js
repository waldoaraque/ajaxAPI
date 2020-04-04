const loadPost = document.getElementById('cargar').addEventListener('click', loadAPI)

function loadAPI() {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)

    xhr.onload = () => {
        if (this.status === 200) {
            const res = JSON.parse(this.responseText)
            let content = ''

            res.forEach(post => {
                content += `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `
            })

            document.getElementById('listado').innerHTML = content
        }
    }

    xhr.send()
}


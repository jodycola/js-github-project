const url = "https://api.github.com/search/users?q="
const form = document.querySelector("#github-form")
let input

form.addEventListener('submit', search)

function search(e) {
    e.preventDefault()
    let input = e.target[0].value

    fetch (`${url}${input}`)
        .then(res => res.json())
        .then(data => console.log(data))
}

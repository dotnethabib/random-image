
const btn = document.querySelector("button");

// const img = document.querySelector("img");
const img = document.getElementById("img");

const img_store = ['img/pic1.jpeg', 'img/pic2.jpeg', 'img/pic3.jpeg', 'img/pic4.jpeg',]


btn.addEventListener("click", random_IMG)

function random_IMG() {
    console.log(img)
    let randomimg = Math.floor(Math.random() * img_store.length);
    img.src = img_store[randomimg];
}

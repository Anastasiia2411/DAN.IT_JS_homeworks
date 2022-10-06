"use strict"

let btns = document.querySelectorAll(".btn");

document.body.addEventListener('keypress', (e) => {
    for (let i of btns) {
        if (i.textContent.toLowerCase() === e.key.toLowerCase()) {
            i.classList.add("pressBtn");
        }else{
            i.classList.remove("pressBtn");
        }
    }
})



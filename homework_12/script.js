// Чому для роботи з input не рекомендується використовувати клавіатуру?
//на современных устройствах есть и другие возможности ввода(не через клавиатуру: голосовой ввод и др)
//потому если мы хотим корректно отслеживать вводимые данный только одной клавиатуры будет не достаточно


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



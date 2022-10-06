"use strict"

function checkValue(firstEl, secondEl) {
    if (secondEl.nextSibling.textContent) {
        secondEl.nextSibling.textContent = "";
    }
    if (firstEl.value === secondEl.value) {
        alert("You are welcome!")
    } else {
        let paragraph = document.createElement("p");
        paragraph.textContent = "Потрібно ввести однакові значення";
        paragraph.style.color = "red";
        secondEl.after(paragraph);
    }
}

let icons = document.querySelectorAll(".icon-password")
let btn = document.querySelector(".btn")

icons.forEach(el => {
    el.addEventListener("click", (e) => {
        let activeEl = e.target;
        FindEl(activeEl)
        activeEl.classList.toggle("fa-eye-slash");
        function FindEl(el) {
            let atrName = el.dataset.find;
            let newEl = document.getElementById(atrName);
            let atrEl = newEl.getAttribute("type")
            if (atrEl === "password" && activeEl.classList.contains("fa-eye-slash")) {
                newEl.setAttribute("type", "text");
            } else {
                newEl.setAttribute("type", "password")
            }
        }
    })
})

btn.addEventListener("click", (e) => {
    let first_input = document.getElementById("first-el");
    let second_input = document.getElementById("second-el");
    checkValue(first_input, second_input)
    e.preventDefault();
})


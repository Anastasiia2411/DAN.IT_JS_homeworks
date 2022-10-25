"use strict"
let input = document.createElement("input")
input.setAttribute("type", "number")
input.setAttribute("placeholder", "Price")
document.addEventListener("DOMContentLoaded", () => {
    document.body.append(input);
})
input.onfocus = function () {
    input.style.border = "3px solid #7CFC00";
    input.style.outline = "none";
}
input.onblur = function () {
    let p = document.createElement("p");
    p.textContent = "Please enter correct price";
    let div = document.createElement("div")
    if (input.value <= 0 || input.value === "" || input.value === ",") {
  console.log(input.value)
        if (input.previousElementSibling) {
            input.previousElementSibling.remove()
        }
        if (input.nextElementSibling !== null) {
            input.nextElementSibling.remove()
        }
        input.style.color = "#ff0000"
        input.style.border = "3px solid #ff0000";
        input.style.outline = "none";
        input.style.color = "#ff0000"
        p.style.color = "#ff0000";
        document.body.append(p)
    } else if (input.value > 0) {
        if (input.nextElementSibling) {
            input.nextElementSibling.remove()
        }
        if (input.previousElementSibling !== null) {
            input.previousElementSibling.remove()
        }
        input.style.color = "#7CFC00"
        input.style.border = null;
        input.style.outline = null;
        let valueInput = input.value;
        document.body.prepend(div)
        let span = document.createElement("span");
        span.textContent = `Поточна ціна: ${valueInput}.`;
        span.style.color = "#ff0000";
        div.prepend(span);
        let button = document.createElement("button");
        button.style.border = "none"
        button.style.background = "none"
        button.style.color = "#ff0000"
        button.style.textTransform = "uppercase"
        button.textContent = "x"
        span.after(button);
        button.addEventListener("click", () => {
            input.value = " ";
            button.remove()
            span.remove()
        })
    }
}

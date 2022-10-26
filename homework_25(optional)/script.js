"use strict"
let a = "";// first number
let b = "";// second number
let sign = ""; // знак операции
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "*", "/"];
let count = 1
// получаем наш input куда вводим значения
let out = document.getElementById("screen")
let div = document.querySelector(".keys");
div.addEventListener("click", (event) => {
    //нажата не кнопка
    if (!event.target.classList.contains("button")) {
        return
    }
    out.textContent = "";

    const key = event.target.value
    if (digit.includes(key)) {
        if (b === "" && sign === "") {
            a += key
            out.value = a
        } else if (a !== "" && b !== "" && finish) {
            b = key
            console.log(b)
            finish = false
            out.value = b
        } else {
            b += key
            out.value = b
        }
        return
    }

    if (action.includes(key) && count % 2 !== 0) {
        count++
        sign = key
        return
    }

    if (key === "=" || key === "+" && count % 2 === 0 || key === "-" && count % 2 === 0 || key === "*" && count % 2 === 0 || key === "/" && count % 2 === 0) {
        console.log(count)
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break
            case "-":
                a = (+a) - (+b);
                break
            case "*":
                a = a * b;
                break
            case "/":
                if (b === "0") {
                    out.value = "Error"
                    a = "";
                    b = "";
                    sign = "";
                    return;
                }
                a = a / b;
                break
        }
        finish = true
        out.value = a
        count++
        console.log(a, sign, b)
    }
})

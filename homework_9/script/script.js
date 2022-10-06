"use strict"

function createList(arr, domEl = document.body) {
    function mapToEl(arr) {
        let container = document.createElement("ul");
        container.append(...arr.map((el) => {
            if (Array.isArray(el)) {
                return mapToEl(el);
            } else {
                let li = document.createElement("li");
                li.textContent = el;
                return li
            }
        }))
        return container
    }

    let func = mapToEl(arr);
    domEl.append(func);
}


createList(["hello", "world", "Kiev", [1, 3, [1, 2, [1, 2]]], "Kharkiv", "Odessa", "Lviv"]);


let div = document.createElement("div");
div.textContent = 3;
div.style.fontSize = "400px";
document.body.append(div);

function minus() {
    let a = Number(div.textContent) - 1;
    return div.textContent = a;
}

let timerID = setInterval(minus, 1000);

setTimeout(() => {
    clearInterval(timerID);
}, 3000);

function deleteAll() {
    document.body.innerHTML = '';
}

window.setTimeout(deleteAll, 3000);

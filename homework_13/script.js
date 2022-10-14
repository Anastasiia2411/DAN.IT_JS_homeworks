"use strict"

//setTimeout позволяет вызвать функцию один раз через определённый промежуток времени.
// setInterval позволяет вызывать функцию постоянно, повторяя вызов через определённый промежуток времени
//Що станеться, якщо в функцію setTimeout() передати нульову затримку? Чи спрацює вона миттєво і чому?
//Сначала выполниться код который находится вне функции потом уже setTimeout с 0 задержкой.
// Потому что 0 задержка на самом деле не равна 0 в браузере
//Чому важливо не забувати викликати функцію clearInterval(), коли раніше створений цикл запуску вам вже не потрібен?
//Потому что в таком случае clearInterval() будет работать постоянно нагружая наш браузер

let a = 'undefined' in window;
console.log(a)
let wrapperFirstChild = document.querySelector(".images-wrapper").firstElementChild;
let start = document.querySelector(".start");
let timerId = setInterval(changeImg, 3000);
let stop = document.querySelector(".stop");

function changeImg() {
    let nextElem = wrapperFirstChild.nextElementSibling;
    if (nextElem === null) {
        nextElem = document.querySelector(".images-wrapper").firstElementChild;
        console.log(nextElem);
    }

    function nextElement(wrapperFirstChild) {
        if (!wrapperFirstChild.classList.contains("img_hight")) {
            let previousElem = nextElem.previousElementSibling;
            nextElem.classList.remove("img_hight");
            if (previousElem) {
                previousElem.classList.add("img_hight");
            } else {
                previousElem = wrapperFirstChild;
                previousElem.classList.add("img_hight");
            }
        }
    }

    nextElement(wrapperFirstChild);
    wrapperFirstChild = nextElem;
}

start.addEventListener("click", () => {
   timerId = setInterval(changeImg, 3000);
})

stop.addEventListener("click", () => {
    clearInterval(timerId);
})


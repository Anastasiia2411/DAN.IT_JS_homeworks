"use strict"
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


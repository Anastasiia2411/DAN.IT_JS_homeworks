 "use strict"
// //What people say about theHam(карусель)

let nextBtn = document.querySelector("#Btn_elem_reviews_2");
let previousBtn = document.querySelector("#Btn_elem_reviews_1");

nextBtn.addEventListener("click", (e) => {
    let AllListElemIcon = document.querySelectorAll(".scroll_list_elem");
    AllListElemIcon.forEach((el) => {
        el.classList.remove("scroll_list_elem_active");
    })
    let activeText = document.querySelector(".active");
    let nextElem = activeText.nextElementSibling;
    if (!nextElem) {
        nextElem = document.querySelector(".reviews_list_elem")
    }
    let ElementId = nextElem.id;
    AllListElemIcon.forEach((el) => {
        if (el.dataset.target === ElementId) {
            el.classList.add("scroll_list_elem_active");
        }
    })
    let listElemReviewsText = document.querySelectorAll(".reviews_list_elem");
    listElemReviewsText.forEach((el) => {
        el.classList.remove("active")
    })
    nextElem.classList.add("active")
})

previousBtn.addEventListener("click", () => {
    let AllListElemIcon = document.querySelectorAll(".scroll_list_elem");
    AllListElemIcon.forEach((el) => {
        el.classList.remove("scroll_list_elem_active");
    })
    let activeText = document.querySelector(".active");
    let previousEl = activeText.previousElementSibling;
    if (!previousEl) {
        previousEl = document.querySelectorAll(".reviews_list_elem")[3];
    }
    let ElementId = previousEl.id;
    AllListElemIcon.forEach((el) => {
        if (el.dataset.target === ElementId) {
            el.classList.add("scroll_list_elem_active");
        }
    })
    let listElemReviewsText = document.querySelectorAll(".reviews_list_elem");
    listElemReviewsText.forEach((el) => {
        el.classList.remove("active")
    })
    previousEl.classList.add("active")
})

let listOfIcons = document.querySelector(".scroll_list");
listOfIcons.addEventListener("click", (ev) => {
    let target = ev.target;
    if (target.tagName === "IMG") {
        document.querySelectorAll(".scroll_list_elem").forEach((el) => {
            el.classList.remove("scroll_list_elem_active")
        })
        let ParentEventElement = ev.target.closest("li")
        let listElemReviewsText = document.querySelectorAll(".reviews_list_elem");
        for (let el of listElemReviewsText) {
            el.classList.remove("active");
            if (el.id === ParentEventElement.dataset.target) {
                el.classList.add("active")
            }
        }
        ParentEventElement.classList.add("scroll_list_elem_active");
    }
})
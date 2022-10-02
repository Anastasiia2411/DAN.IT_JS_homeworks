"use strict"
let tabs = document.querySelectorAll(".tabs");
let actives = document.getElementsByClassName("active");
let list = document.getElementById("list");
let child = list.children;
tabs.forEach((el) => {
    el.addEventListener("click", (e) => {
        let activeDataElInf = e.target.dataset.show;
        let currenActive = actives[0];
        if (currenActive) {
            currenActive.classList.remove("active");
            for (let prop of child) {
                if (!prop.classList.contains("hide")) {
                    prop.classList.add("hide");
                }
            }
        }
        for (let i of child) {
            if (i.dataset.name === activeDataElInf) {
                i.classList.remove("hide");
            }
        }
        e.target.classList.add("active");
    })
})


"use strict"

let ul = document.createElement("ul");
ul.style.width = `${30 * 37.7}px`;
ul.style.height = `${30 * 37.7}px`;
ul.style.listStyle = "none"
ul.style.padding = "0";
ul.style.margin = "0";
ul.style.display = "flex";
ul.style.flexWrap = "wrap";
ul.classList.add("container");
for (let i = 0; i < 9; i++) {
    let li = document.createElement("li");
    li.style.width = "375px"
    li.style.height = "375px"
    li.style.border = "1px solid #000000"
    ul.prepend(li)
    li.classList.add("point")
}
document.body.append(ul)

ul.addEventListener("click", (e) => {
    if(!e.target.classList.contains("active_elem")){
        e.target.classList.add("active_elem")
    }else{
        e.target.classList.remove("active_elem")
    }
})
let count = 1
document.body.addEventListener("click", (e) => {
    if (e.target.tagName !== "UL" && e.target.tagName !== "LI" && count === 1) {
        ++count
        ul.classList.add("white")
        ul.classList.add("black")
    }else if(e.target.tagName !== "UL" && e.target.tagName !== "LI" && count > 1){
        ul.classList.remove("white")
        ul.classList.remove("black")
        count = 1
    }

})

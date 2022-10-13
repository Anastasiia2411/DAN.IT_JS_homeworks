"use strict"
const link_css = document.getElementById("link_css");
const changeBtn = document.getElementById("btn");
let atribDayTheme = "./style/style.css"
let atribDarkTheme = "./style/Dark_theme.css"

changeBtn.addEventListener("click", () => {
    let hrefOfLink = link_css.getAttribute("href");
    if (hrefOfLink === atribDayTheme) {
        link_css.setAttribute("href", atribDarkTheme)
    } else {
        link_css.setAttribute("href", atribDayTheme)
    }
})



window.addEventListener("beforeunload", () => {
    let hrefOfLink = link_css.getAttribute("href");
    localStorage.setItem("ThemeBeforeunload",  hrefOfLink);
})

window.addEventListener("DOMContentLoaded", () => {
  let ThemeBeforeunload =  localStorage.getItem("ThemeBeforeunload");
   console.log(ThemeBeforeunload);
    link_css.setAttribute("href", `${ThemeBeforeunload}`)
})
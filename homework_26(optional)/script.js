"use strict"

let nextBtn = document.getElementById("next_btn");
nextBtn.addEventListener("click", ()=>{
    let activeImg = document.querySelector(".active");
    let nextSibling = activeImg.nextElementSibling;
    if(!nextSibling){
        nextSibling = document.querySelector(".img_list_el")
    }
    let allImages = document.querySelectorAll(".img_list_el")
    allImages.forEach(el=>{
        el.classList.remove("active")
    })
    nextSibling.classList.add("active")

})

let previousBtn =  document.getElementById("previous_btn");
previousBtn.addEventListener("click", ()=>{
    let activeImg = document.querySelector(".active");
    let previousSibling = activeImg.previousElementSibling;
    if(!previousSibling){
        previousSibling = document.querySelectorAll(".img_list_el")[5]
    }
    let allImages = document.querySelectorAll(".img_list_el")
    allImages.forEach(el=>{
        el.classList.remove("active")
    })
    previousSibling.classList.add("active")
})

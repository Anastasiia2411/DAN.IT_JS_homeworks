let btn = document.querySelector(".btn")
let container = document.querySelector(".container")
btn.addEventListener("click",circle)
function circle() {
    let radius = +prompt("your radius");
    if(radius > 10){
        alert("the number should not be more than 10")
        circle()
    }else if(isNaN(radius)){
        alert("you need to enter a number")
        circle()
    }
    btn.remove();
    for (let i = 1; i <= 100; i++) {
        let div = document.createElement("div");
        div.style.width = `${radius * 2}px`;
        div.style.height = `${radius * 2}px`;
        div.style.backgroundColor = `${'#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()}`;
        div.style.borderRadius = "100px";
        container.append(div);
    }
}

document.addEventListener("click", (e)=>{
    if(e.target.tagName !== "DIV"){
        return
    }else{
        e.target.remove()
    }
});


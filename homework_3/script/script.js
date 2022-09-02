"use strict"

function userNumb() {
    let userChoose = +prompt("enter your number");
    if (isNaN(userChoose) || userChoose !== parseInt(userChoose)) {
        alert("enter NUMBER");
        userNumb()
    }

    for (let i = 0; i <= userChoose; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
}

userNumb();



"use strict"

function userNumb() {
    let userChoose = +prompt("enter your number");
    if (isNaN(userChoose) || userChoose !== parseInt(userChoose)) {
        alert("enter NUMBER");
        userNumb()
    } else if(userChoose <= 4 || userChoose === 0) {
        console.log("Sorry, no numbers")
    } else {
        for (let i = 1; i <= userChoose; i++) {
            if (i % 5 === 0) {
                console.log(i);
            }
        }
    }
}

userNumb();



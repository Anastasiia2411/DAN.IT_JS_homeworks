"use strict"
function askUser() {
    let userName = prompt("What is your name?", "Nastya");
    let userAge = +prompt("How old are you?", 18);

    if (userName === " " || userName === "" || userName === null || !isNaN(Number(userName)) ){
        alert('Enter your correct name please');
        askUser();
    } else if (isNaN(userAge) || userAge === 0 ){
       alert('Enter your correct age please');
        askUser();
    }  else if (userAge < 18) {
        alert("You are not allowed to visit this website");
    } else if (userAge >= 18, userAge <= 22 ) {
        let userAnswer = confirm("Are you sure you want to continue?");
        if (userAnswer === true) {
            alert(`Welcome ${userName}`);
        } else if (userAnswer === false) {
            alert("You are not allowed to visit this website");
        }
    } else if (userAge > 22) {
        alert(`Welcome ${userName}`);
    }
}

askUser();








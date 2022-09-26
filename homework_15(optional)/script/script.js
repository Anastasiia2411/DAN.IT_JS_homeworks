"use strict"
let number
do{number = +prompt("enter your number")}while(isNaN(number)||);

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

alert(factorial(number))












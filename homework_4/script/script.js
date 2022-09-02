"use strict"
function calcResult(firstNumb, secondNumb, userSign) {
    // питаємо значення у користувача
    firstNumb = +prompt("your first namber", "10");
    secondNumb = +prompt("your second namber", "4");
    userSign = prompt("choose your sign: *, +, -, /", "+");
    // перевіряємо на валідність введені дані
    if (isNaN(firstNumb) || isNaN(secondNumb) || firstNumb == ""
        || secondNumb == "" || firstNumb == " " || secondNumb == " ") {
        alert("enter NUMBER");
        calcResult();
    }
    // обчислюємо
    switch (userSign) {
        case "+" :
            return firstNumb + secondNumb;
        case "/" :
            return firstNumb / secondNumb;
        case "-" :
            return firstNumb - secondNumb;
        case "*" :
            return firstNumb * secondNumb;
    }
}
//виводимо в консоль
console.log(calcResult());
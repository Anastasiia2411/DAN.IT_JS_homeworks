"use strict"
let input = document.getElementById("screen")
let allBtn = document.querySelector(".keys");
let a = document.querySelector(".orange")
console.log(a.value)
let firstNumber = ""
let sign = ""
let secondNumber = ""



allBtn.addEventListener("click", (e) =>{
    let activeElement = e.target;
    if(!activeElement.classList.contains("button")) return;
    if(!isNaN(activeElement.value) || e.target.value === "." ){
           firstNumber += activeElement.value;
            console.log(firstNumber)
            input.value = firstNumber
        }else if( !isNaN(activeElement.value) && firstNumber !== "" && secondNumber === ""){
            secondNumber += activeElement.value;
            input.value = secondNumber
        console.log(secondNumber)
    }else{
       let allSign = [...document.querySelectorAll(".pink")]
        for(let i of allSign){
            if(activeElement.value === i.value){
                console.log(i.value)
                sign = i.value
                return sign
            }
        }
    }


    if(firstNumber !== "" && secondNumber !== "" && sign !== "" ){
        console.log(sign)
        switch (sign) {
            case "+":
                firstNumber  = +firstNumber + (+secondNumber);
                break
            case "-":
                firstNumber  = Number(firstNumber) - Number(secondNumber);
                break
            case "/":
                firstNumber  = Number(firstNumber) / Number(secondNumber);
                break
            case "*":
                firstNumber  = Number(firstNumber) * Number(secondNumber);
                break
        }
        input.value = firstNumber;
        secondNumber = "";
        sign = ""

    }









})
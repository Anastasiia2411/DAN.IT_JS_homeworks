"use strict"
let fun = 0

function FibonNumb(F0, F1, nb) {
    fun++
    let sum = F0 + F1;
    if (fun < nb - 2) {
        F0 = F1
        F1 = sum
        return FibonNumb(F0, F1, nb);
    } else {
        fun = 0;
        return sum
    }
}

let a = FibonNumb(1, 2, +prompt("Your number"));
console.log("a", a);









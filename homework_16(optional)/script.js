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

let a = FibonNumb(1, 2, 4);
console.log("a", a);
let b = FibonNumb(2, 3, 7);
console.log("b", b);
let c = FibonNumb(2, 3, 6);
console.log("c", c);






"use strict"

function isArray(val) {
    return Array.isArray(val);
}

function isObject(val) {
    return val && typeof val === "object";
}

function deepClone(obj) {
    if (isArray(obj)) {
        return obj.map((val) => {
            return (deepClone(val))
        })
    } else if (isObject(obj)) {
        let res = {}
        for (let k in obj) {
            res[k] = deepClone(obj[k])
        }
        return res
    } else {
        return obj;
    }
}

let i = {
    car: 1,
    auto: 2,
    engine: {
        cylinders: 4,
        size: 2.2
    },
    eleb: [1, 1, 3, 5]
}
let a = deepClone(i);

console.log(a)
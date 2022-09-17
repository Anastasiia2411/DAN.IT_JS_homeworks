"use strict"

function filterBy(arr, DataType) {
    return arr.filter(elem => typeof elem !== DataType)
}

console.log(filterBy(['hello', 'world', 23, '23', null], 'string'));



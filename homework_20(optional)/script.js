"use strict"
const vehicles = ['en_US', 'car', 'lego', {
    contentType: {
        name: 'alex',
        description: 'Toyota'
    },
    'var': 'text',
    'array': [1, 2, 3, 4],
}]


function filterOfArr(arrForFilter, findWord, flag, ...NameWereFind) {

    runToArr(arrForFilter)

    function runToArr(element) {
        for (let i = 0; i < element.length; i++) {
            if (typeof element[i] === "object") {
                runToArr(element[i])

            }
            console.log(element[i])

        }



        // if (flag) {
        //     console.log(arrForFilter.every((e) => {
        //
        //     }))
        // } else {
        //     console.log(arrForFilter.some(() => findWord))
        // }
    }
}

filterOfArr(vehicles, 'en_US Toyota', true, 'name', 'description', 'contentType.name', 'locales.name', 'locales.description')

// 1. 
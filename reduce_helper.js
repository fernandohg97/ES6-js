// Exercise 1

// var primaryColors = [
//     { color: 'red' },
//     { color: 'yellow' },
//     { color: 'blue' }
// ]

// console.log(primaryColors.reduce(function(array, primaryColor) {
//     array.push(primaryColor.color)
//     return array
// }, []))

// Exercise 2

function balancedParens(string) {
    return !string.split('').reduce(function(previous, char) {
        if (char === '(') { return ++previous }
        if (char === ')') { return --previous }
        return previous
    }, 0)
}

console.log(balancedParens('()()'))
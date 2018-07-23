// Exercise 1

var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
]

// var allComputersCanRunProgram = true
// var onlySomeComputersCanRunProgram = false

// for (var i = 0; i < computers.length; i++) {
//     var computer = computers[i]

//     if (computer.ram < 16) {
//         allComputersCanRunProgram = false
//     } else {
//         onlySomeComputersCanRunProgram = true
//     }
// }

// console.log(allComputersCanRunProgram)
// console.log(onlySomeComputersCanRunProgram);

console.log(computers.some(function(computer) {
    return computer.ram > 16
}))

var names = [
    'Alexandria',
    'Matthew',
    'Joe'
]

names.every(function(name) {
    return name.length > 4 // Does every name in the array has length of 4? Output: false
})

names.some(function(name) {
    return name.length > 4 // Does some names in the array has length of 4? Output: true
})
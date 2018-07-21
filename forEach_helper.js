// // Exercise 1
var colors = [ 'red', 'blue', 'green']

// // Iterate array using for loop
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i])
}

// // Iterate array using forEach array helper method
// // We passed an anonymous function as a parameter
// // The function executes the number of elements inside the array
colors.forEach(function(color) {
    console.log(color)
})

// EXERCISE 2

// Create an array of numbers
var numbers = [1,2,3,4,5]
// Create a variable to hold the sum
var sum = 0

function adder(number) {
    sum += number
}

// Loop over the array, incrementing the sum variable
numbers.forEach(adder)
// print the sum variable
console.log(sum)


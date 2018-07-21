// MAP HELPER

// Exercise 1

// var numbers = [1,2,3]
// var doubledNumbers = []

// for (var i = 0; i < numbers.length; i++) {
//     doubledNumbers.push(numbers[i] * 2)
// }

// console.log(doubledNumbers)

// var double = numbers.map(function(number) {
//     return number * 2
// })

// console.log(double)

// Exercise 2

// var cars = [
//     { model: 'Buick', price: 'CHEAP' },
//     { model: 'Camaro', price: 'expensive' }
// ]

// var prices = cars.map(function(car) {
//     return car.price
// })

// console.log(prices)

// Exercise 3

// var paints = [
//     { color: 'red' },
//     { color: 'green' },
//     { color: 'blue' }
// ]

// function pluck(array, property) {
//     var colors = array.map(function(paint) {
//         return paint[property]
//     })
//     return colors
// }

// console.log(pluck(paints, 'color'))

// Exercise 4

// var products = [
//     { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
//     { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
//     { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
//     { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
// ]

// var vegetables = products.filter(function(product) {
//     return product.type === 'vegetable' && product.quantity > 0 && product.price < 10
// })

// console.log(vegetables)

// Exercise 5

var post = { id: 4, title: 'New Post'}
var comments = [
    { postId: 4, content: 'awesome post' },
    { postId: 3, content: 'Nice!!' },
    { postId: 4, content: 'Love it. Great work' }
]

function commentsForPost(post, comments) {
    return comments.filter(function(comment) {
        return comment.postId === post.id
    })
}

console.log(commentsForPost(post, comments))
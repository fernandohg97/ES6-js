// Exercise 1

// function Car(model) {
//     this.model = model
// }

// var cars = [
//     new Car('Buick'),
//     new Car('Camaro'),
//     new Car('Focus')
// ]

// console.log(cars.find(function(car) {
//     return car.model === 'Focus'
// }))

// Exercise 2

var posts = [
    { id: 1, title: 'New Post' },
    { id: 2, title: 'Old Post' }
]

var comment = {
    postId: 1,
    content: 'Great Post'
}

function postForComment(posts, comment) {
    var result = posts.find(function(post) {
        return post.id === comment.postId
    })
    return result
}

console.log(postForComment(posts, comment))

// Exercise 3


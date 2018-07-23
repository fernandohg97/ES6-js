# ES6-js

## What is ECMAScript?

ECMAScript is the **standard**, Javascript is the **implementation** of that standard.

Basically, Javascript, the programming language follow the standard rules of **ECMAScript**.

We are currently in ECMAScript version 6.

**Note:**

> So, if you are updating to ES6 version, you have to know that most browsers take some time to support the new versions of ECMAScript.

## How do I make sure that my code works in all browsers?

There's something called **BABEL**.

**BABEL** is a tool that transpiles (converts in other words) your ES6 code to the previous version (in this case ES5). That's gonna work and will be safe to run in your browser.


# Array Helper Methods

- forEach
- map
- filter
- find
- every
- some
- reduce

Using these array helper methods is gonna save you time and easy your programming work

Let's talk about what is each of these.

## forEach

Executes the function on each element of the array.

```javascript
var colors = ['green', 'blue', 'red']

colors.forEach(function(color) {
    console.log(color)
})

// Output:
// green, blue, red
```


## map

Returns a new array with the result of the function apply to each element.

```javascript
var numbers = [1,2,3,4]

var double = numbers.map(function(number) {
    return number * 2
})

console.log(double)

// Output:
// [2,4,6,8]
```


## filter

Returns a new array with all the elements that pass the condition inside the function.

```javascript
var products = [
    { name: 'cucumber', type: 'vegetables' },
    { name: 'banana', type: 'fruit' },
    { name: 'celery', type: 'vegetables' },
    { name: 'orange', type: 'fruit' }
]

var fruits = products.filter(function(product) {
    return product.type === 'fruit'
})

console.log(fruits)

// Output: 
// [{ name: 'banana', type: 'fruit'}, { name: 'orange', type: 'fruit'}]
```

## find

Returns the value of the first in element in the array that passes the condition inside the function.

**Note**

If there is two elements with the same value it will return the first one.

```javascript
var users = [
    { name: 'Jill' },
    { name: 'Alex' },
    { name: 'Bill' }
]

var result = users.find(function(user) {
    return user.name === 'Alex'
})

console.log(result)

// Output:
// { name: 'Alex' }
```

## every

Returns a boolean value if all elements in the array passes the condition inside the function.

```javascript
var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
]

var result = computers.every(function(computer) {
    return computer.ram > 16
})

console.log(result)

// Output:
// false
```

## some

Returns a boolean value if any element in the array passes the condition inside the function.

```javascript
var names = [
    'Alexandria',
    'Matthew',
    'Joe'
]

var result = names.some(function(name) {
    return name.length > 4
})

console.log(result)

// Output:
// true
```

## reduce

```javascript
var numbers = [10, 20, 30]

// The first parameter of the anonymous function 
// takes the value of the second parameter of the reduce function: which is 0
// The second parameter of the anonymous function
// takes the value of each element in the array
numbers.reduce(function(sum, number) {
    return sum + number
}, 0)

// Output:
// 60
```

# Const and Let

The **const** keywords is expect to be used when the variable is not going to be change in a future.

The **let** keyword is expect to be used when the variable is going to change in a future

```javascript

var name = 'Jane'
var title = 'Software Engineer'
var hourlyWage = 40

// ES6
const name = 'Jane'
let title = 'Software Engineer'
let hourlyWage = 40

// some time later...
title = 'Senior Software Engineer'
hourlyWage = 45

```
#### Note: Changing a const variable will throw an error because you declare that variable using the const keyword.

#### Note 2: You should use const and let from now on.

# Template Strings

Basically, it's an easy and nicer way to write a string interpolating one or more variables. Using back-ticks and a $ with curly brackets will allow you to do this.

```javascript

    const name = 'Robert'
    const age = 20

    let message = `My name is ${name} and I am ${age} years old`

    console.log(message)

    // Output:
    // My name is Robert and I am 20 years old
```
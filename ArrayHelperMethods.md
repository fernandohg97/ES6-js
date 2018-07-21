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
//accs
const fruite = ["apple", 'banana', 'orange', 'lemon']

console.log(fruite)

/**you can also write array */
var cars = []
cars[0] = "volvo";
cars[1] = "bmw";
cars[2] = "toyota"
for (var i = 0; i < cars.length; i++){
    console.log(cars[i])
}

/** you can also new array keyword**/

var laptop = new Array("HP", "lenovo")
for ( xp of laptop) {
    console.log(xp)
}

/* you can change array element easyly*/
var b = ["a", "b", '2', "c"]
b[2] = "c",
b[3] = "d"

console.log(b)

let pc = ["Prossesor", "ram", "Hard disk", "motherboard"]

for (let all = 0; all < pc.length; all++){
    console.log(pc[all])
}

/**You can call arrey in diffrant way**/
console.log('Array Traversing')
console.log('***Way 1***')

let way1 = ['Apple', 'Banana', 'Orange', 'Mango']

console.log(way1[0], way1[1], way1[2])

// Way 2
console.log('***Way 2***')

let way2 = ['Apple', 'Banana', 'Orange', 'Mango']

for(x of way2) {
    console.log(x)
}

for(let x = 0; x < way2.length; x++) {
    console.log(way2[x])
}

// Array length diffrent way
console.log('Array length diffrent way')

var arr = ['Prossesor', 'Ram', 'SSD', 'MotherBoard']

var length = 0

while(true) {
    if(arr[length] == undefined){
        break
    } else{
        length++
    }
}
console.log(length)

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var i = 0;
var arrayLength = 0;

while (true) {
    if (array[i++] == undefined || null) {
        break;
    } else {
        arrayLength++;
    }
}
console.log(arrayLength);
console.log(i)

///

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var length = 0;
for (var x = 0; x < arr.length; x++) {
  if (arr[x] == undefined) {
      break;
    } else {
        length++;
    }
}
console.log(length)
//
//summation of array index
console.log('Summation of Array Index')

let summation = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var sum = 0;

for(let test = 0; test < summation.length; test++){
    sum += summation[test]
}
console.log(sum)

// Even Number of Array Index
console.log('Even Number of array index')

let traversing = [2, 24, 23, 42, 64, 35, 3]

for(var i = 0; i < traversing.length; i++){
    if(traversing[i] % 2 === 0){
        console.log(traversing[i])
    }
}

//ODD number of array index
console.log('Odd number of array index')

let odd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(var t = 0 ; t < odd.length ; t++){

    if(odd[t] % 2 === 1){
        console.log(odd[t])
    }

}

//Summation Even Number of Array index
console.log('Summation Even Number of Array index')
let sum_even = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var sm_even = 0;

for(var h = 0; h < sum_even.length; h++){
    if(sum_even[h] % 2 === 0){
        sm_even += sum_even[h]
    }
}
console.log(sm_even)

//Summation Odd number of Array index
console.log('Summation Odd number of Array index')

let Sum_odd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var Sm_odd = 0;

for(var j = 0; j < Sum_odd.length; j++){
    if(Sum_odd[j] % 2 === 1){
        Sm_odd += Sum_odd[j]
    }
}
console.log(Sm_odd)

//Array Elements Can Be Objects / Function/ Array

let loop = ['Banana', 'Apple', 'Orange', 'Mango']

let ul = '<ul>'

for(var i = 0 ; i < loop.length; i++){
    ul += '<li>' + loop[i] + '</li>'
}
ul += '</ul>'

//search

var src = [12, 21, 3, 44, 5, 67, 7, 8]

var found = 12

var truck = false

for(var i = 0; i < src.length; i++){
    if(src[i]===found){
        console.log('Data is found at index ' + i)
        truck = true
    } 
}

if(!truck){
    console.log('data not found')
}

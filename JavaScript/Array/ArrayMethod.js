// //For Insert & remove Data
// //way1
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// arr[4] = 10

// console.log(arr)

// //way2 insert the last index

// arr.push(10)

// console.log(arr)

// //way 3 insert the first index of array

// arr.unshift(0)
// console.log(arr)

// // way 4 insert remove or update any one element
// let splice = ['Apple', 'Banana', 'Orange', 'Mango']

// splice.splice(1, 0, 'pineapple')

// console.log(splice)

// // remove first index

// arr.shift()

// console.log(arr)

// // remove last index

// arr.pop()
// console.log(arr)

// // reverse array

// let reverse = ['Abid', 'Nayeem', 'Habibullah', 'Ashik', 'Shafi', 'Tawhid', 'Mizan']

// for(var i = reverse.length - 1 ; i > 0; i--){
//     console.log(i + ' ' + reverse[i])
// }

let arrStr = ['Abid', 'Nayeem', 'Habibullah', 'Ashik', 'Shafi', 'Tawhid', 'Mizan']





console.log(arrStr.toString())

// console.log(arrNumber.toString())

arrStr.join(" | ")
console.log(arrStr.join(' | '))


// poping pushjing
// arrStr.pop() // For removing last eliments 

// console.log(arrStr) 


var push = arrStr.push('Hasib') // for add last eliment

console.log(arrStr.join(' | ')) // for joinig bitween arr element by any one

// Shift Unshift

arrStr.shift()
console.log(arrStr)

arrStr.pop()
console.log(arrStr)

arrStr.unshift('Hasan')
console.log(arrStr)

// Splice Slice

arrStr.splice(3, 4, 'Rahul') /*
The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Rahul") define the new elements to be added.
*/

console.log(arrStr)

var arrStr1 = ['Abid', 'Nayeem', 'Habibullah', 'Ashik', 'Shafi', 'Tawhid', 'Mizan']


var arrStore = arrStr1.slice(2) // slice 0 to 1 and reslut witout 0 to 1 index


console.log(arrStore)


var store1 = arrStr1.slice(0, 4) // slice 0 to 4 and output 0 index to 4 index


console.log(store1)


// toStirng() and join()
let arrNumber = [1, 2, 3, 4, 5, 6, 7,]


console.log(arrNumber.toString()) // String and devide by comma



console.log(arrNumber.join('  ')) // devide by space


// Poping Pushing

arrNumber.push(8)

console.log(arrNumber) // for adding last element


arrNumber.pop()
console.log(arrNumber) // for removing last element


// Shift Unshift

arrNumber.shift() // For removing first emenet

console.log(arrNumber)

arrNumber.unshift(1) // for add first element

console.log(arrNumber)

// Mearging (Concating Array) Array

var newArr = arrNumber.concat(arrStr)

console.log(newArr)

// Splice Ans Slice

arrNumber.splice(2, 0, 10) // remove and adding any one index

console.log(arrNumber)

let arrNumber1 = [1, 2, 3, 4, 5, 6, 7,]

var result = arrNumber1.slice(0, 3) 

console.log(result)


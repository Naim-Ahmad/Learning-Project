
//strings
var i = "22"

var d = "44"
console.log(i + d)

//string length

var i = "joni abdullah master"

console.log(i.length)

//Escape Character
let text = "We are the so-called \"b\" from the north.";
console.log(text)

//Breaking Long Code Lines

//JavaScript Strings as Objects
let x = "Rahim"
let y = "karim"

console.log(x==y)

/*Extracting String Parts
There are 3 methods for extracting a part of a string
slice(start, end)
substring(start, end)
substr(start, length)
*/

//slice() method
var a = 'apple, banana, mango'

console.log(a.slice(0, 5))
console.log(a.slice(-13, -7))//

//substring() method

var b = 'Ali Hasan Usama'
console.log(b.substring(-5))// Nagative not saport

//substr() method
var c = 'Ali Hasan Usama'
console.log(c.substr(4, 5))
//replace method

console.log(c.replace('Ali Hasan Usama', 'HM Nayeem'))

//trim() Method

console.log(c.trim())
console.log(c.split(' '))
console.log(c.toUpperCase()) 
console.log(c.toLowerCase()) 

// String concat

var l = 'This is '
var e = 'EASY TECH TUNE'

var t = l.concat(e)

console.log(t)

console.log(t[10])// property accase

//string length diffrent wey

var g = t.charAt(21)
console.log(g)

var length = 0

while(true){
    if(t.charAt(length) == ''){
        break
    } else{
        length++
    }
}
console.log(length)

var t = ' HM Nayeem'
console.log(t.lastIndexOf('Nayeem'))
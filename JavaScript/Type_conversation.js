var l = "100"
var s = 5

// console.log(Boolean(l))

// console.log(Boolean(''))
// console.log(Boolean('ajfoalj'))
// console.log(Boolean(Infinity))
// console.log(Boolean(NaN))
// console.log(Boolean(null))
// console.log(Boolean(0))

//Converting Strings to Numbers

var n = "55"
var e = " "
var b = ''
var s = "56 77"

// console.log(Number(n))// return 55
// console.log(Number(e)) // return 0
// console.log(Number(b))// retunrt 0
// console.log(Number(s))//return NaN

//number method for converting strings to number
// console.log(parseInt(n))
// console.log(parseFloat(s))

//The unary + operator can be used to convert a variable to a number

let num1 = "232"
let num2 = "55"

console.log(+num1 + +num2)

let x = "33"
let y = +x

console.log(y)

//Converting Numbers to Strings
//The global method String() can convert numbers to strings.

let str = 245

console.log(String(str))
console.log(String(245))
console.log(String(200+45))

//The Number method toString() & More does the same.

var d = 345

console.log(d.toString())//way 1
console.log((345).toString())//way 2
console.log((300+45).toString())//way3\

//Converting Date to number

var date = new Date()

console.log(Number(date))

var getTime_num = new Date()
getTime_num.getTime()
console.log(Number(getTime_num))


//converting date to string

var str_date = new Date() 

console.log(String(str_date))

var get_time_method = new Date()
get_time_method.getTime()

console.log(String(get_time_method))

//Converting boolean to number

var true_To_Number = true
var false_To_Number = false

console.log(Number(true_To_Number))
console.log(Number(false_To_Number))

//boolean to string

var true_To_String = true
var false_To_String = false

console.log(String(true_To_String))
console.log(String(false_To_String))

console.log((true_To_String).toString())
console.log((false_To_String).toString())


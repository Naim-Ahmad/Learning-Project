
/*********** Number data type ******/

//literalna
var indeger = 35 //indiger
var floating = 45.4 //floating 

//construct
var construct = Number(35.7)
var stringToNumber = Number('45')
console.log(indeger, construct, stringToNumber)

console.log(Number.MAX_VALUE + " max value")
console.log(Number.MIN_VALUE + " min value")
console.log(Number.parseFloat(stringToNumber) + " parseFloat")
console.log(Number.parseInt(construct) + " parseInt")

var x = 33
var xx = Number('40')

console.log(x)
console.log(typeof xx)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(10/0)//infinity
console.log('rahim' * 4) //NaN
console.log("")



console.log(isNaN(xx))

///**Number Method**///
console.log("***Number Method***")
var number = 342.242
console.log(number.toString())
console.log(number.toExponential(2))
console.log(number.toFixed(2))// returns a string, with the number written with a specified number of decimals
console.log(number.toPrecision(4))//returns a string, with a number written with a specified length

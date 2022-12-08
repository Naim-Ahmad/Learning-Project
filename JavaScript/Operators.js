// সব চেয়ে ব্যবহৃত অপারেটর হল Arithmetic Operator 
console.log('**Arithmetic Operator**')

console.log(500 + 30)
console.log(500 - 30)
console.log(500 * 30)
console.log(500 % 30)
console.log(500 / 30)

var a = 500
var b = 30
console.log(++a)//pre increment

console.log(a++)//Post increment


console.log(--b)//Pre Decrement
console.log(b--)//Post Decrement
console.log(b)

//Assign Operators

console.log('**Assign Operators***')

var c = 25;

c += 20;
console.log(c)

console.log(++c)

c -= 20;
console.log(c)

c *= 20;
console.log(c)

c /= 20;
console.log(c)

c %= 20;
console.log(c)

console.log(c)

//Comprison Operators

console.log('**Comprison Operators**')

console.log(a == b) //false
console.log(a != b) //Ture
console.log(a < b) //false
console.log(a > b) //ture

var d = '50'
var e = 50
console.log(d <= e) //true
console.log(d >= e) //true

console.log(d === e) //value & data type uvoy ti compare korbe
console.log(d !== e) //true 

//Logical Operators

console.log('**Logical Operators**')
// &&
// ||
// !

var s = (15 + 6) * 3 

console.log(s)

let asg = 50
let asg1 = 51
asg += asg1
console.log(asg)

//comprison operators

console.log('****comprison Operator***')

var x = 25

console.log(x == 25)//true
console.log(x == 2 )//false

console.log(x === '25')//false
console.log(x === 25)//true

console.log(!(x == 25)) //false
console.log(!(x == 2)) //true

console.log(!(x === '25'))//true
console.log(!(x === 25))//false

console.log(x < 25)//false
console.log(x < 2)//false

console.log(x <= 25)//true
console.log(x <= 2)//false


console.log(!(x < 25))//true

//Logical Operator
console.log('*****Logical Operator*****')

var x = 20

var y = 30

console.log( x > y && y > x)//false
console.log( x < y && y > x)//true

console.log( x > y || y > x)//true
console.log( x < y || y > x)//true

//turnary operator
var age = 18
var s =  age <= 18 ?'Cild': 'Adult'
console.log(s)


var result = age % 2 == 0 ? 'EVEN' : 'ODD'

console.log(result)

var name = 'true'

var fullname = name || 'Nayeem'

console.log(fullname)

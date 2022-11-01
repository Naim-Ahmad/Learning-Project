//behind the seen java script jevabe kaj kore.. se code guloke 2 bar kore scan kore.. firsr stepe variable declare kore & function read kore.. second step a variable initialize kore & function call kore... example
console.log(s)

var s = 5

console.log(s)

show()

function show(){
    console.log("i am a function")
}

//scop & var, let, const, different 

var a = "this is a var & and it's global"
a = "this is another var for test"

let b = "this is a let"
b = "this is another let for test"

const d = "this is a const"

// d = "this is another const for test" const overwrite kora jay na. tai seta let & var theke alada hoye gelo

// console.log(a)
// console.log(b)
// console.log(d)

function sho(){
    console.log(b)
}
sho()

//different holo var is global. ebong etake jekono jayga theke accce kora jabe kintu let jodi tar scoper vitor theke accese kora jay bahirer scop theke accase kora jay na

//function

function laptop(name){
    console.log("hp " + name + " is ok for use")
}

laptop("camera")
laptop("printer")
laptop("mobile")
laptop("light")

//Function Return.........



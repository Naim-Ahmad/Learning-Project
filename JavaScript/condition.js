
var a = 34

var b = 33

if (a > b){
    console.log("a is greater ten b")
} else{
    console.log(" b is less ten a")
}

var a = 50

var b = 50

if (a > b){
    console.log("a is greater ten b")
}else if (a == b){
    console.log("a is equal to b")
} else {
    console.log(" b is less ten a")
} 

//Make a "Good day" greeting if the hour is less than 18:00:

let hour = new Date().getHours()

if (hour < 10){
    console.log("Good morning")
} else if(hour < 18){
    console.log("Good day!")
}
else{
    console.log("Good evening")
}

let s = 22
let x = 30

if(s % 2 === 0){
    console.log('S Is Even')
}

if(s % 3 === 0) {
    console.log('S is Odd')
}


var age_rahim = 31
var age_abdullah = 30

if(age_rahim < age_abdullah){
    console.log('Rahim Is less than Abdullah')
}

if(age_rahim > age_abdullah) {
    console.log('Abdullah greter than Rahim')
}
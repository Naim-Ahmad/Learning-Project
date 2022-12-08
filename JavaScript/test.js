// let x = [11,242,434,3534,24,2424,24,42,]

// for( var all = 0; all < x.length; all++) {
//     console.log(x[all])
// }

// function loop() {
//     let i = [11,242,434,3534,24,2424,24,42,]
//     for(x of i) {
//         console.log(x)v
//     }
// }

const days_Name = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]
let days = days_Name[new Date().getDay()]
console.log(days)

//set FullYaear()
console.log(new Date().setFullYear("2020")) // output millisecond

const set = new Date()
set.setFullYear("2020")
console.log(set)

//ekhane time asteche keno?

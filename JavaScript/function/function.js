//function invoked



//Function return

function show(){
    return "hasan";
}
let x = show()

console.log(x)


function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
} 
console.log("The temperature is " + toCelsius(77) + " Celsius")


//behind the seen javascript jevabe kaj kore.. se code gulo 2 bar kore.. prothom bar se 

function fast() {
    console.log('I am a function')
}

fast()

let variable = function () {
    return 'I am in variable function'
}

let store_func = variable()

console.log(store_func)
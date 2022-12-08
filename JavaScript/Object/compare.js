var com = {
    a: 34,
    b: 50
}

var com2 = {
    a: 34,
    b: 5
}

if(com.a === com2.a && com.b === com2.b){
    console.log(true)
} else{
    console.log(false)
}

console.log(JSON.stringify(com)===JSON.stringify(com2))
for (var x = 0; x < 10; x++){
    console.log('This is array')
}
/* break loop */

for (var i = 0;; i++){
 if(i < 10){
    console.log(i)
 }   else{
     break
 }
}

/* Loop Scop */
console.log('scop')


for(var s = 0; s <= 10; s++ ){
    console.log(s)
}

console.log(s)

// you can create even number
//way 1
console.log('**you can create even number**')
console.log('way1')

for (var even1 = 0; even1 <= 10; even1++) {
    if(even1 % 2 === 0) {
        console.log(even1)
    }
}
//way 2
console.log('**way 2**')
for (var even2 = 0; even2 <= 10; even2+= 2) {
    console.log(even2)
}

//you can create odd number
console.log('**youcan create odd number**')
console.log('*way 1*')
//way 1
for (var odd1 = 0; odd1 <= 10; odd1++){
    if(odd1 % 2 == 1) {
        console.log(odd1)
    }
}

console.log('way 2')

for(var odd2 = 1; odd2 <= 9; odd2+=2) {
    console.log(odd2)
}

//you can decrimant number
console.log('number decrimant')

for(var dec = 19; dec >= 1; dec--){
    console.log(dec)
}

// sumation bahir kora
console.log('sumation')

var sum = 0

for (var i = 1; i <= 10; i++){
    console.log(sum + ' + ' + i + ' = ' + (sum + i))
    sum += i
}

console.log('even')

var even = 0

for (var s = 1; s <=10; s++) {
    if(s % 2 === 0){
        console.log(even + ' + ' + s + ' = ' + (even+s))
        even += s
        
    }
}


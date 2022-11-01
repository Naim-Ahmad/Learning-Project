//while loop for for print my name
var s = ''
while (s <= 10){
    console.log(s + ' HM Nayeem')
    s++
}

var g = true
while (g) {

    var rand = Math.floor(Math.random() * 10)
    if(rand === 9){
        console.log('You are win')
        g = false
    } else {
        console.log('You are got ' + rand)
    }

}

//1.2.3......100 by while loop
//way 1

var odd_while1 = 1

while (odd_while1 <= 99) {
    console.log(odd_while1)
    odd_while1 = odd_while1 + 2
}

//way 2

var odd_while2 = 0

while(odd_while2 <= 100){
    if(odd_while2 % 2 === 1){
        console.log('This is Odd number ' + odd_while2)
    }
    odd_while2++
}

//0.2.4.6.....100

var even_while1 = 0

while(even_while1 <= 100){
    console.log('this is even number ' + even_while1)
    even_while1 = even_while1 + 2
}

var do_while = ''
do {
    console.log(do_while +' HM Nayeem')
    do_while++
} while(do_while > 10)

//nested loop
var s = 5
for (var t = 1; t <= s; t++){
    var result = ''
    for (var x = 1; x <= t; x++){
        result += x + ' '
    }
    console.log(result)
}
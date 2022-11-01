var arr = [39, 11, 10]

var arr1 = [4, 24, 5, 6,7 ]

function sumOfArray(number) {
var sum = 0

for(var i = 0; i < number.length; i++){
    sum += number[i]
}

console.log(sum)
}

sumOfArray(arr)
sumOfArray(arr1)
var m = {
    laptop_name: 'HP Eletebook 840 G3',
    Prossesor: 'Inter Core i5 6300u',
    Ram: '8 GB',
    SSD: 'Samsung'
}

console.log(Object.keys(m))
console.log(Object.values(m))

var laptop = Object.assign(m)

console.log(laptop.Prossesor)

for(var i in m){
    console.log(i + ' : ' +m[i])
}
var a = 50

var b = 50

switch(a < b || a == b) {
    case true :
        console.log('A Is less than  B') 
        break
    case false : 
    console.log('A Is greater than B')
    break

    case a == b: 
    console.log('A equal to B')
    break

    default :
    console.log('NO VALUE')
}




// Get Day

let today = new Date().getDay()

switch(today) {
    case 0:
        console.log('Today Is Sunday')
        break
    case 1:    
        console.log('Today Is Monday')
        case 2:
        console.log('Today Is Tuesday')
        break
    case 3:    
        console.log('Today Is Wednesday')
        break
        case 4:
        console.log('Today Is Thursday')
        break
    case 5:    
        console.log('T0day is Friday')
        break
    case 6: 
    console.log('Today Is saturday')
    break
    
    default:
    console.log('invalid day')
}

// get time

let time = new Date()
time.getTime()

switch(time) {
    case time < 18 :
        console.log('Good Day')
        break
    default :
    console.log('Good Evening')
}

//odd even by switch

var a = 34

switch(a) {
    case a % 2 == 0 :
        console.log(a + ' Is Even')
        break
    default :
    console.log(a + ' is Odd') 
}

// Raffel drow

var random = Math.floor(Math.random() * 10)
console.log(random)

switch(random) {
    case 0 :
        console.log('Nayeem Is win')
        break

    case 1 :
        console.log('Abid Is win')
        break

    case 2 :
        console.log('Mahadi Is win')
        break

    case 3 :
        console.log('Habibullah Is Win')
        break
    case 4 :
        console.log('Asik Is win')
        break

    case 5 :
        console.log('Shofi Is win')
        break
    
    case 6:
        console.log('Tawhid is win')
        break
    case 7: 
        console.log('Asad Is win')
        break

    default :
    console.log('NO VALID WINER')
    
}

// diffrent way to create raffel drow

var arr = ['Nayeem', 'Asad', 'Ashik', 'Tawhid', 'Habibullah']

var number = Math.floor(Math.random() * arr.length)

console.log(arr[number])


// function concat(...args){
//     let newArr;
//    args.forEach(arr=>{
    
//    })
//    return newArr
// }


// console.log(concat([1, 2, 3], [4, 5], [6, 7]))

// const arr = [1,2,3,4]
// const arr2 = [5,6,7,8]

// const newArr = arr.concat(arr2)
// console.log(newArr)
// concat([1], [2], [3], [4], [5], [6], [7])

// concat([1, 2], [3, 4]) 
// concat([4, 4, 4, 4, 4])

// let arr = [1, 2, 3, 4]

// function calculate(a,b,c,d,){
//     return 'Sum: ' + (a +b+c+d )
// }
// console.log(calculate(...arr))

// নিচে স্প্রেড oparator push করার কাজে লাগানো হয়েছে। 

// const nameArr = ['Naim', 'Abdullah', 'Asadul']

// const nameArr5 = ['bangladesh', ...nameArr, 'Language']

// console.log(nameArr5)

// নিচে স্প্রেড oparator concat করার কাজে লাগানো হয়েছে।

// let arrOne = [1,2,3,4,5]
// const arrTow = [6,7,8,9,10]

// arrOne = [...arrOne, ...arrTow]

// console.log(arrOne)

/*========================= 
Rest Parameters 
=========================*/

// arguments object এর সুবিধা অসুবিধা। 

// function args(){
//     for(let i = 0; i<arguments.length; i++){
//         console.log('Passed: ' + arguments[i])
//         console.log(arguments)
//     }
// }

// args('Bangladesh', 'India', 'Sri Lanka')

// এটা error দেবে কারণ Arrow function এ arguments অবজেক্ট পাস করা যায়না 

// const arrowArgs = ()=>{
//     for(let i = 0; i<arguments.length; i++){
//         console.log('Passed: ' + arguments[i])
//     }
// }

// arrowArgs('Rahim', 'Karim')

// এটা error দেবে কারণ Arrow function এ arguments অবজেক্ট লুপ করা করা যায়না 

// function args(){
//     let argsArr = Array.prototype.slice.call(arguments) // তবে এই লাইন্টি অ্যাড করলে কাজ করবে 
//     argsArr.map(one=>{
//         console.log('Arguments passed: ' + one)
//     })
// }

// args('Bangladesh', 'Arab')

// function printName(...args){
//     for(let i = 0; i<args.length; i++){
//         console.log('Arguments Passed: '+ args[i])
//     }
// }

// printName('Sakib', 'Tamim', 'Naim')

// const numberArg = (...args)=>{
//     args.forEach(number=>{
//         console.log('passed: ' + number)
//     })
// }

// numberArg(...[1, 2, 3, 4])

// function concat(...args) {
//     const newArr = []
//     let sum = 0
// 	args.forEach(one=>{
//         newArr.push(...one)
//     })
// 	newArr.forEach(n=>{
//         sum += n
//     })
//     return sum
// }

// console.log(concat([1, 2, 3]) )

// const obj = {a: 10, b: 20}

// let newObj= Object.entries(obj)

// console.log(obj)
// console.log(newObj)

// console.log(Array.from('abcd'))


// const obj = {a: 10, b: 20}

// console.log(Array.from(obj))

// function arr(arr){
//  let length = arr.length
//     if(length === 0){
//         return `no one like this`
//     }else if(length===1){
//         return `${arr[0]} likes this`
//     }else if(length===2){
//         return `${arr[0]} And ${arr[1]} Like this`
//     }else if(length===3){
//         return `${arr[0]}, ${arr[1]} And ${arr[2]} like this`
//     }else{
//         return `${arr[0]}, ${arr[1]} And other ${length - 2} like this`
//     }
// }

// console.log(arr(["Jacob", "Alex", "Mark", 'max', 'asad']));                             
// ["Peter"]                         
// ["Jacob", "Alex"]               
// ["Max", "John", "Mark"]           
// ["Alex", "Jacob", "Mark", "Max"]

// let obj1 = {
//     a: 10,
//     b:20
// }

// let obj2 = {
//     ...obj1,
//     c: 30
// }

// console.log(obj2)


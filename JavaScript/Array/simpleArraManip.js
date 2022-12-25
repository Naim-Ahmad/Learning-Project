// function incrementItems(arr){
//     let tempArr = []
//     arr.forEach(num => {
//         tempArr.push(num+1)
//     });
//     return tempArr
// }

// console.log(incrementItems([0, 1, 2, 3]))

// console.log(incrementItems([2, 4, 6, 8]));

// console.log(incrementItems([-1, -2, -3, -4]))


// function secondLargest(arr) {
// 	return arr.sort((a, b)=>b-a)[1]
// }

// console.log(secondLargest([10, 40, 30, 20, 50]))

// let arr = [[3], 4, [2], [5], 1, 6]

// console.log(arr.sort())


// function compact(arr) {
//     let tempArr = []
// 	arr.forEach(item=>item && tempArr.push(item))
//     return tempArr
// }

// function compact(arr) {
//     return arr.filter(Boolean)
// }

// console.log(compact([0, 1, false, 2, "", 3]))

// function flatten(arr) {
//     let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//       arr2.push(...arr[i])
//     }
//     return arr2;
//   }

//   console.log(flatten([[1, 2], [3, 4]]));


// function clone(arr){
//   let tempArr = [...arr]
//   tempArr.push(arr)
//   return tempArr
// }


// console.log(clone([1, 1]))
function new_avg(arr, navg){
  let sum = 0
  arr.forEach((n)=>{
    sum+=n
  })
  return sum * navg
} 

console.log(new_avg([14, 30, 5, 7, 9, 11, 15], 92))
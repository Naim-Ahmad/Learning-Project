let person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      
    }
  }

console.log(person.firstName)
for(var i in person){
  console.log(person[i])
}

//   /*
// The code below will change
// the heading with id = "myH"
// and the paragraph with id = "myP"
// in my web page:
// */
let obj1 = {
  a: 1,
  b: 2,
  c: 3
}

obj1.a = 33
obj1["v"] = 100

var prop = 'b'

obj1[prop] = 200

console.log(obj1)

delete obj1['v']

var copy = Object.assign({}, person)

copy.firstName = 'Maliha'
copy['lastName'] = 'Tasnim'
copy['age'] = 15
console.log(copy)

//search property in object
console.log('' in obj1)

//truverse object



// let obj2 = Object()

// obj2.a = 4

// console.log(obj2)

// let obj3 = new Object()

// obj3['b'] = 30

// console.log(obj3)


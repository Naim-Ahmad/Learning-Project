// //date object 4 ti poddoti te create kora jay
// //1
// var a = new Date();
// let b = a.getHours()
// // console.log(a)
// console.log(b%12)
// // // console.log(a.toLocaleDateString())
// // // console.log(a.toTimeString())

// // // console.log(a.getDate())
// // // console.log(a.getMonth())
// // // console.log(a.getFullYear())

// // // console.log(a.getHours())
// // // console.log(a.getMinutes())
// // // console.log(a.getSeconds())
// // // console.log(a.getMilliseconds())

// // // var b = new Date()
// // // console.log(a.setDate())
// // // console.log(b.setFullYear(2020))
// // // console.log(a.setHours())

// // // 4 way to create date object
// // //way 1
// // console.log(new Date())

// // //way2
// // //Using new Date(7 numbers), creates a new date object with the specified date and time
// // console.log(new Date(2020, 8, 11, 10, 10, 10, 10).toLocaleString())

// // //way3 new Date(dateString)
// // console.log(new Date("december 26, 1998 11:13:00").toString())

// // //way 3 new Date(milliseconds)
// // console.log(new Date(-100000000000))

// // //Displaying Dates
// // console.log(new Date().toString())
// // console.log(new Date().toUTCString())
// // console.log(new Date().toLocaleString())
// // console.log(new Date().toTimeString())
// // console.log(new Date().toDateString())
// // console.log(new Date().toISOString())

// // // Date Format 3 ta .. 1. ISO format example "2015-03-25" (The International Standard),, 2. shor format example "03/25/2015",,, 3. Long format example "Mar 25 2015" or "25 Mar 2015"

// // //Iso format
// // var date = new Date("1998-12-26")
// // console.log(date)

// // //ISO Date
// // console.log(new Date("1998-12"))

// // //ISO Dates (Date-Time)
// // console.log(new Date("2015-03-25T12:10:24+00:00"))

// // //Short Time
// // console.log(new Date("12/26/1998"))

// // //Long date
// // console.log(new Date("Dec 26 1998"))
// // console.log(new Date("26 Dec 1998"))

// // console.log(new Date("Jan 25 2015"))
// // console.log(Date.parse("March 21, 2012"))
// // //

// // // Get mathod
// // // get time
// // //The getTime() method returns the number of milliseconds since January 1, 1970
// // console.log(new Date().getTime())
// // //
// // let d = new Date().getTime()
// // let s = new Date(d).toString()
// // console.log(s)

// // //get month
// // console.log(new Date().getMonth())
// // //You can use an array of names, and getMonth() to return the month as a name
// // var date = ["January","February","March","April","May","June","July","August","September","October","November","December"]

// // var ds = new Date()
// // console.log(date[ds.getMonth()])
// // console.log(new Date(1649563466015))


// // // get full year mathod
// // console.log(new Date().getFullYear())

// // //The getDay() Method
// // //The getDay() method returns the weekday of a date as a number (0-6):

// // let day = new Date().getDay()
// // console.log(day)

// // //You can use an array of names, and getDay() to return the weekday as a name:
// // const days_Name = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// // let days = days_Name [new Date().getDay()]

// // console.log(days)

// // //set Date methods
// // //set FullYaear()
// // var date = new Date()
// // console.log(new Date(date.setFullYear(2022)).toLocaleString())

// // var mili = new Date().setFullYear(2050)
// // console.log(new Date(mili))

// // var mili = new Date()
// // year = mili.setFullYear(2050)
    

// //     console.log(mili)


// // ///////////basic////////////////////////
// // console.log('****basic****')

// // var date = new Date()
// // console.log(date)
// // console.log(date.toLocaleString())
// // console.log(date.toTimeString())
// // console.log(date.toDateString())
// // console.log(date.getFullYear())
// // console.log(date.getDate())
// // console.log(date.getMonth())
// // console.log(date.getDay())
// // console.log(new Date(date.setDate('5')).toLocaleString())

// // //set FullYaear()
// // console.log(new Date().setFullYear("2020")) // output millisecond

// const set = new Date();
// set.setFullYear(2020);
// console.log(set) //ekhane time asteche keno?

let date = new Date()
date.setHours(12)
console.log(date)


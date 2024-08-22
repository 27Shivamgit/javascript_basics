let day="Tuesday "
console.log(day.length)

let subday=day.slice(4,7)
console.log(subday)

let splitday=day.split("s")
console.log(splitday[0])

console.log(splitday[1].length)

console.log(splitday[1].trim())

console.log(splitday[1].trim().length)
console.log(splitday[0].length)

/************************************************************* */

let date="23"
let nextdate="27"
let diff=nextdate-date          //Might give wiered output
console.log(diff)
let diff1=parseInt(nextdate) - parseInt(date)
console.log(diff1)
diff1.toString


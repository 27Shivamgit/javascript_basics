let day="Tuesday "

let newQuote=day+"is Funday"
console.log(newQuote)

let val=newQuote.indexOf("day")
console.log(val)

let val1=newQuote.indexOf("day",5)
console.log(val1)

// to check the occurance of any particular string/sub string

//let val=newQuote.indexOf("day")
let count=0
while(val!==-1)
{
    count++
    val=newQuote.indexOf("day",val+1)
}
console.log(count)
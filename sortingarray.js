let fruits=["Banana","Mango","Apple","Pear"]
//fruits.sort()                                   //sorting the array with strings
//console.log(fruits)
console.log(fruits.sort())              //Ascending
console.log(fruits.reverse())           //Descending

let scroes=[10,21,22,11,12,4]
console.log(scroes.sort())      //return wrong result
scroes.sort(function(a,b){                      //Bubble Sort in Recursive Manner
    return a-b    
})
console.log(scroes)

// Alternate Method             --> Advanced
console.log(scroes.sort((a,b)=>a-b))            //Recursive Bubble Sort
console.log(scroes.sort((a,b)=>b-a))            //Descending

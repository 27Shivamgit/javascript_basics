/*var marks=array(6)
var marks=new Array(20,40,35,45,48,41)*/

// or

var marks=[20,40,35,45,48,41]

console.log(marks[2])
marks[3]=39
console.log(marks)
console.log(marks.length)

marks.push(64)          //appends array
console.log(marks)

marks.pop()             //deletes last element of the array
console.log(marks)

marks.unshift(29)       //adds element in the begining of the array
console.log(marks)

console.log(marks.indexOf(29))      //Gets the index of a particular value in the array

console.log(marks.includes(40))     //To check whether a particular value in present in the array or not

submarks=marks.slice(2,5)        //slices the array
console.log(submarks)

//printing each value of the array separately
for(let i=0;i<marks.length;i++)
{
    console.log(marks[i])
}

//printing sum of the values of the array
var  sum=0
for(let j=0;j<marks.length;j++)
{
    sum=sum+marks[j]
}
console.log(sum)

//Alternate method w/o using for loop
let total=marks.reduce((sum,totalmarks)=>sum+totalmarks,0)            //reduce filter map
console.log(total)

//Sample 2
var scores=[21,20,22,24,25]
evenscores=[]
// return only even numbers
for(let i=0;i<scores.length;i++)
{
    if(scores[i]%2==0)
    {
        evenscores.push(scores[i])
        //console.log(scores[i])
    }
}
console.log(evenscores)

//Alternate method

let newFilteredEvenScores=scores.filter(scores=>scores%2==0)        //filters the condition
console.log(newFilteredEvenScores)


// map is used to modify every value in the array

//Sample 3
//Create a new array with even numbers an multiply each value with 3

let mappedarray=newFilteredEvenScores.map(scores=>scores*3)
console.log(mappedarray)

//Sample 4
//Create a new array with even numbers an multiply each value with 3 and return their sum
let totalval=mappedarray.reduce((sum,val)=>sum+val,0)
console.log(totalval)

//////chaining the solution instead of multiple lines
var scores1=[21,20,22,24,25]
let sumval=scores1.filter(scores1=>scores1%2==0).map(scores1=>scores1*3).reduce((sum,val)=>sum+val,0)
console.log(sumval)


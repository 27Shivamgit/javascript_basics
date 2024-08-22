/********************************************************************************************************************** */
// var scope                : golbal level/function level
var greet="Morning"             //Commenting this will throw an error saying"Greet is not defined" if not defined in block

function add(a,b)
{
    var greet="Afternoon"       //Scope of var is within this function not in block
    return a+b
}

//Block
if(1 == 1){
    var greet="Evening"       //Scope of block will override the global var value
}

console.log(add(2,5))
console.log(greet)

/************************************************************************************************************************* */
// let scope                : golbal level/block level - {}

let greet1="Morning"
greet1="Night"             

function add(a,b)
{
    let greet1="Afternoon"       
    return a+b
}

//Block
if(1 == 1){
    let greet1="Evening"       //Scope of let is within this block
}

console.log(add(2,5))
console.log(greet1)


/************************************************************************************************************************* */
// const scope                : golbal level/block level - {} and can't be re-initialized

const greet2="Morning"
greet2="Night"                  //Not allowed   

function add(a,b)
{
    const greet2="Afternoon"       
    return a+b
}

//Block
if(1 == 1){
    const greet2="Evening"       //Scope of let is within this block
}

console.log(add(2,5))
console.log(greet2)


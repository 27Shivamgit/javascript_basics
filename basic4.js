function add(a,b)
{
return a+b
}

let sum=add(2,3)
console.log(sum)

// Anonymous Functions --> Function Expression --> Don't have a name

let mul=function(c,d)           //Anonymous functions can only be assigned to variables
{
    return c*d
}

// More advanced with the hep of flat file(=>)
let mul1=(c,d)=>c*d

console.log(mul(3,9))
console.log(mul1(4,5))
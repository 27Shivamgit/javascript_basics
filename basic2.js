const flag=true

//if loop executes ones if the condition matches
if(!flag){
    console.log("Condition satisfied")
}
else{
    console.log("Not satisfied")
    console.log(flag)
}



let i=0
//while loop keeps getting executed as far as the condition matches
while(i>10){
//i =i+1
    i++
console.log(i)
}



//do while loop will run at least once in case of condition is not matching
do{
i++
}while(i>10);
    console.log(i)





//for loop will haldnle initialization, incrementation and conditionalization as well with number of loop iteration being known in prior   
for(let k=0;k<=10;k++)
{
    console.log(k)
}


//sample 1
/*let req=true
while(req){
    console.log(req)
    req=false
}*/

//sample 2
//From 1 to 10, return common multiple values of 2 and 5
for(let j=1;j<=10;j++){
if(j%2==0 && j%5==0)
    console.log(j)
}

//Sample 3
//From 1 to 10, return common multiple values of 2 or 5
for(let j=1;j<=10;j++)
    {
    if(j%2==0 || j%5==0)
        console.log(j)
    }



//Sample 4
//From 1 to 100, return common multiple values of 2 and 5 with first 3 values only
let n=0
for(let j=1;j<=100;j++)
    {
    if(j%2==0 && j%5==0)
        {
        n++
        console.log(j)
        if(n==3)
            break
        }
    }
   




    
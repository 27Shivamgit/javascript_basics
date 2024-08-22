// Object is a collection of properties

let person={

    firstName:  'Sam',
    lastName:   'John',
    age:        27,
    fullname:   function()
    {
        console.log(this.firstName+" "+this.lastName)
    }

}

console.log(person.fullname())

console.log(person.lastName)

//Alternate method to access property
console.log(person['firstName'])

//changing the property value at runtime
person.firstName='Jacob'
console.log(person.firstName)

//adding extra property value
person.gender='Male'
console.log(person)

//deleting property 
delete person.gender
console.log(person)

// To check if a particular property exists
console.log('gender' in person)

//To print all the property values
for(let key in person)
{
    console.log(person[key])
}

console.log(person.fullname())
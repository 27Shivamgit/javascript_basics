
const Person=require('./basic8')
class Pet extends Person
{
    get location()
    {
        return "BlueCross"                      //overridden method
    }
    constructor(firstName, lastName)
    {
        //call parent class constructor
        super(firstName, lastName)
    }
}

let p=new Pet('Din', "ch")
p.fullName()
console.log(p.location)

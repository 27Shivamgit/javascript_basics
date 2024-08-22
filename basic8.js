// class
module.exports=class Person             //Class made public
//class Person
{
    age=27                                  //class variable or class property
    //location='India'                  direct declaration
    //property
    get location()                      //using getter
    {
        return "India"
    }
    // constructor is a method which gets executed by default when we create object of the class
    constructor(firstName, lastName)        //instance variables    : new vlaues for every object
    {
        this.firstName=firstName            //instance variable or instance property
        this.lastName=lastName
    }
    //method
    fullName()
    {
        console.log(this.firstName+" "+this.lastName)
    }
}

/*//let person=new Person()
let person=new Person('Sam', 'Bahadur')
let person1=new Person("Manek", "Shaw")

console.log(person.age) 
console.log(person.location)


console.log(person.fullName())
console.log(person1.fullName())*/

// Using this class in next file by exporting this particular class


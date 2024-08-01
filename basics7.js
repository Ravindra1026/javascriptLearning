module.exports = class Person
{
    age = 25
    get location()
    {
        return "Canada"
    }
    // Constructer is method which executes by default when you create object of the class 
    constructor(firstName, lastName)
    {
        this.firstName = firstName
        this.lastName = lastName
    }
    //methods
    fullName()
    {
        console.log(this.firstName+this.lastName)
    }



}
//let person = new Person("Tim", "Joseph")
//console.log(person.age)
//console.log(person.location)
//console.log(person.fullName())
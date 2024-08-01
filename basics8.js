//Inheritance is the main pillar in object oriented programming 
//One class can inherit/acquire the properties, methods of another class 
//The class which inherit the properties of other is known as sub class(derived class, child class)
//The class whose properties are inherited is known as superclass
const Person = require("./basics7") 
class Pet extends Person

{
    get location()
    {
        return "BlueCross"
    }
    constructor(firstName,lastName)
    {
        // call parent class constructor
        super(firstName,lastName)
    }





}
let pet =new Pet("sam","sen")
    pet.fullName()
    console.log(pet.location)
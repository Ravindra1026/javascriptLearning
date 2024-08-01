const Person = require('./basics7')
let day = 'tuesday '
console.log(day.length)// 8
let subDay = day.slice(0,4)
console.log(subDay)
console.log(day[1])
// split the string in the way that tue and day are 2 sperate strings
let splitDay =day.split("s") 
console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)
//diffrence between two dates 
let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date) //date converted into number 
console.log(diff)
diff.toString() // converting the diffrence into string 
//concating two strings 
let newQuote = day + "is a funday"
console.log(newQuote)
let val = newQuote.indexOf("day")
console.log(val)
//tuesday is a funday how many times day occured in the string 
let count = 0
let value = newQuote.indexOf("day")
while(value !== -1)
{
    count++
    value = newQuote.indexOf("day", value+1)
}
console.log(count)
let person = new Person("Chris","Edward")
console.log(person.fullName())
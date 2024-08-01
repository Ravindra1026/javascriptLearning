var marks = Array(6)
var marks = new Array(20,40,35,60,49,99)

var marks = [20,40,35,60,49,99]
submarks = marks.slice(2,5)
console.log(submarks)
console.log(marks[2])
marks[3] = 80
console.log(marks)
console.log(marks.length)
// add a element at last
marks.push(68)
console.log(marks)
//delete a element from last 
marks.pop()
console.log(marks)
//add an element at first 
marks.unshift(33)
console.log(marks) //[33, 20, 40, 35, 80, 49, 99]
console.log(marks.indexOf(80))//4   

// 120 is persent or not 
console.log(marks.includes(120))
console.log("********************")

var sum = 0
for(i=0;i<marks.length;i++)
{
   // console.log(marks[i])
   sum = sum + marks[i]
}
console.log(sum)

//reduse filter map
let total = marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)
//create a new array with even numbers of scores array 
var scores = [12,13,14,16]
var evneScores = []
for (let i=0; i<scores.length;i++)
{
    if(scores[i]%2==0)
    {
        evneScores.push(scores[i])
    }
    
}
console.log(evneScores)
//scores.filter(score)
let newFilterEvenScores = scores.filter(score=>score%2==0)
console.log(newFilterEvenScores)

//map
//Create new array with even numbers of score and multiply each value with 3 array [12,13,14,16]
let mappedArray = newFilterEvenScores.map(score=>score*3)
console.log(mappedArray)
//sum all the array element in mapped array [36, 42, 48]
let totalVal =mappedArray.reduce((sum,val)=>sum+val,0)
console.log(totalVal)

//single line code for above 
var scores1 = [12,13,14,16]
let sumValue = scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)   
console.log(sumValue)
//sorting an array
let fruits = ["banna", "mango","pomegrante", "apple"]
fruits.sort()
console.log(fruits)
var scores1 = [12,003,19,14,16]
console.log(scores1.sort((a,b)=>a-b))
console.log(scores1.sort((a,b)=>b-a))
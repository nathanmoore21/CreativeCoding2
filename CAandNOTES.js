//CA

-Build Bar chart
-Translations
-Beautify
-Comment
-Report
    -Methods
    -Algorithms
    -Approaches Taken
    -500-1000 words
-2 bar charts (in class)
-2 horizontal bar chart (in class)
-1 stacked bar chart
-Report (5 intersting code highlights)
-Github



//Notes

{OBJECT}
(FUNCTION)
[ARRAY]

/////////////////////////////////////////////////////////////////////////////VARIABLES
//declaring a variable for distance
let distance = 23

// - different types of variables = string, float, int
String "John"
float 1.34
integer 3
boolean true
Array [List, list, list]
object{}

/////////////////////////////////////////////////////////////////////////////FUNCTIONS
// () calling a function //empty () is an empty parameter
clap () 
rect (12,34,56,78) // - () parameteres are inside they are something you pass through to the function
//declaring function
function clap(){
    make a clap noise
}

/////////////////////////////////////////////////////////////////////////////OBJECTS
let myObject = {name:"John", age:37}
// to call an object - 
// myObject.age - its an object so you dont have to type a number, you can just call it by its name


/////////////////////////////////////////////////////////////////////////////TRANSLATIONS
//See sketch.js in week1day2

/////////////////////////////////////////////////////////////////////////////ACTUAL WORK
//See scetch week2day1

/////////////////////////////////////////////////////////////////////////////MAPPING
//map (takes 5 arguments)
//map(__,__,__,__,__)
//map(     1.what is the value that has the current range that i want to map to the new range - (mouseX),
        // 2.min of current range, 
        // 3.max of current range,
        // 4.min of new range, 
        // 5.max of new range  )


/////////////////////////////////////////////////////////////////////////////ARRAY

names = ["David", "Mary", "Peter"]
numbers = [123456,678901,123567]
ages = [23,24,25]

let myArray = [a,b,c]
//to call an array -
//myArray[0] - starts at 0 (0,1,2,3,4) - 

// if statement = condition - if the condition is met perform this
// = is assign opp. == is comparison opp.


//how do you access an element in an array in JS
//arrayName[index of the element]
//data[1] 100

//object with two properties
//obj = {name:"Oranges", total:23};
//obj.name "Oranges"
//obj.total 23

// let newData = [
//     {name:"Oranges", total:63, subTotals:[23,45,5]}, 
//     {name:"Bananas", total:33, subTotals:[23,45,5]}, 
//     {name:"Pears", total:21, subTotals:[12,8,1]},
//     {name:"Apples", total:43, subTotals:[23,45,5]},
// ]

//how do you access an element in an array in JS
//newData[2] = {name:"Pears", total:21},
//newData[2].name = Pears
//newData[3].total = 43
//newData[1].name = Bananas
//newData[2].subTotals[2] = 1
//newData[3].subTotals[1] = 45

/////////////////////////////////////////////////////////////////////////////COLOURS
colors = [
    color('#ffe066'),
    color('#fab666'),
    color('#f68f6a'),
    color('#f3646a')
] //this is in the setup

translate(margin, 0);
for (let i = 0; i < scaledData.length; i++) {
    let colorNumber = i % 4;
    //modulus operator
    //tell me the remainder
    // 10 % 4 = 2 (10 goes into 4 twice with the remained of 2) 
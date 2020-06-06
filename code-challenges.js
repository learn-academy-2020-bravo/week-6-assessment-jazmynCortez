// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]

//function takes in an array
const myFunction = (array) => {
//create a variable instance map over the array of objects in order to get to the names
  let sentence = array.map(person => {
    //create a variable instance split the array to where the names are within it's own array
    let personArray = person.name.split(" ")
    //create a variable instance that will then be able to map over the names
    //use charAt to acces which index of the array we want to access within the name, then use substring to tell when to stop capatilizing letters
    let upperCase = personArray.map(name => {
      return name.charAt(0).toUpperCase()+name.substring(1)
      //join the strings together
    }).join(" ")
    //return sentence of array with string interperlation
    return `${upperCase} is a ${person.occupation}.`
  })
  //join the function output together so it's not within an array rather it's a sentence
  return sentence.join(" ")
}
//call my function
// console.log(myFunction(people));
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

//create myFunction takes in an array
const remainderOfThree = (array) => {
  //filter array to get onlyNums
  let onlyNums = array.filter(value => typeof value === 'number')
  //map over onlyNums and divide by 3 - use modulo cause we want remainders rather than answers of normal divisioins
  return onlyNums.map(value => value%3)
}
  //return remainders
// console.log(remainderOfThree(testingArray1));
// console.log(remainderOfThree(testingArray2));

// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

//create a function that has a name that makes sense and takes in two arrays
const comboNoDups = (array1, array2) => {
  //create a variable that will hold a method to be able to combine the two arrays as one - use .concat
  let comboArray = array1.concat(array2)
  //then filter through the big array
  return comboArray.filter((value, index) => {
    //we don't care about the index of each array rather we care about the value of each array, so by using .indexof method within filter, we'll be able to compare values within the array to return only one instance of each value
    return comboArray.indexOf(value) === index
  })
}
//call the function!
console.log(comboNoDups(testingArray3, testingArray4))

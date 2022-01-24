// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//The ability of functions to be used as values and can be passed as arguments to another function is called first class function.

//function statement aka function declaration--
// function a (){
//   console.log('hi statement') | Hoisting works
// }


//function expression----
// var a = function(){
//   console.log('hi expression') | Hoisting does't work
// }


//Anonymous function-----
// function (){
 // It is used where functions are used as values like in function expression.
// }


// Named function expression-----
// var a = function xyz(){
//   console.log('hi expression') | Hoisting does't work
// }

//Diff b/w parameter & arguments-----
// function a (param1,param2){ | parameters
//   console.log('hi statement') | Hoisting works
// }
// a(1,2) | arguments

//remove numbers from string------
// var s = 'good123jaiswal'
// var r = s.replace(/[0-9]/g,'')

// convert string into title case-----
// var t = r.map(x =>{
//   return x.charAt(0).toUpperCase()+x.slice(1)
// }).join(" ")

//revers a string----
// var s = 'abcdefg'
// var r = s.split('').reverse().join('');

//revers a sentence----
// var s = "hi my name is gagan"
// var r = s.split(' ').reverse().join(' ')

//revers sentence and the words in sentence---
// var s = 'hi my name is gagan'
// var p = s.split(' ').map(x=>{ return x.split('').reverse().join('')}).reverse().join(" ");

//find unique element in string/aaray-----
// var a = [1,2,4,4,5,6,789,3,6,9,55,3,3]
// var r = [...new Set(a)];

// check if aaray/string has all unique element---
// var a = [1,22,3,1,2,4,5,8,4,9,5]
// if((new Set(a)).size !== a.length){
//   console .log(false)
// }else{
//   console.log(true)
// }



//sort an aaray in aces & dec---
// var a = [3,6,2,8,5,9]
// var r = a.sort() //aces
// var r = a.sort((a,b)=> a - b) //aces
// var r = a.sort((a,b)=> b - a) //decs
// var r = a.sort().reverse() //dec
//---with loops---
// var a = [3,6,2,8,5,9]
// var s = 0;
// for(let i =0;i<a.length;i++){
//   for(let j=i+1;j<a.length;j++){
//     if(a[i]>a[j]){   //for dec change > to <
//       s = a[i]
//       a[i] = a[j]
//       a[j] = s
//     }
//   }
// }



// deep copy of an object---
//JSON.parse(JSON.stringify(object)) will deep clone if you don't have date, functions in your object !!!
// const a = {
//   string: 'string',
//   number: 123,
//   bool: false,
//   nul: null,
//   date: new Date(),  // stringified
//   undef: undefined,  // lost
//   inf: Infinity,  // forced to 'null'
//   re: /.*/,  // lost
// }
// console.log(a);
// console.log(typeof a.date);  // Date object
// const clone = JSON.parse(JSON.stringify(a));
// console.log(clone);
// console.log(typeof clone.date);



//Convert Obj into array------
//let obj = { id: "1", name: "Test User", age: "25", profession: "Developer" };
//Method 1: Convert the keys to Array using - Object.keys()
//console.log(Object.keys(obj));
// ["id", "name", "age", "profession"]
// Method 2 Converts the Values to Array using - Object.values()
//console.log(Object.values(obj));
// ["1", "Test User", "25", "Developer"]
// Method 3 Converts both keys and values using - Object.entries()
//console.log(Object.entries(obj));
//[["id", "1"],["name", "Test User"],["age", "25"],["profession", "Developer"]]



//How to convert an Array [] to Object {} in JavaScript?----
// let arr = ["1", "Test User", "25", "Developer"];
// let arr1 = [
//   ["id", "1"],
//   ["name", "Test User"],
//   ["age", "25"],
//   ["profession", "Developer"],
// ];
//Method 1: Using Object.assign() method
//console.log(Object.assign({}, arr));
//{0: "1", 1: "Test User", 2: "25", 3: "Developer"}
// Method 2 Using Spread operator
//console.log({ ...arr });
//{0: "1", 1: "Test User", 2: "25", 3: "Developer"}
// Method 3: Using Object.fromEntries() method
//console.log(Object.fromEntries(arr1));
//{id: "1", name: "Test User", age: "25", profession: "Developer"}


//How to check string are anagrams---
// const areAnagram = (str1, str2) => str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
// console.log(areAnagram('gagan','nagga'));

//Count number of vowels----
// const v = (str) =>{
//   let c = 0;
//   let k = 'aeiou'
//   for(let i of str){
//     if(k.includes(i)){
//       c++
//     }
//   }
//   console.log(c);
// }
// v('abvdefi')

// Rotate array by nth position
// let a = [1,2,3,4,5,6]
// for(let i = 0;i<1;i++){
//   a.unshift(a.pop())
// }
// console.log(a)

//[1,2,3,6,7,8,9] convert to chunk of 2 = [[1,2],[3,6],[7,8],[9]]
// let chunks = (array,size) => {
//   let chunks = [];
//   let i = 0;
//   while(i<array.size){
//     chunks.push(array.splice(i,i+size))  /// Not working now
//     i += size;
//   }
//   return chunks;
// }
// console.log(chunks([1,2,3,6,7,8,9],2));

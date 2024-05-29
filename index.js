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
// var t = r.split('').map(x =>{
//   return x.charAt(0).toUpperCase()+x.slice(1)
// }).join("")


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



//Count number of vowels and their frequnecy----
// const sentence = "This is a sample sentence to count the number of vowels and their frequency.";
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// const frequency = {};
// let count = 0;
// for (let i = 0; i < sentence.length; i++) {
//   const char = sentence[i].toLowerCase();
//   if (vowels.includes(char)) {
//     count++;
//     if (frequency[char]) {
//       frequency[char]++;
//     } else {
//       frequency[char] = 1;
//     }
//   }
// }
// console.log(`The sentence has ${count} vowels.`);
// console.log("Frequency of vowels:");
// console.log(frequency);



// Rotate array by nth position
// let a = [1,2,3,4,5,6]
// for(let i = 0;i<1;i++){
//   a.unshift(a.pop())
// }
// console.log(a)



//[1,2,3,6,7,8,9] convert to chunk of 2 = [[1,2],[3,6],[7,8],[9]]
// const arr = [1, 2, 3, 6, 7, 8, 9];
// const chunkSize = 2;
// const result = [];
// for (let i = 0; i < arr.length; i += chunkSize) {
//   result.push(arr.slice(i, i + chunkSize));
// }
// console.log(result);



// put zeros at end of an array
// let arr = [1,2,0,0,5,4,0,3];
// let arr2 = [];
// function a(arr){
//   let a1 = arr.filter((x)=>{
// 	if(x === 0){
//   arr2.push(x)
//   }
//   return x != 0;

//   })
//   let R = a1.sort((a,b) => a-b);
//   let r = [...R,...arr2]
//   console.log(r)
// }
// a(arr);



// Infinite currying
// let sum = function(a){
//   return function(b){
//     if(b){
//     return sum(a+b);
//     }
//     return a;
//   }
// }
// console.log(sum(2)(3)())



//count number of character in a string
// function count(s){
//   let r = {};
//   let count=0;
//   s.split('').forEach((x)=>{
//   r[x] ? r[x]++ : r[x]=1
//   })
//   return r
//   }

//   console.log(count('gagan'))



//recursion example
//countdown to 10
//function count(n){
//   console.log(n)
//   let newN = n-1
//   if(newN>0){
//     count(n)
//   }
// }
// count(10);



// function flatten(arr) {
//   return arr.reduce(function (flat, toFlatten) {
//     return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
//   }, []);
// }
// Another approach -----> 
// function flattenArray(arr) {
//   return arr.reduce((pre,curr) => {
//     if(Array.isArray(curr)) {
//       pre = pre.concat(flattenArray(curr));
//     } else {
//       pre.push(curr);
//     }
//     return pre;
//   },[])
// }
// console.log(flattenArray([[1,2],[[2,4,[3,[5,8]]]]]));
// let a = [1, 2, [3, 4, [5, 6]]];
// let result = flatten(a)
// console.log(result);



// function get(obj, path, value) {
//   for(let key in obj) {
//       if(obj.hasOwnProperty(key)) {
//           if(typeof obj[key] === 'object') {
//               get(obj[key])
//           } else {
//               console.log(obj[key])
//           }
//       }
//   }
// }
// const obj = {
//   a: {
//       b: {
//           c: {
//               d: 10
//           }
//       }
//   }
// }
//get(obj, 'a.b.c.d'); output = 10
//get(obj, 'a.b.c.x.y.z', 100); default value = 100


//valid palindrom----------------->
// const isPalindrome = s => {
//   s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
//   for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
//     if (s.charAt(i) !== s.charAt(j)) return false;
//   }
//   return true;
// }


//memoization code for adding two number:-
// here we are passing a function in this case addTow, use can any function and have to define that function just like addTwo();
//
// const memo = (fn) => {
//   const cache = {};
//   return (...args) => {
//     const str = JSON.stringify(args);
//     if(str in cache) {
//       console.log('returning from cache');
//       return cache[str];
//     } else {
//       console.log('returning from function');
//       const result = fn(...args);
//       cache[str] = result;
//       return result;
//     }
//   }
// }
// const addTwo = (a,b) => a+b; -----------> function defined here.
// const ans = memo(addTwo);
// console.log(ans(1,2));
// console.log(ans(1,2));



//To flatten deeply nested object.
// function flattenObject(obj, prefix = '') {
//   let flattened = {};

//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       const newKey = prefix ? `${prefix}.${key}` : key;

//       if (typeof obj[key] === 'object') {
//         Object.assign(flattened, flattenObject(obj[key], newKey));
//       } else {
//         flattened[newKey] = obj[key];
//       }
//     }
//   }

//   return flattened;
// }
// Example usage:
// const nestedObject = {
//   a: 5,
//   b:{
//     c:3,
//     f:8,
//     e:{
//       g:1
//     }
//   },
//   q:2
// };
// const flattenedObject = flattenObject(nestedObject);
// console.log(flattenedObject);

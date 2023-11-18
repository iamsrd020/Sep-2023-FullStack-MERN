// let num 1=30
// console.log(typeOf(num 1))

// string
// let var_1='tvgyubhjbyu'
// console.log(var_1)

// let full_name=`Darshan`
// let out=full_name.split('  ')
// console.log(out)

// let news=` India is very osm`
// // out=news.replace('India', 'USA')

// out=news.indexOf('a')

// console.log(out)

// let name=`DARSHAN`
// let out=name.reverse()
// console.log(out)

// function reversingString(){
// 	let str="Welcome to ITD"
// 	console.log(str.reverse())
// }
// // const abc="Welcome to ITD"
// // console.log(abc)
// reversingString()

// Revesring a string
// const str='Welcome to ITD';
// const arr=str.split('');

// console.log(arr.reverse().join(" "))

// function fibonacci(num){
// 	let num1=0;
// 	let num2=1;
// 	let sum;

// 	for(let i=0; i<num; i++){
// 		sum=num1+num2;
// 		num1=num2;
// 		num2=sum;
// 	}
// }
// console.log(fibonacci(num=1,2,3,4,5,6,7))

// let num=parseInt(prompt(''))
// let a=0;
// let b=1;
// let c;



// fibonacci series 


// const number = parseInt(prompt('Enter a positive number: '));
// let n1 = 0, 
// n2 = 1, 
// n3;

// console.log('Fibonacci Series:');
// console.log(n1); 
// console.log(n2);

// n3= n1 + n2;

// while (n3 <= number) {

    
//     console.log(n3);
// 	n1 = n2;
//     n2 = n3;
//     n3= n1 + n2;
    
// }



//Even NUmbers

// var num=0;
// while(num%2 == 0 && num<50){
//     console.log(num);
//     num++;
// }
// console.log("Print the even numbers till 50")


// for(let i=2;i<=50; i+=2){
//     console.log(i)
//     // console.log(`The value of i is ${i}`)
// }



// function SRD(str){
//     return /^[a-z,A-Z,0-9]+$/.test(SRD)
// }
// const a="Hello12345"
// const b="ABCDEFGHIJ@123456789"

// console.log(a)
// console.log(b)



/* forEach and Map Method */
// const a=['1','2','3','4','5','6']
// a.forEach(function(a){
//     console.log(a*2)
// })


// const b=['1','2','3','4','5','6']

// const numbers=b.map(function(b){
//     return b*2
// })
// console.log(typeof(numbers),(numbers))



//inner and outer function
// function a(){
//     const outer="srd"

// function b(){
//     const inner="bng"
//     console.log(outer)
//     console.log(inner)
// }
// return b
// }

// const c=a()
// c()

// let a=[2,24,18,45,78,25]
// let b=a.filter((el)=>el<20)
// console.log(b)


// console.log(this === window);

// function man(name){
//     this.name=name;
// }
// const SRD=new man("MSD")
// console.log(MSD.name)

// function toGetCharRange(start, end) {
//   const charArray = [];
  
//   for (let charCode = start.charCodeAt(0); charCode <= end.charCodeAt(0); charCode++) {
//     charArray.push(String.fromCharCode(charCode));
//   }
  
//   return charArray;
// }

// const requiredRange = toGetCharRange('A', 'Z');
// console.log(requiredRange); 


// callbacK
// function printHello(){
//     console.log("Hello")
// }
// function printWorld(){
//     console.log("World")
// }
// printHello()
// printWorld()

// const x=5;
// const y=10;
// console.log(x,y)

// p for given any number is an float or integer

// function A(B) {
//     if (Number.isInteger(B)) {
//         console.log(`${B} is an integer.`);
//     }
//     else {
//         console.log(`${B} is float.`);
//     }
// }

// A(50000);
// A(2.51)

// // Type2

// let num=520
// if (Number.isInteger(num)){
//     console.log(`its an integer`)
// }
// else{
//     console.log(`its a float`)
// }

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res=>res.json())
//   .then(json=>console.log(json))

// Promise.all([
//     Promise.resolve('sucess')
//     Promise.reject('failure')
//     ])
//     .catch(console.log)

// Promise.settled([
//     Promise.resolve('sucess')
//     Promise.reject('failure')
//     ])
//     .then(console.log)

// Program to calculate the repeating count in a array of objects using javascript

uniqueCount = [2, 2, 4, 3, 4, 2, 3, 2];
var count = {};
uniqueCount.forEach(function(i) {
  count[i] = (count[i] || 0) + 1;
});
console.log(count);
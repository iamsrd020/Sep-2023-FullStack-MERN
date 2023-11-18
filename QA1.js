// function A(start, end) {
//   const Array = [];
  
//   for (let charCode = start.charCodeAt(0); 
//            charCode <= end.charCodeAt(0); 
//            charCode++) {
//     Array.push(String.fromCharCode(charCode));
//   }
  
//   return Array;
// }

// const B = A('A', 'Z');
// console.log(B); 

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((A, B) => 
//   A + B, 0);

// console.log(sum);

// function* simpleGenerator() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const generator = simpleGenerator();


// console.log(generator.next().value);
// console.log(generator.next().value); 
// console.log(generator.next().value); 
// console.log(generator.next().value); 

// class car{
//   constructor(engine,mirror){
//     this.engine=engine
//     this.mirror=mirror
//   }
// }

// p for to fetch a data from a API

// const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
// fetch(apiUrl)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`Network response was not ok: ${response.statusText}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Data from API:', data);
//     })
//     .catch(error => {
//         console.error('Error during fetch:', error);
//     });

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())
  .then(json=>console.log(json))


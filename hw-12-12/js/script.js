

const numbers=[1,2,3,4,5,6,7,8,9,10]
console.log(numbers)
// 1.POP

// const PopMethod=(arr)=>{
//     const lastNum=numbers.length-1;
//     arr.length=arr.length-1;
//     return lastNum;
// }
// PopMethod(numbers);
// console.log(numbers)

// 2.PUSH

// function PushMethod(arr,...elements) {
//     const len = arr.length;
//     const newLength = len + elements.length;
//     for (let i = 0; i < elements.length; i++) {
//       arr[len + i] = elements[i];
//     }
//     return newLength;
//   }


// const newLength = PushMethod(numbers, 11, 12);
// console.log(newLength); 
// console.log(numbers);  

// 3.SHIFT

// const ShiftMethod=(arr)=>{
//     const firstElement = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     arr[i - 1] = arr[i];
//   }
//   arr.length--;
//   return firstElement;
// }
// ShiftMethod(numbers);
// console.log(numbers)


//4.UNSHIFT

// function UnshiftMethod(arr, ...elements) {
//     const newArr = [...elements, ...arr];
//     arr.length = 0; 
//     arr.push(...newArr); 
//     return arr.length;
//   }
//  UnshiftMethod(numbers, 1,2); 
// console.log(numbers); 



// 5. AT

// function AtMethod(array, index) {
//     if (index >= 0) {
//       return array[index];
//     } else return array[array.length + index];
//   }
//   console.log(AtMethod(numbers, -1));



// 6. REVERSE


//   const ReverseMethod=(arr)=>{
//     let rev = new Array;
//     for (let i = numbers.length - 1; i >= 0; i--) {
//         rev.push(numbers[i]);
//     }
//     return rev;
// }
// let reverse=ReverseMethod(numbers);
// console.log(reverse)


// 7. REDUCE

// let sum=0;
// for (let i = 0; i < numbers.length; i++) {
//     sum+=numbers[i];
// }
// console.log(sum)


//8. JOIN


//   const JoinMethod=(arr,a=",")=>{
//     let result = "";
//     for (let i = 0; i < arr.length; i++) {
//       if (i > 0) {
//         result += a;
//       }
//       if (arr[i] !== undefined && arr[i] !== null) {
//         result += arr[i];
//       }
//     }
//     return result;
//   }
// let reverse=JoinMethod(numbers);
// console.log(reverse)


//9. CONCAT

// const ConcatMethod=(...arr)=>{
//     const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       for (let j = 0; j < arr[i].length; j++) {
//         result.push(arr[i][j]);
//       }
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// const concat = ConcatMethod(numbers, 10, [11, 12]);
// console.log(concat);

//10. INCLUDES

// const IncludesMethod=(arr,value)=>
// {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             return true;
//         }
//     }
//     return false;
// }
 
// console.log(IncludesMethod(numbers, 7));  
// console.log(IncludesMethod(numbers, 15));  

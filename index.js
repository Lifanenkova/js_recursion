// 'use strict';

// // 1. Реализовать возведение в целую степень. (pow(base, exponent) => base**exponent, где base любое число, exponent - натуральное (1, 2, 3) или * целое число(-2, -1, 0, 1, 2)).

// function pow(base, exponent){
//     if(exponent < 0){
//         return 1/(base * pow(base, -exponent - 1));
//     }else if(exponent === 1){
//         return base;
//     }
//     return base * pow(base, exponent - 1);
// }
// console.log(pow(10,-2));

// // 2. Реализовать вывод в консоль скобок (// bracketWrapper3(3); // => сразу в консоль)

// function bracketWrapper3(n){
//     if(n === 0){
//         return;
//     }
//     console.log('(');
//     bracketWrapper3(n-1);
//     console.log(')');
// }

// bracketWrapper3(3);

// // 3. ** Реализовать функцию аналог flat для массивов.

// const arr1 = [1,2,3,[5,6,7,8, [9,10,11]]];
// function flat(arr1){
//     const newArr = [];
//     flatRec(arr1);

//     function flatRec(arr){
//         arr.forEach(element => {
//          if(Array.isArray(element)){
//          flatRec(element);
//         }else{newArr.push(element);}
        
//      });
//     }
//     return newArr;
// }
// console.log(arr1);
// const arr2 = flat(arr1);
// console.log(arr2);


const arr1 = [1,2,3,[5,6,7,8, [9,10,11]]];
function flat(arr1, dep){
    const newArr = [];
    flatRec(arr1, dep);

    function flatRec(arr, dep){
             arr.forEach(element => {
            if(Array.isArray(element)){
                if(dep === 0){
                    newArr.push(element);  
                     return newArr;
                }
                dep--;
                flatRec(element, dep);
            }else{
            newArr.push(element);  
            }
        }); 
    }
    return newArr;
}
console.log(arr1);
const arr2 = flat(arr1,0);
console.log(arr2);
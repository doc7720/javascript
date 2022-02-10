// - Дано натуральное число n. Выведите все числа от 1 до n.


// let num = (n) => {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// num(40);


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.


// let num = (a, b) => {
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             console.log(i);
//         }
//     } else if (a > b) {
//         for (let i = a; i >= b; i--) {
//             console.log(i);
//         }
//     }
// }
// num(10, 20);
// num(20, 10);


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let newArray = [];
// let getArray = (arr, i) => {
//     let first = 0;
//     let second = 0;
//     first = arr[i];
//     second = arr[i + 1];
//     arr[i] = second;
//     arr[i + 1] = first;
//     newArray = arr;
// }
// getArray([10, 9, 8, 7], 2);
// console.log(newArray);
// getArray([10, 9, 8, 7], 1);
// console.log(newArray);
// getArray([10, 9, 8, 7], 0);
// console.log(newArray);


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


// let count = 0;
// let newArray = [];
// let secondArray = [];
// let transfer = (a, b) => {
//     for (let i = a; i <= b; i++) {
//         newArray.push(Math.floor(Math.random() * 10));
//     }
//     for (let i = 0; i < newArray.length; i++) {
//         if (newArray[i] > 0 && newArray[i] < 11) {
//             secondArray.push(newArray[i]);
//         } else {
//             count++;
//         }
//     }
//     for (let i = 0; i < count; i++) {
//         secondArray.push(0);
//     }
// }
// transfer(2, 100);
// console.log(secondArray);
// console.log(count);


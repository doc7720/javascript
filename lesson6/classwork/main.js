// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
// let newN1 = n1.replaceAll('..', ' ');
// console.log(newN1);
// let newN2 = n2.replaceAll('---', ' ');
// console.log(newN2);
// let newN3 = n3.replaceAll('__', ' ');
// console.log(newN3);


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.


// let random = (array) => {
//     let arrayRandom = [];
//     for (let i = 0; i < array; i++) {
//         arrayRandom.push(Math.floor(Math.random() * 100));
//     }
//     return arrayRandom;
// }
// console.log((random(30)));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort


// let random = (length, num) => {
//     let newArr = [];
//     for (let i = 1; i < length; i++) {
//     newArr.push(Math.floor(Math.random() * num));
//     }
//     return newArr.sort((a, b) => a - b);
// }
// console.log(random(40, 100));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа


// let random = (length, num) => {
//     let newArr = [];
//     for (let i = 0; i < length; i++) {
//     newArr.push(Math.floor(Math.random() * num));
//     }
//     return newArr.filter(value => value % 2 === 0);
// }
// console.log(random(40, 100));


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

//
// let random = (length, num) => {
//     let newArr = [];
//     for (let i = 0; i < length; i++) {
//     newArr.push(Math.floor(Math.random() * num));
//     }
//     return newArr.map(value => value.toString());
// }
// console.log(random(40, 100));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]


// let sortNums = (arr, direction) => {
//     if (direction === 'asc') return arr.sort((a, b) => a - b);
//     if (direction === 'desc') return arr.sort((a, b) => b - a);
// }
// console.log(sortNums([1, 22, 51, 4, 12, 1155, 6762], 'desc'));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// let sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sort);

// let filter = coursesAndDurationArray.filter((value) =>  {
//     return value.monthDuration > 5;
// })
// console.log(filter);

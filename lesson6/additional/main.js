// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]


// let cutString = (str, n) => {
// let array = [];
//     for (let i = 0; i < str.length; i= i + n) {
//      array.push(str.substr(i, n));
//     }
//     return array;
// }
// document.writeln(cutString('наслаждение', 3));


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.


// let validator = (str) => {
//     let a = '@';
//     let b = '.';
//     let mail = str.toLowerCase();
//
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === a && str[i + 1] === b) {
//             console.log('Крапка має бути на відстані не менше 2 символів після равлика "@" !!!');
//             return;
//         } else if (str[i] === a && str[i + 2] === b) {
//             console.log('Крапка має бути на відстані не менше 2 символів після равлика "@" !!!');
//             return;
//         }
//     }
//     if (str.indexOf('0') === -1) {
//         console.log('Пошта має містити - "@" !!!');
//     } else if (str.startsWith('@')) {
//         console.log('Ім’я пошти не може починатися з "@" !!!');
//     } else if (str.indexOf('.') === -1) {
//         console.log('Пошта має містити - "." !!!');
//     }
//     else {
//         console.log('Готова пошта - ${mail}');
//     }
//     return mail;
// }
// validator('someemail@gmail.com');
// validator('someeMAIL@gmail.com');
// validator('someeMAIL@i.ua');
// validator('some.email@gmail.com');


// - є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html','css','js','mysql','mongodb','angular','aws','docker','git','java core','java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules


// coursesArray.sort((a, b) => b.modules.length - a.modules.length);
// console.log(coursesArray);


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5


// let count0 = 0;
// let symb = 'о';
// let str = 'Астрономия это наука о небесных объектах';
// let count = (str, stringsearch) => {
//     let array = str.split('');
//     for (i = 0; i < str.length; i++) {
//      if (str[i] === stringsearch) {
//          count0++;
//      }
//     }
//     return array;
// }
// console.log(count(str, symb));
// console.log(count0);


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'


// let str = "Сила тяжести приложена к центру масс тела";
// let cutString = (str, n) => {
//     let array = str.split(' ', 5);
//     return array;
// }
// console.log(cutString(str, 5));

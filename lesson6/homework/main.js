// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'


// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
// console.log(a.length);
// console.log(b.length);
// console.log(c.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'


// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
// let upperCase = a.toUpperCase();
// console.log(upperCase);
// let upperCase2 = b.toUpperCase();
// console.log(upperCase2);
// let upperCase3 = c.toUpperCase();
// console.log(upperCase3);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'


// let a = 'HELLO WORLD';
// let b = 'LOREM IPSUM';
// let c = 'JAVASCRIPT IS COO';
// let upperCase = a.toLowerCase();
// console.log(upperCase);
// let upperCase2 = b.toLowerCase();
// console.log(upperCase2);
// let upperCase3 = c.toLowerCase();
// console.log(upperCase3);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.


// let str = ' dirty string   ';
// let newStr = str.trim();
// console.log(newStr);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//  let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']


// let stringToArray = (str) => {
//     return str.split(' ');
// }
// let str = 'Каждый охотник желает знать';
// let arr = stringToArray(str);
// document,writeln(arr);


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый


// let delete_characters = (str, length) => {
//     return str.substr(0, length)
// }
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'


// let insert_dash = (str) => {
//     let splitJoinUpper = str.split(' ').join('-').toUpperCase();
//     return splitJoinUpper;
// }
// let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.


// let takeAString = (str) => {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1);
// }
// let str = 'hello world';
// console.log(takeAString(str));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.


// let capitalize = (str) => {
//     return str.split(' ').map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }
// let str = 'hello world lorem ipsum javascript is cool';
// console.log(capitalize(str));
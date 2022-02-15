// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
// Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.


// let firstfriends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// let secondfriends = ["Ivan", "Slavik"];
//
// if (firstfriends.length >= 3) {
//     console.log('це великий масив, в якому  3 і більше елементів');
// } else (secondfriends.length < 3)
// {
//     console.log('це маленький масив, в якому менше 3-х елементів');
// }


// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
// Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.


// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }


// a = Math.round(Math.random() * 3);
// b = Math.round(Math.random() * 3);
// let result;
// console.log('A: ' + a + '   B: ' + b);
//
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
// console.log(result);
// a + b < 4 ? console.log('Мало') : console.log('Багато');


// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

// let min = -100;
// let max = 100;
// let number = Math.floor(Math.random() * (max - min + 1)) + min;
//
// console.log(number);
//
// number > 0 ? console.log('positive') : number < 0 ? console.log('negative') : console.log('it is null');
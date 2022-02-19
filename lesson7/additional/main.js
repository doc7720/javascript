// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }


// class Users {
//
//     constructor(id, fullname, username, email, street, suite, city, zipcode, lat, lng, phone, website, name, catchPhrase, bs) {
//         this.id = id;
//         this.fullname = fullname;
//         this.username = username;
//         this.email = email;
//         this.address = {street, suite, city, zipcode}
//         this.street = street;
//         this.suite = suite;
//         this.city = city;
//         this.zipcode = zipcode;
//         this.geo = {lat, lng}
//         this.lat = lat;
//         this.lng = lng;
//         this.phone = phone;
//         this.website = website;
//         this.company = {name, catchPhrase, bs}
//         this.name = name;
//         this.catchPhrase = catchPhrase;
//         this.bs = bs;
//     }
// }
//
// let user = new Users('1', 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
// console.log(user);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


// class tagObject {
//
//     constructor(nameOfTag, action, attributes, nameOfAttr1, actionOfAttr1, nameOfAttr2, actionOfAttr2) {
//         this.nameOfTag = nameOfTag;
//         this.action = action;
//         this.attributes = {nameOfAttr1, actionOfAttr1, nameOfAttr2, actionOfAttr2};
//         this.nameOfAttr1 = nameOfAttr1;
//         this.actionOfAttr1 = actionOfAttr1;
//         this.nameOfAttr2 = nameOfAttr2;
//         this.actionOfAttr2 = actionOfAttr2;
//     }
// }
//
// let first = new tagObject('a', 'Створює гіпертекстові посилання', 'href, rel', 'href', 'Задає адресу гіперпосилання', 'rel', 'Встановлює зворотний зв\'язок відношення цільової сторінки з поточним документом (або підрозділом/темою)');
// console.log(first);
//
// let second = new tagObject('div', 'Елемент-контейнер для розділів HTML-документів. Використовується для групування блокових елементів для форматування стилями', 'class, leng', 'class', 'Являє собою розділений пропуском список класів елемента з урахуванням регістру', 'lang', 'Вказує основну мову для вмісту елемента та для будь-якого атрибута елемента, що містить текст');
// console.log(second);
//
// let third = new tagObject('h1', 'є найважливішим заголовком першого рівня', 'align', 'align', 'Визначає вирівнювання заголовка');
// console.log(third);
//
// let fourth = new tagObject('span', 'призначений для визначення малих елементів документа', 'spellcheck, tabindex', 'spellcheck', 'Вказує браузеру перевіряти чи ні правопис та граматику у тексті', 'tabindex', 'Встановлює порядок отримання фокусу під час переходу між елементами за допомогою клавіші Tab');
// console.log(fourth);
//
// let fifth = new tagObject('input', 'дозволяє створювати різні елементи інтерфейсу та забезпечити взаємодію з користувачем', 'accept, alt', 'accept', 'Встановлює фільтр на типи файлів, які можна надіслати через поле завантаження файлів', 'alt', 'Альтернативний текст для кнопки із зображенням');
// console.log(fifth);
//
// let sixth = new tagObject('form', 'Встановлює форму на веб-сторінці', 'method, enctype', 'method', 'Метод протоколу HTTP', 'enctype', 'Спосіб кодування даних форми');
// console.log(sixth);
//
// let seventh = new tagObject('option', 'визначає окремі пункти списку, який створюється за допомогою контейнера <select>', 'label, value', 'label', 'Вказує позначку пункту списку', 'value', 'Значення пункту списку, яке буде надіслано на сервер або прочитано за допомогою скриптів');
// console.log(seventh);
//
// let eight = new tagObject('select', 'дозволяє створити елемент інтерфейсу у вигляді списку, що розкривається, а також список з одним або множинним вибором', 'size, disabled', 'size', 'Кількість рядків списку, що відображаються', 'disabled', 'Блокує доступ та зміну елемента');
// console.log(eight);
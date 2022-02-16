// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let array = [
//     new User(10, 'Bohdan', 'Zastavnyi', 'bz97@gmail.com', 380626262645),
//     new User(4, 'Andriy', 'Shevchenko', 'andshev7@gmail.com', 380387620468),
//     new User(2, 'Oleksandr', 'Aliev', 'oa8@gmail.com', 380109462984),
//     new User(6, 'Oleksandr', 'Zinchenko', 'oz11@gmail.com', 380290183749),
//     new User(7, 'Yevhen', 'Konoplyanka', 'ykon10@gmail.com', 380124579765),
//     new User(9, 'Andriy', 'Yarmolenko', 'yarm7@gmail.com', 380123456789),
//     new User(1, 'Ruslan', 'Malinovskyi', 'malina18@gmail.com', 380865645454),
//     new User(5, 'Taras', 'Stepanenko', 'step6@gmail.com', 380123212321),
//     new User(8, 'Andriy', 'Pyatov', 'and1@gmail.com', 380888899665),
//     new User(3, 'Ruslan', 'Rotan', 'rotan14@gmail.com', 380124542666)
// ];
//
// console.log(array);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let array = [
//     new User(10, 'Bohdan', 'Zastavnyi', 'bz97@gmail.com', 380626262645),
//     new User(4, 'Andriy', 'Shevchenko', 'andshev7@gmail.com', 380387620468),
//     new User(2, 'Oleksandr', 'Aliev', 'oa8@gmail.com', 380109462984),
//     new User(6, 'Oleksandr', 'Zinchenko', 'oz11@gmail.com', 380290183749),
//     new User(7, 'Yevhen', 'Konoplyanka', 'ykon10@gmail.com', 380124579765),
//     new User(9, 'Andriy', 'Yarmolenko', 'yarm7@gmail.com', 380123456789),
//     new User(1, 'Ruslan', 'Malinovskyi', 'malina18@gmail.com', 380865645454),
//     new User(5, 'Taras', 'Stepanenko', 'step6@gmail.com', 380123212321),
//     new User(8, 'Andriy', 'Pyatov', 'and1@gmail.com', 380888899665),
//     new User(3, 'Ruslan', 'Rotan', 'rotan14@gmail.com', 380124542666)
// ];
//
// let filter = array.filter((key) => {
//     if (key.id % 2 === 0) {
//     return key;
//     }
// });
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let array = [
//     new User(10, 'Bohdan', 'Zastavnyi', 'bz97@gmail.com', 380626262645),
//     new User(4, 'Andriy', 'Shevchenko', 'andshev7@gmail.com', 380387620468),
//     new User(2, 'Oleksandr', 'Aliev', 'oa8@gmail.com', 380109462984),
//     new User(6, 'Oleksandr', 'Zinchenko', 'oz11@gmail.com', 380290183749),
//     new User(7, 'Yevhen', 'Konoplyanka', 'ykon10@gmail.com', 380124579765),
//     new User(9, 'Andriy', 'Yarmolenko', 'yarm7@gmail.com', 380123456789),
//     new User(1, 'Ruslan', 'Malinovskyi', 'malina18@gmail.com', 380865645454),
//     new User(5, 'Taras', 'Stepanenko', 'step6@gmail.com', 380123212321),
//     new User(8, 'Andriy', 'Pyatov', 'and1@gmail.com', 380888899665),
//     new User(3, 'Ruslan', 'Rotan', 'rotan14@gmail.com', 380124542666)
// ];
//
// array.sort((a, b) => a.id - b.id);
// console.log(array);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let array = [
//     new Client(10, 'Bohdan', 'Zastavnyi', 'bz97@gmail.com', 380626262645, ['tesla']),
//     new Client(4, 'Andriy', 'Shevchenko', 'andshev7@gmail.com', 380387620468, ['bmw', 'audi', 'porsche']),
//     new Client(2, 'Oleksandr', 'Aliev', 'oa8@gmail.com', 380109462984, ['aston martin', 'bentley', 'bugatti', 'chevrolet']),
//     new Client(6, 'Oleksandr', 'Zinchenko', 'oz11@gmail.com', 380290183749, ['land rover', 'daewoo']),
//     new Client(7, 'Yevhen', 'Konoplyanka', 'ykon10@gmail.com', 380124579765, ['fiat', 'dodge', 'ferrari', 'seat', 'lotus', 'honda', 'mersedes', 'mazda', 'ford', 'matsubishi']),
//     new Client(9, 'Andriy', 'Yarmolenko', 'yarm7@gmail.com', 380123456789, ['vovlo', 'cadilac', 'opel', 'renault', 'lexus']),
//     new Client(1, 'Ruslan', 'Malinovskyi', 'malina18@gmail.com', 380865645454, ['nissan', 'jeep', 'kia', 'peugeot', 'suzuki', 'toyota']),
//     new Client(5, 'Taras', 'Stepanenko', 'step6@gmail.com', 380123212321, ['chery', 'skoda', 'jaguar', 'subary', 'saab', 'citroen', 'isuzu', 'hyundai', 'dacia']),
//     new Client(8, 'Andriy', 'Pyatov', 'and1@gmail.com', 380888899665, ['acura', 'lincoln', 'lancia', 'baw', 'baojun', 'byd', 'changan']),
//     new Client(3, 'Ruslan', 'Rotan', 'rotan14@gmail.com', 380124542666, ['gonow', 'derways', 'foton', 'fiqi', 'groz', 'hafei', 'jac', 'rely', ])
// ];


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let array = [
//     new Client(10, 'Bohdan', 'Zastavnyi', 'bz97@gmail.com', 380626262645, ['tesla']),
//     new Client(4, 'Andriy', 'Shevchenko', 'andshev7@gmail.com', 380387620468, ['bmw', 'audi', 'porsche']),
//     new Client(2, 'Oleksandr', 'Aliev', 'oa8@gmail.com', 380109462984, ['aston martin', 'bentley', 'bugatti', 'chevrolet']),
//     new Client(6, 'Oleksandr', 'Zinchenko', 'oz11@gmail.com', 380290183749, ['land rover', 'daewoo']),
//     new Client(7, 'Yevhen', 'Konoplyanka', 'ykon10@gmail.com', 380124579765, ['fiat', 'dodge', 'ferrari', 'seat', 'lotus', 'honda', 'mersedes', 'mazda', 'ford', 'matsubishi']),
//     new Client(9, 'Andriy', 'Yarmolenko', 'yarm7@gmail.com', 380123456789, ['vovlo', 'cadilac', 'opel', 'renault', 'lexus']),
//     new Client(1, 'Ruslan', 'Malinovskyi', 'malina18@gmail.com', 380865645454, ['nissan', 'jeep', 'kia', 'peugeot', 'suzuki', 'toyota']),
//     new Client(5, 'Taras', 'Stepanenko', 'step6@gmail.com', 380123212321, ['chery', 'skoda', 'jaguar', 'subary', 'saab', 'citroen', 'isuzu', 'hyundai', 'dacia']),
//     new Client(8, 'Andriy', 'Pyatov', 'and1@gmail.com', 380888899665, ['acura', 'lincoln', 'lancia', 'baw', 'baojun', 'byd', 'changan']),
//     new Client(3, 'Ruslan', 'Rotan', 'rotan14@gmail.com', 380124542666, ['gonow', 'derways', 'foton', 'fiqi', 'groz', 'hafei', 'jac', 'rely', ])
// ];
//
// let sort = array.sort((a, b) => a.order.length - b.order.length);
// console.log(sort);
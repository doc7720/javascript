// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// function Car(model, producer, year, maxspeed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     }
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== `function`) console.log(`${key} - ${this[key]}`)
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let car = new Car('Tesla Model X', 'USA', 2012, 250, 420);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(10);
// car.drive();
// car.changeYear(2015);
// car.info();
// car.addDriver('Bohdan');
// console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// class Car2 {
//     constructor(model, producer, year, maxspeed, engine) {
//
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engine = engine;
//     }
//         drive() {
//             console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//         }
//         info() {
//             for (const key in this) {
//                 if (typeof this[key] !== `function`) console.log(`${key} - ${this[key]}`)
//             }
//         }
//         increaseMaxSpeed(newSpeed) {
//             this.maxspeed = this.maxspeed + newSpeed;
//         }
//         changeYear(newValue) {
//             this.year = newValue;
//         }
//         addDriver(driver) {
//             this.driver = driver;
//         }
//
// }
//
// let car2 = new Car2('Tesla Model X', 'USA', 2012, 250, 420);
// console.log(car2);
// car2.drive();
// car2.info();
// car2.increaseMaxSpeed(10);
// car2.drive();
// car2.changeYear(2015);
// car2.info();
// car2.addDriver('Bohdan');
// console.log(car2);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Popeluyshka {
//
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let array = [
//     new Popeluyshka('Ira', 18, 33),
//     new Popeluyshka('Masha', 22, 40),
//     new Popeluyshka('Yulia', 30, 37),
//     new Popeluyshka('Oksana', 21, 33),
//     new Popeluyshka('Marta', 27, 39),
//     new Popeluyshka('Victoria', 23, 30),
//     new Popeluyshka('Arina', 28, 28),
//     new Popeluyshka('Lesya', 19, 31),
//     new Popeluyshka('Olya', 25, 22),
//     new Popeluyshka('Sasha', 20, 36)
// ];
//
// console.log(array);
//
// class Prince {
//
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
//
// let prince = new Prince('Bohdan', 19, 33);
//
// let pair = (array, prince) => {
//     for (const Element of array) {
//         if (Element.footSize === prince.shoe) {
//             return `${prince.name}, your pair - ${Element.name}`
//         }
//     }
// }
// console.log(pair(array, prince));
//
//
// let findPrinces = array.find((Element) => Element.footSize === prince.shoe);
// console.log(findPrinces);
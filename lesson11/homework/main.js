// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage


// let name = document.forms.formFirst.name;
// let age = document.forms.formFirst.age;
// let buttonFirst = document.getElementById('button');
// let key = 'key';
//
// let sent = (userName, userAge) => {
//     let user = {
//         name: userName,
//         age: userAge
//     }
//     localStorage.setItem(key, JSON.stringify(user));
// }
//
// buttonFirst.onclick = () => {
//     sent(name.value, age.value);
// }


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


// let model = document.forms.formSecond.model;
// let type = document.forms.formSecond.type;
// let volume = document.forms.formSecond.volume;
// let buttonSecond = document.getElementById('buttonSecond');
// let key = 'key';
//
// let sent = (modelCar, typeCar, volumeCar) => {
//     let arr = JSON.parse(localStorage.getItem(key)) || [];
//
//     arr.push({modelCar, typeCar, volumeCar})
//     localStorage.setItem(key, JSON.stringify(arr));
// };
//
// buttonSecond.onclick = () => {
//     sent(model.value, type.value, volume.value);
// }
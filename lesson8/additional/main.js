// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль



function allClasses(rules) {
   let classes = document.getElementsByClassName('rules');
    for (const rule of classes) {
    array.push(rule)
    }
    return rules;
}
let array = [];
console.log(allClasses(array));



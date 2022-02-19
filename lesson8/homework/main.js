// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

let content = document.getElementById('content');
console.log(content);

// -- отримує текст з блоку з id "rules"

let rules = document.getElementById('rules');
console.log(rules);

// -- замініть текст параграфа з id 'content' на будь-який інший

content.innerHTML = '<p>Lorem ipsum dolor.</p>';

// -- замініть текст параграфа з id 'rules' на будь-який інший

rules.innerHTML = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>';

// -- змініть кожному елементу колір фону на червоний

let elementsBackground = document.body.children;
for (const element of elementsBackground) {
    element.style.backgroundColor = 'green';
}

// -- змініть кожному елементу колір тексту на синій

let backgroundElements = document.body.children;
for (const newElements of backgroundElements) {
    newElements.style.backgroundColor = 'yellow';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

    let idRules = document.getElementById('rules');
console.log(idRules.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let rulesListsColor = document.getElementsByClassName('fc_rules');
for (const rulesList of rulesListsColor) {
    rulesList.style.color = 'red';
}




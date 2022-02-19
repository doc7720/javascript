// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

let mainHeader = document.getElementById('main_header');
mainHeader.innerText = 'Name of group';

// b) робить шириниу елементу ul 400px

let elementUl = document.getElementsByTagName('ul');
elementUl[0].style.width = '400px'

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let widthLinkList = document.getElementsByClassName('linkList');
for (const element of widthLinkList) {
    element.style.width = '50%'
}


// d) отримує текст який зберігається в елементі з класом listElement2

let text = document.getElementsByClassName('listElement2');
console.log(text);
text[0].innerHTML = '<p>Lorem ipsum dolor sit amet.</p>';

// e) отримує всі елементи li та змінює ім колір фону на сірий

let backgroundLi = document.getElementsByTagName('li');
for (const elementLi of backgroundLi) {
    elementLi.style.backgroundColor = 'gray';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let elementsOfA = document.getElementsByTagName('a');
for (const elementsA of elementsOfA) {
    elementsA.classList.add('anchor')
    console.log(elementsA);
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let elementA = document.getElementsByTagName('a');
for (const elementAElement of elementA) {
    if (elementAElement.innerText === 'link3') {
        elementAElement.style.fontSize = '40px'
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let allElementsA = document.getElementsByTagName('a');
for (const tagA of allElementsA) {
    console.log(tagA);
    let newAllElementsA = tagA.innerText;
    tagA.classList.add('element_XXX');
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let allSubHeader = document.getElementsByClassName('sub-header');
// for (const allHeader of allSubHeader) {
//     allHeader.style.backgroundColor = prompt('Enter color:');
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let changesColor = document.getElementsByClassName('sub-header');
// for (const element of changesColor) {
//     if (element.innerText === 'content 2 segment') {
//         element.style.color = prompt('Enter color:');
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let substitute = document.getElementsByClassName('content_1');
// substitute[0].innerText = prompt('Enter new text');

// l) отримати елементи p та змінити їм padding на 20px

let padding = document.getElementsByTagName('p');
for (const tegP of padding) {
    tegP.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let reduceText = document.getElementsByClassName('text2');
reduceText[0].innerText = 'dec-2021';


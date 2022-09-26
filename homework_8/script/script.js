"use strict"

//Знайти всі параграфи на сторінці та встановити колір фону #ff0000
let tgs = document.body.getElementsByTagName("p");
console.log(tgs);
for(let elem of tgs) {
    elem.style.background = "#ff0000";
}

//Знайти елемент із id="optionsList". Вивести у консоль.
let idElem = document.getElementById("optionsList");
console.log(idElem);
// Знайти батьківський елемент та вивести в консоль.
let parentIdElem = idElem.parentNode;
console.log(parentIdElem);
// Знайти дочірні ноди, якщо вони є, і вивести в консоль назви та тип нод.
let childNodes = idElem.childNodes;
console.log(childNodes);


//Встановіть в якості контента елемента з класом testParagraph наступний параграф -This is a paragraph
//цього елемента нема аде якшо він був би то це робилося так:
// let classElement = document.querySelector(".testParagraph")
// classElement.textContent = "This is a paragraph";

//Отримати елементи, вкладені в елемент із класом main-header і вивести їх у консоль.
let mainHeader = document.querySelector(".main-header")
let childMainHeader = mainHeader.children;
console.log(childMainHeader);
//Кожному з елементів присвоїти новий клас nav-item.
for(let elem of childMainHeader) {
    console.log(elem);
    elem.classList.add("nav-item");
}

//Знайти всі елементи із класом section-title. Видалити цей клас у цих елементів.
let sectionTitle = document.querySelectorAll(".section-title");
console.log(sectionTitle);
for(let el of sectionTitle) {
    el.classList.remove("section-title");
    console.log(el);
}



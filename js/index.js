import KEYS from '/js/data.js';

console.log(KEYS);
const container = document.createElement('div');
const h1 = document.createElement('h1');
const textBlock = document.createElement('div');
const textArea = document.createElement('textarea');
const keyboard = document.createElement('div');
const h2 = document.createElement('h2');
const row_1 = document.createElement('div');
const row_2 = document.createElement('div');
const row_3 = document.createElement('div');
const row_4 = document.createElement('div');
const row_5 = document.createElement('div');
const nav = document.createElement('div');

container.className = "container";
textBlock.className = "textBlock";
textArea.className = "textArea";
keyboard.className = "keyboard";
row_1.className = "row1";
row_2.className = "row2";
row_3.className = "row3";
row_4.className = "row4";
row_5.className = "row5";
nav.className = "nav";

h1.innerHTML = "Virtual Keyboard"
h2.innerHTML = "Клавиатура создана в операционной системе macOS Monterey. Для переключения языка комбинация: левыe ctrl + alt"


document.body.append(container);
container.append(h1);
container.append(textBlock);
textBlock.append(textArea);
container.append(keyboard);
keyboard.append(row_1);
keyboard.append(row_2);
keyboard.append(row_3);
keyboard.append(row_4);
keyboard.append(row_5);
container.append(h2);


KEYS.map((elem, index) => {
    let key = document.createElement('div');
    let keySpanEn = document.createElement('span');
    let keySpanRu = document.createElement('span');
    let keySpanEn_fn = document.createElement('span');
    let keySpanRu_fn = document.createElement('span');
    // {
    //     class: "letter key key_b",
    //     volume: {
    //     en: "b",
    //         ru: "и",
    //         en_fn: "B",
    //         ru_fn: "И"
    // }
    // },
    keySpanEn.innerHTML = elem.volume.en;
    keySpanRu.innerHTML = elem.volume.ru;
    keySpanEn_fn.innerHTML = elem.volume.en_fn;
    keySpanRu_fn.innerHTML = elem.volume.ru_fn;
    keySpanEn.className = "unselectable";
    keySpanRu.className = "hidden unselectable";
    keySpanEn_fn.className = "hidden unselectable";
    keySpanRu_fn.className = "hidden unselectable";


    key.className = elem.class;
    key.append(keySpanEn);
    key.append(keySpanRu);
    key.append(keySpanEn_fn);
    key.append(keySpanRu_fn);


    if (index >= 0 && index <= 13) {
        row_1.append(key);
    }
    ;
    if (index > 13 && index <= 27) {
        row_2.append(key);
    }
    ;
    if (index > 27 && index <= 40) {
        row_3.append(key);
    }
    ;
    if (index > 40 && index <= 52) {
        row_4.append(key);
    }
    ;
    if (index > 52 && index < 60) {
        row_5.append(key);
    }
    ;
    if (index >= 60 && index <= 61) {
        nav.append(key);
    }
    ;
    row_5.append(nav);
    if (index >= 62 && index <= 63) {
        row_5.append(key);
    }
    ;
});


const setText = (letter) => {
    textArea.value += letter
};

const remove = () => {
    let keys = document.querySelector('span');
    keys.classList.remove("active");
}


document.body.addEventListener('mousedown', (event) => {
    let target = event.target;
    if (target.closest('span')) {
        target.closest('span').classList.toggle("active");
        setText(target.closest('span').innerHTML);
    }
})

document.body.addEventListener('mouseup', (event) => {
    let keys = document.querySelectorAll('span');
    keys.forEach(elem => {
        elem.classList.remove("active");
    })
})

let code =[];

document.body.addEventListener('keydown', (event) => {
    setText(event.key);
    code.push(event.code)
    console.log(code);
})































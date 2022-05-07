import KEYBORD_KEYS from './data';




















const container = document.createElement('div');
const h1 = document.createElement('div');
const textBlock = document.createElement('div');
const textArea = document.createElement('textarea');
const keyboard = document.createElement('div');
const h2 = document.createElement('div');
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















const keys = KEYBORD_KEYS.map((elem, index) => {

})

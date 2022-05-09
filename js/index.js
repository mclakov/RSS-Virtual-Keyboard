import KEYS from '/js/data.js';




let language = 'en';
let capsLock = false;


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
h2.innerHTML = "Клавиатура создана в операционной системе macOS Monterey. Для переключения языка комбинация: space + левый ctrl"


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


const createKeyboard = (language = 'en', keyShift = 'off', keyCl = 'off') => {

    KEYS.map((elem, index) => {
        let key = document.createElement('div');
        let keySpanEn = document.createElement('span');
        let keySpanRu = document.createElement('span');
        let keySpanEn_fn = document.createElement('span');
        let keySpanRu_fn = document.createElement('span');
        let keySpanEn_cl = document.createElement('span');
        let keySpanRu_cl = document.createElement('span');
        let keySpanEn_fn_cl = document.createElement('span');
        let keySpanRu_fn_cl = document.createElement('span');

        keySpanEn.innerHTML = elem.volume.en;
        keySpanRu.innerHTML = elem.volume.ru;
        keySpanEn_fn.innerHTML = elem.volume.en_fn;
        keySpanRu_fn.innerHTML = elem.volume.ru_fn;
        keySpanEn_cl.innerHTML = elem.volume.en_cl;
        keySpanRu_cl.innerHTML = elem.volume.ru_cl;
        keySpanEn_fn_cl.innerHTML = elem.volume.en_fn_cl;
        keySpanRu_fn_cl.innerHTML = elem.volume.ru_fn_cl;

        if (language === 'en' && keyShift === 'off' && keyCl === 'off') {
            keySpanEn.className = "en unselectable";
            keySpanRu.className = "ru hidden unselectable";
            keySpanEn_fn.className = "en_fn hidden unselectable";
            keySpanRu_fn.className = "ru_fn hidden unselectable";

            keySpanEn_cl.className = "en_cl hidden unselectable";
            keySpanRu_cl.className = "ru_cl hidden unselectable";
            keySpanEn_fn_cl.className = "en_fn_cl hidden unselectable";
            keySpanRu_fn_cl.className = "ru_fn_cl hidden unselectable";
        }
        if (language === 'en' && keyShift === 'on' && keyCl === 'off') {
            keySpanEn.className = "en hidden unselectable";
            keySpanRu.className = "ru hidden unselectable";
            keySpanEn_fn.className = "en_fn unselectable";
            keySpanRu_fn.className = "ru_fn hidden unselectable";

            keySpanEn_cl.className = "en_cl hidden unselectable";
            keySpanRu_cl.className = "ru_cl hidden unselectable";
            keySpanEn_fn_cl.className = "en_fn_cl hidden unselectable";
            keySpanRu_fn_cl.className = "ru_fn_cl hidden unselectable";
        }
        if (language === 'ru' && keyShift === 'off' && keyCl === 'off') {
            keySpanEn.className = "en hidden unselectable";
            keySpanRu.className = "ru unselectable";
            keySpanEn_fn.className = "en_fn hidden unselectable";
            keySpanRu_fn.className = "ru_fn hidden unselectable";

            keySpanEn_cl.className = "en_cl hidden unselectable";
            keySpanRu_cl.className = "ru_cl hidden unselectable";
            keySpanEn_fn_cl.className = "en_fn_cl hidden unselectable";
            keySpanRu_fn_cl.className = "ru_fn_cl hidden unselectable";
        }
        if (language === 'ru' && keyShift === 'on' && keyCl === 'off') {
            keySpanEn.className = "en hidden unselectable";
            keySpanRu.className = "ru hidden unselectable";
            keySpanEn_fn.className = "en_fn hidden unselectable";
            keySpanRu_fn.className = "ru_fn unselectable";

            keySpanEn_cl.className = "en_cl hidden unselectable";
            keySpanRu_cl.className = "ru_cl hidden unselectable";
            keySpanEn_fn_cl.className = "en_fn_cl hidden unselectable";
            keySpanRu_fn_cl.className = "ru_fn_cl hidden unselectable";
        }
        if (language === 'en' && keyShift === 'off' && keyCl === 'on') {
            keySpanEn.className = "en hidden unselectable";
            keySpanRu.className = "ru hidden unselectable";
            keySpanEn_fn.className = "en_fn hidden unselectable";
            keySpanRu_fn.className = "ru_fn hidden unselectable";

            keySpanEn_cl.className = "en_cl unselectable";
            keySpanRu_cl.className = "ru_cl hidden unselectable";
            keySpanEn_fn_cl.className = "en_fn_cl hidden unselectable";
            keySpanRu_fn_cl.className = "ru_fn_cl hidden unselectable";
        }
        if (language === 'en' && keyShift === 'on' && keyCl === 'on') {
            keySpanEn.className = "en hidden unselectable";
            keySpanRu.className = "ru hidden unselectable";
            keySpanEn_fn.className = "en_fn hidden unselectable";
            keySpanRu_fn.className = "ru_fn hidden unselectable";

            keySpanEn_cl.className = "en_cl hidden unselectable";
            keySpanRu_cl.className = "ru_cl hidden unselectable";
            keySpanEn_fn_cl.className = "en_fn_cl unselectable";
            keySpanRu_fn_cl.className = "ru_fn_cl hidden unselectable";
        }
        if (language === 'ru' && keyShift === 'off' && keyCl === 'on') {
            keySpanEn.className = "en hidden unselectable";
            keySpanRu.className = "ru hidden unselectable";
            keySpanEn_fn.className = "en_fn hidden unselectable";
            keySpanRu_fn.className = "ru_fn hidden unselectable";

            keySpanEn_cl.className = "en_cl hidden unselectable";
            keySpanRu_cl.className = "ru_cl unselectable";
            keySpanEn_fn_cl.className = "en_fn_cl hidden unselectable";
            keySpanRu_fn_cl.className = "ru_fn_cl hidden unselectable";
        }
        if (language === 'ru' && keyShift === 'on' && keyCl === 'on') {
            keySpanEn.className = "en hidden unselectable";
            keySpanRu.className = "ru hidden unselectable";
            keySpanEn_fn.className = "en_fn hidden unselectable";
            keySpanRu_fn.className = "ru_fn hidden unselectable";

            keySpanEn_cl.className = "en_cl hidden unselectable";
            keySpanRu_cl.className = "ru_cl hidden unselectable";
            keySpanEn_fn_cl.className = "en_fn_cl hidden unselectable";
            keySpanRu_fn_cl.className = "ru_fn_cl unselectable";
        }


        key.className = elem.class;
        key.append(keySpanEn);
        key.append(keySpanRu);
        key.append(keySpanEn_fn);
        key.append(keySpanRu_fn);
        key.append(keySpanEn_cl);
        key.append(keySpanRu_cl);
        key.append(keySpanEn_fn_cl);
        key.append(keySpanRu_fn_cl);


        if (index >= 0 && index <= 13) {
            row_1.append(key);
        }
        if (index > 13 && index <= 27) {
            row_2.append(key);
        }
        if (index > 27 && index <= 40) {
            row_3.append(key);
        }
        if (index > 40 && index <= 52) {
            row_4.append(key);
        }
        if (index > 52 && index < 60) {
            row_5.append(key);
        }
        if (index >= 60 && index <= 61) {
            nav.append(key);
        }
        row_5.append(nav);
        if (index >= 62 && index <= 63) {
            row_5.append(key);
        }
    });
}


const setText = (letter) => {
    textArea.value += letter;
};

document.body.addEventListener('mousedown', (event) => {
    let target = event.target;
    if (target.closest('span')) {
        target.closest('.key').classList.toggle("active");
        setText(target.closest('span').innerHTML);
    }
});

document.body.addEventListener('mouseup', (event) => {
    let keys = document.querySelectorAll('.key');
    keys.forEach(elem => {
        elem.classList.remove("active");
    })
});

document.body.addEventListener('keydown', (event) => {
    // event.preventDefault();
    console.log("event.code", event.code);
    let activeKey = document.querySelector(`.${event.code}`);
    if (activeKey != null && activeKey != undefined) {// выделение кнопки
        activeKey.classList.toggle("active");
    }
    ;
    if (activeKey != null && activeKey != undefined && !event.ctrlKey) {// добавление текста по нажатию кнопки
        if (event.code === "Tab") {
            setText('\t');
        }
        if (event.code === "Enter") {
            setText('\n');
        }
        if (event.code === "Backspace") {
            textArea.value = textArea.value.slice(0,textArea.value.length-2)//переделать под курсор
        }
        if (event.code === "ArrowLeft") {
            textArea.selectionStart = 2;
            textArea.selectionEnd = 2;
            console.log(textArea.selectionEnd, textArea.selectionStart);
        }
        // ArrowLeft
        // ArrowRight
        // ArrowUp
        // ArrowDown




        else {
            console.log(event.code);
            setText(event.key);
        }

    }
    ;
});

document.body.addEventListener('keyup', (event) => {
    // event.preventDefault();
    let activeKey = document.querySelector(`.${event.code}`);
    if (activeKey != null && activeKey != undefined) {
        activeKey.classList.toggle("active");
    }
});













const changeLang = () => {
    language = (language == "en") ? "ru" : "en";
    console.log("language", language);
    let keysEn = document.querySelectorAll('.en');
    keysEn.forEach(elem => {
        elem.classList.toggle("hidden");
    });
    let keysRu = document.querySelectorAll('.ru');
    keysRu.forEach(elem => {
        elem.classList.toggle("hidden");
    });
};

function runOnKeys(func, ...codes) {

    let pressed = new Set();

    document.addEventListener('keydown', function (event) {
        event.preventDefault();
        pressed.add(event.code);
        for (let code of codes) {
            if (!pressed.has(code)) {
                return;
            }
        }
        pressed.clear();
        func();
    });
    document.addEventListener('keyup', function (event) {
        event.preventDefault();
        pressed.delete(event.code);
    });
};

runOnKeys(
    () => changeLang(),
    "Space",
    "ControlLeft"
);



document.addEventListener('keydown', function (event) {//Shift & CapsLock
    if (event.code == "CapsLock") {
        capsLock = !capsLock;
    }
    console.log("CapsLock", capsLock);

    if (language == "en" && capsLock) {
        let keys = document.querySelectorAll('span');
        keys.forEach(elem => {
            elem.classList.add("hidden");
        });
        let keysEnCl = document.querySelectorAll('.en_cl');
        keysEnCl.forEach(elem => {
            elem.classList.remove("hidden");
        });
    };
    if (language == "ru" && capsLock) {
        let keys = document.querySelectorAll('span');
        keys.forEach(elem => {
            elem.classList.add("hidden");
        });
        let keysRuCl = document.querySelectorAll('.ru_cl');
        keysRuCl.forEach(elem => {
            elem.classList.remove("hidden");
        });
    };

    if (event.shiftKey && language == "en" && !capsLock) {
        let keys = document.querySelectorAll('span');
        keys.forEach(elem => {
            elem.classList.add("hidden");
        });
        let keysFnEn = document.querySelectorAll('.en_fn');
        keysFnEn.forEach(elem => {
            elem.classList.remove("hidden");
        });
    };
    if (event.shiftKey && language == "ru" && !capsLock) {
        let keys = document.querySelectorAll('span');
        keys.forEach(elem => {
            elem.classList.add("hidden");
        });
        let keysFnRu = document.querySelectorAll('.ru_fn');
        keysFnRu.forEach(elem => {
            elem.classList.remove("hidden");
        });
    };
    if (event.shiftKey && language == "en" && capsLock) {
        let keys = document.querySelectorAll('span');
        keys.forEach(elem => {
            elem.classList.add("hidden");
        });
        let keysFnEnCl = document.querySelectorAll('.en_fn_cl');
        keysFnEnCl.forEach(elem => {
            elem.classList.remove("hidden");
        });
    };
    if (event.shiftKey && language == "ru" && capsLock) {
        let keys = document.querySelectorAll('span');
        keys.forEach(elem => {
            elem.classList.add("hidden");
        });
        let keysFnRuCl = document.querySelectorAll('.ru_fn_cl');
        keysFnRuCl.forEach(elem => {
            elem.classList.remove("hidden");
        });
    };


});

document.addEventListener('keyup', function (event) {
    if (event.code == "CapsLock") {
        capsLock = !capsLock;
    }
    console.log("CapsLock", capsLock);

 if (language == "en" && !capsLock) {
        let keys = document.querySelectorAll('span');
        keys.forEach(elem => {
            elem.classList.add("hidden");
        });
        let keysFnEn = document.querySelectorAll('.en_fn');
        keysFnEn.forEach(elem => {
            elem.classList.remove("hidden");
        });
    };
    if (language == "ru" && !capsLock) {
        let keys = document.querySelectorAll('span');
        keys.forEach(elem => {
            elem.classList.add("hidden");
        });
        let keysFnRu = document.querySelectorAll('.ru_fn');
        keysFnRu.forEach(elem => {
            elem.classList.remove("hidden");
        });
    };

    if (event.shiftKey === false && language == "en" && !capsLock) {
        let keys = document.querySelectorAll('span');
        keys.forEach(elem => {
            elem.classList.add("hidden");
        });
        let keysEn = document.querySelectorAll('.en');
        keysEn.forEach(elem => {
            elem.classList.remove("hidden");
        });
    };
    if (event.shiftKey === false && language == "ru" && !capsLock) {
        let keys = document.querySelectorAll('span');
        keys.forEach(elem => {
            elem.classList.add("hidden");
        });
        let keysRu = document.querySelectorAll('.ru');
        keysRu.forEach(elem => {
            elem.classList.remove("hidden");
        });
    };
    if (event.shiftKey === false && language == "en" && capsLock) {
        let keys = document.querySelectorAll('span');
        keys.forEach(elem => {
            elem.classList.add("hidden");
        });
        let keysEnCl = document.querySelectorAll('.en_cl');
        keysEnCl.forEach(elem => {
            elem.classList.remove("hidden");
        });
    };
    if (event.shiftKey === false && language == "ru" && capsLock) {
        let keys = document.querySelectorAll('span');
        keys.forEach(elem => {
            elem.classList.add("hidden");
        });
        let keysRuCl = document.querySelectorAll('.ru_cl');
        keysRuCl.forEach(elem => {
            elem.classList.remove("hidden");
        });
    };
});
































createKeyboard();
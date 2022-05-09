const KEYS = [
    {
        class: "key IntlBackslash",
        volume: {
            en: "`",
            ru: "ё",
            en_fn: "~",
            ru_fn: "Ё",
            en_cl: "`",
            ru_cl: "Ё",
            en_fn_cl: "~",
            ru_fn_cl: "ё",
        }
    },
    {
        class: "key Digit1",
        volume: {
            en: "1",
            ru: "1",
            en_fn: "!",
            ru_fn: "!",
            en_cl: "1",
            ru_cl: "1",
            en_fn_cl: "!",
            ru_fn_cl: "!",
        }
    },
    {
        class: "key Digit2",
        volume: {
            en: "2",
            ru: "2",
            en_fn: "@",
            ru_fn: "\"",
            en_cl: "2",
            ru_cl: "2",
            en_fn_cl: "@",
            ru_fn_cl: "\"",
        }
    },
    {
        class: "key Digit3",
        volume: {
            en: "3",
            ru: "3",
            en_fn: "#",
            ru_fn: "№",
            en_cl: "3",
            ru_cl: "3",
            en_fn_cl: "#",
            ru_fn_cl: "№",
        }
    },
    {
        class: "key Digit4",
        volume: {
            en: "4",
            ru: "4",
            en_fn: "$",
            ru_fn: ";",
            en_cl: "4",
            ru_cl: "4",
            en_fn_cl: "$",
            ru_fn_cl: ";",
        }
    },
    {
        class: "key Digit5",
        volume: {
            en: "5",
            ru: "5",
            en_fn: "%",
            ru_fn: "%",
            en_cl: "5",
            ru_cl: "5",
            en_fn_cl: "%",
            ru_fn_cl: "%",
        }
    },
    {
        class: "key Digit6",
        volume: {
            en: "6",
            ru: "6",
            en_fn: "^",
            ru_fn: ":",
            en_cl: "6",
            ru_cl: "6",
            en_fn_cl: "^",
            ru_fn_cl: ":",
        }
    },
    {
        class: "key Digit7",
        volume: {
            en: "7",
            ru: "7",
            en_fn: "&",
            ru_fn: "?",
            en_cl: "7",
            ru_cl: "7",
            en_fn_cl: "&",
            ru_fn_cl: "?",
        }
    },
    {
        class: "key Digit8",
        volume: {
            en: "8",
            ru: "8",
            en_fn: "*",
            ru_fn: "*",
            en_cl: "8",
            ru_cl: "8",
            en_fn_cl: "*",
            ru_fn_cl: "*",
        }
    },
    {
        class: "key Digit9",
        volume: {
            en: "9",
            ru: "9",
            en_fn: "(",
            ru_fn: "(",
            en_cl: "9",
            ru_cl: "9",
            en_fn_cl: "(",
            ru_fn_cl: "(",
        }
    },
    {
        class: "key Digit0",
        volume: {
            en: "0",
            ru: "0",
            en_fn: ")",
            ru_fn: ")",
            en_cl: "0",
            ru_cl: "0",
            en_fn_cl: ")",
            ru_fn_cl: ")",
        }
    },
    {
        class: "key Minus",
        volume: {
            en: "-",
            ru: "-",
            en_fn: "_",
            ru_fn: "_",
            en_cl: "-",
            ru_cl: "-",
            en_fn_cl: "_",
            ru_fn_cl: "_",
        }
    },
    {
        class: "key Equal",
        volume: {
            en: "=",
            ru: "=",
            en_fn: "+",
            ru_fn: "+",
            en_cl: "=",
            ru_cl: "=",
            en_fn_cl: "+",
            ru_fn_cl: "+",
        }
    },
    {
        class: "key Backspace",
        volume: {
            en: "Backspace",
            ru: "Backspace",
            en_fn: "Backspace",
            ru_fn: "Backspace",
            en_cl: "Backspace",
            ru_cl: "Backspace",
            en_fn_cl: "Backspace",
            ru_fn_cl: "Backspace",
        }
    },
    {
        class: "key Tab",
        volume: {
            en: "Tab",
            ru: "Tab",
            en_fn: "Tab",
            ru_fn: "Tab",
            en_cl: "Tab",
            ru_cl: "Tab",
            en_fn_cl: "Tab",
            ru_fn_cl: "Tab",
        }
    },
    {
        class: "letter key KeyQ",
        volume: {
            en: "q",
            ru: "й",
            en_fn: "Q",
            ru_fn: "Й",
            en_cl: "Q",
            ru_cl: "Й",
            en_fn_cl: "q",
            ru_fn_cl: "й",
        }
    },
    {
        class: "letter key KeyW",
        volume: {
            en: "w",
            ru: "ц",
            en_fn: "W",
            ru_fn: "Ц",
            en_cl: "",
            ru_cl: "",
            en_fn_cl: "",
            ru_fn_cl: "",
        }
    },
    {
        class: "letter key KeyE",
        volume: {
            en: "e",
            ru: "у",
            en_fn: "E",
            ru_fn: "У",
            en_cl: "E",
            ru_cl: "У",
            en_fn_cl: "e",
            ru_fn_cl: "у",
        }
    },
    {
        class: "letter key KeyR",
        volume: {
            en: "r",
            ru: "к",
            en_fn: "R",
            ru_fn: "К",
            en_cl: "R",
            ru_cl: "К",
            en_fn_cl: "r",
            ru_fn_cl: "к",
        }
    },
    {
        class: "letter key KeyT",
        volume: {
            en: "t",
            ru: "е",
            en_fn: "T",
            ru_fn: "Е",
            en_cl: "T",
            ru_cl: "Е",
            en_fn_cl: "t",
            ru_fn_cl: "е",
        }
    },
    {
        class: "letter key KeyY",
        volume: {
            en: "y",
            ru: "н",
            en_fn: "Y",
            ru_fn: "Н",
            en_cl: "Y",
            ru_cl: "Н",
            en_fn_cl: "y",
            ru_fn_cl: "н",
        }
    },
    {
        class: "letter key KeyU",
        volume: {
            en: "u",
            ru: "г",
            en_fn: "U",
            ru_fn: "Г",
            en_cl: "U",
            ru_cl: "Г",
            en_fn_cl: "u",
            ru_fn_cl: "г",
        }
    },
    {
        class: "letter key KeyI",
        volume: {
            en: "i",
            ru: "ш",
            en_fn: "I",
            ru_fn: "Ш",
            en_cl: "I",
            ru_cl: "Ш",
            en_fn_cl: "i",
            ru_fn_cl: "ш",
        }
    },
    {
        class: "letter key KeyO",
        volume: {
            en: "o",
            ru: "щ",
            en_fn: "O",
            ru_fn: "Щ",
            en_cl: "O",
            ru_cl: "Щ",
            en_fn_cl: "o",
            ru_fn_cl: "щ",
        }
    },
    {
        class: "letter key KeyP",
        volume: {
            en: "p",
            ru: "з",
            en_fn: "P",
            ru_fn: "З",
            en_cl: "P",
            ru_cl: "З",
            en_fn_cl: "p",
            ru_fn_cl: "з",
        }
    },
    {
        class: "letter key BracketLeft",
        volume: {
            en: "[",
            ru: "х",
            en_fn: "{",
            ru_fn: "Х",
            en_cl: "[",
            ru_cl: "Х",
            en_fn_cl: "{",
            ru_fn_cl: "х",
        }
    },
    {
        class: "letter key BracketRight",
        volume: {
            en: "]",
            ru: "ъ",
            en_fn: "}",
            ru_fn: "Ъ",
            en_cl: "]",
            ru_cl: "Ъ",
            en_fn_cl: "}",
            ru_fn_cl: "ъ",
        }
    },
    {
        class: "key Backslash",
        volume: {
            en: "\\",
            ru: "\\",
            en_fn: "|",
            ru_fn: "/",
            en_cl: "\\",
            ru_cl: "\\",
            en_fn_cl: "|",
            ru_fn_cl: "/",
        }
    },
    {
        class: "key CapsLock",
        volume: {
            en: "CapsLock",
            ru: "CapsLock",
            en_fn: "CapsLock",
            ru_fn: "CapsLock",
            en_cl: "CapsLock",
            ru_cl: "CapsLock",
            en_fn_cl: "CapsLock",
            ru_fn_cl: "CapsLock",
        }
    },
    {
        class: "letter key KeyA",
        volume: {
            en: "a",
            ru: "ф",
            en_fn: "A",
            ru_fn: "Ф",
            en_cl: "A",
            ru_cl: "Ф",
            en_fn_cl: "a",
            ru_fn_cl: "ф",
        }
    },
    {
        class: "letter key KeyS",
        volume: {
            en: "s",
            ru: "ы",
            en_fn: "S",
            ru_fn: "Ы",
            en_cl: "S",
            ru_cl: "Ы",
            en_fn_cl: "s",
            ru_fn_cl: "ы",
        }
    },
    {
        class: "letter key KeyD",
        volume: {
            en: "d",
            ru: "в",
            en_fn: "D",
            ru_fn: "В",
            en_cl: "D",
            ru_cl: "В",
            en_fn_cl: "d",
            ru_fn_cl: "в",
        }
    },
    {
        class: "letter key KeyF",
        volume: {
            en: "f",
            ru: "а",
            en_fn: "F",
            ru_fn: "А",
            en_cl: "F",
            ru_cl: "А",
            en_fn_cl: "f",
            ru_fn_cl: "а",
        }
    },
    {
        class: "letter key KeyG",
        volume: {
            en: "g",
            ru: "п",
            en_fn: "G",
            ru_fn: "П",
            en_cl: "G",
            ru_cl: "П",
            en_fn_cl: "g",
            ru_fn_cl: "п",
        }
    },
    {
        class: "letter key KeyH",
        volume: {
            en: "h",
            ru: "р",
            en_fn: "H",
            ru_fn: "Р",
            en_cl: "H",
            ru_cl: "Р",
            en_fn_cl: "h",
            ru_fn_cl: "р",
        }
    },
    {
        class: "letter key KeyJ",
        volume: {
            en: "j",
            ru: "о",
            en_fn: "J",
            ru_fn: "О",
            en_cl: "J",
            ru_cl: "О",
            en_fn_cl: "j",
            ru_fn_cl: "о",
        }
    },
    {
        class: "letter key KeyK",
        volume: {
            en: "k",
            ru: "л",
            en_fn: "K",
            ru_fn: "Л",
            en_cl: "K",
            ru_cl: "Л",
            en_fn_cl: "k",
            ru_fn_cl: "л",
        }
    },
    {
        class: "letter key KeyL",
        volume: {
            en: "l",
            ru: "д",
            en_fn: "L",
            ru_fn: "Д",
            en_cl: "L",
            ru_cl: "Д",
            en_fn_cl: "l",
            ru_fn_cl: "д",
        }
    },
    {
        class: "letter key Semicolon",
        volume: {
            en: ";",
            ru: "ж",
            en_fn: ":",
            ru_fn: "Ж",
            en_cl: ":",
            ru_cl: "Ж",
            en_fn_cl: ";",
            ru_fn_cl: "ж",
        }
    },
    {
        class: "letter key Quote",
        volume: {
            en: "'",
            ru: "э",
            en_fn: "\"",
            ru_fn: "Э",
            en_cl: "'",
            ru_cl: "Э",
            en_fn_cl: "\"",
            ru_fn_cl: "э",
        }
    },
    {
        class: "key Enter",
        volume: {
            en: "Enter",
            ru: "Enter",
            en_fn: "Enter",
            ru_fn: "Enter",
            en_cl: "Enter",
            ru_cl: "Enter",
            en_fn_cl: "Enter",
            ru_fn_cl: "Enter",
        }
    },
    {
        class: "key ShiftLeft",
        volume: {
            en: "Shift",
            ru: "Shift",
            en_fn: "Shift",
            ru_fn: "Shift",
            en_cl: "Shift",
            ru_cl: "Shift",
            en_fn_cl: "Shift",
            ru_fn_cl: "Shift",
        }
    },
    {
        class: "letter key KeyZ",
        volume: {
            en: "z",
            ru: "я",
            en_fn: "Z",
            ru_fn: "Я",
            en_cl: "Z",
            ru_cl: "Я",
            en_fn_cl: "z",
            ru_fn_cl: "я",
        }
    },
    {
        class: "letter key KeyX",
        volume: {
            en: "x",
            ru: "ч",
            en_fn: "X",
            ru_fn: "Ч",
            en_cl: "X",
            ru_cl: "Ч",
            en_fn_cl: "x",
            ru_fn_cl: "ч",
        }
    },
    {
        class: "letter key KeyC",
        volume: {
            en: "c",
            ru: "с",
            en_fn: "C",
            ru_fn: "С",
            en_cl: "C",
            ru_cl: "С",
            en_fn_cl: "c",
            ru_fn_cl: "с",
        }
    },
    {
        class: "letter key KeyV",
        volume: {
            en: "v",
            ru: "м",
            en_fn: "V",
            ru_fn: "М",
            en_cl: "V",
            ru_cl: "М",
            en_fn_cl: "v",
            ru_fn_cl: "м",
        }
    },
    {
        class: "letter key KeyB",
        volume: {
            en: "b",
            ru: "и",
            en_fn: "B",
            ru_fn: "И",
            en_cl: "B",
            ru_cl: "И",
            en_fn_cl: "b",
            ru_fn_cl: "и",
        }
    },
    {
        class: "letter key KeyN",
        volume: {
            en: "n",
            ru: "т",
            en_fn: "N",
            ru_fn: "Т",
            en_cl: "N",
            ru_cl: "Т",
            en_fn_cl: "n",
            ru_fn_cl: "т",
        }
    },
    {
        class: "letter key KeyM",
        volume: {
            en: "m",
            ru: "ь",
            en_fn: "M",
            ru_fn: "Ь",
            en_cl: "M",
            ru_cl: "Ь",
            en_fn_cl: "m",
            ru_fn_cl: "ь",
        }
    },
    {
        class: "letter key Comma",
        volume: {
            en: ",",
            ru: "б",
            en_fn: "<",
            ru_fn: "Б",
            en_cl: ",",
            ru_cl: "Б",
            en_fn_cl: ",",
            ru_fn_cl: "б",
        }
    },
    {
        class: "letter key Period",
        volume: {
            en: ".",
            ru: "ю",
            en_fn: ">",
            ru_fn: "Ю",
            en_cl: ".",
            ru_cl: "Ю",
            en_fn_cl: ">",
            ru_fn_cl: "ю",
        }
    },
    {
        class: "key Slash",
        volume: {
            en: "/",
            ru: ".",
            en_fn: "?",
            ru_fn: ",",
            en_cl: "/",
            ru_cl: ".",
            en_fn_cl: "?",
            ru_fn_cl: ",",
        }
    },
    {
        class: "key ShiftRight",
        volume: {
            en: "Shift",
            ru: "Shift",
            en_fn: "Shift",
            ru_fn: "Shift",
            en_cl: "Shift",
            ru_cl: "Shift",
            en_fn_cl: "Shift",
            ru_fn_cl: "Shift",
        }
    },
    {
        class: "key ControlLeft",
        volume: {
            en: "Control",
            ru: "Control",
            en_fn: "Control",
            ru_fn: "Control",
            en_cl: "Control",
            ru_cl: "Control",
            en_fn_cl: "Control",
            ru_fn_cl: "Control",
        }
    },
    {
        class: "key AltLeft",
        volume: {
            en: "Option",
            ru: "Option",
            en_fn: "Option",
            ru_fn: "Option",
            en_cl: "Option",
            ru_cl: "Option",
            en_fn_cl: "Option",
            ru_fn_cl: "Option",
        }
    },
    {
        class: "key MetaLeft",
        volume: {
            en: "Command",
            ru: "Command",
            en_fn: "Command",
            ru_fn: "Command",
            en_cl: "Command",
            ru_cl: "Command",
            en_fn_cl: "Command",
            ru_fn_cl: "Command",
        }
    },
    {
        class: "key Space",
        volume: {
            en: " ",
            ru: " ",
            en_fn: " ",
            ru_fn: " ",
            en_cl: " ",
            ru_cl: " ",
            en_fn_cl: " ",
            ru_fn_cl: " ",
        }
    },
    {
        class: "key MetaLeft",
        volume: {
            en: "Command",
            ru: "Command",
            en_fn: "Command",
            ru_fn: "Command",
            en_cl: "Command",
            ru_cl: "Command",
            en_fn_cl: "Command",
            ru_fn_cl: "Command",
        }
    },
    {
        class: "key AltRight",
        volume: {
            en: "Option",
            ru: "Option",
            en_fn: "Option",
            ru_fn: "Option",
            en_cl: "Option",
            ru_cl: "Option",
            en_fn_cl: "Option",
            ru_fn_cl: "Option",
        }
    },
    {
        class: "letter key ArrowLeft",
        volume: {
            en: "&#x2190",
            ru: "&#x2190",
            en_fn: "&#x2190",
            ru_fn: "&#x2190",
            en_cl: "&#x2190",
            ru_cl: "&#x2190",
            en_fn_cl: "&#x2190",
            ru_fn_cl: "&#x2190",
        }
    },
    {
        class: "letter key ArrowUp",
        volume: {
            en: "&#x2191",
            ru: "&#x2191",
            en_fn: "&#x2191",
            ru_fn: "&#x2191",
            en_cl: "&#x2191",
            ru_cl: "&#x2191",
            en_fn_cl: "&#x2191",
            ru_fn_cl: "&#x2191",
        }
    },
    {
        class: "letter key ArrowDown",
        volume: {
            en: "&#x2193",
            ru: "&#x2193",
            en_fn: "&#x2193",
            ru_fn: "&#x2193",
            en_cl: "&#x2193",
            ru_cl: "&#x2193",
            en_fn_cl: "&#x2193",
            ru_fn_cl: "&#x2193",
        }
    },
    {
        class: "letter key ArrowRight",
        volume: {
            en: "&#x2192",
            ru: "&#x2192",
            en_fn: "&#x2192",
            ru_fn: "&#x2192",
            en_cl: "&#x2192",
            ru_cl: "&#x2192",
            en_fn_cl: "&#x2192",
            ru_fn_cl: "&#x2192",
        }
    }
];






//
// const KEYS = [
//     {
//         class: "key key_backquote",
//         volume: {
//             en: "`",
//             ru: "ё",
//             en_fn: "~",
//             ru_fn: "Ё"
//         }
//     },
//     {
//         class: "key key_1",
//         volume: {
//             en: "1",
//             ru: "1",
//             en_fn: "!",
//             ru_fn: "!"
//         }
//     },
//     {
//         class: "key key_2",
//         volume: {
//             en: "2",
//             ru: "2",
//             en_fn: "@",
//             ru_fn: "\""
//         }
//     },
//     {
//         class: "key key_3",
//         volume: {
//             en: "3",
//             ru: "3",
//             en_fn: "#",
//             ru_fn: "№"
//         }
//     },
//     {
//         class: "key key_4",
//         volume: {
//             en: "4",
//             ru: "4",
//             en_fn: "$",
//             ru_fn: ";"
//         }
//     },
//     {
//         class: "key key_5",
//         volume: {
//             en: "5",
//             ru: "5",
//             en_fn: "%",
//             ru_fn: "%"
//         }
//     },
//     {
//         class: "key key_6",
//         volume: {
//             en: "6",
//             ru: "6",
//             en_fn: "^",
//             ru_fn: ":"
//         }
//     },
//     {
//         class: "key key_7",
//         volume: {
//             en: "7",
//             ru: "7",
//             en_fn: "&",
//             ru_fn: "?"
//         }
//     },
//     {
//         class: "key key_8",
//         volume: {
//             en: "8",
//             ru: "8",
//             en_fn: "*",
//             ru_fn: "*"
//         }
//     },
//     {
//         class: "key key_9",
//         volume: {
//             en: "9",
//             ru: "9",
//             en_fn: "(",
//             ru_fn: "("
//         }
//     },
//     {
//         class: "key key_0",
//         volume: {
//             en: "0",
//             ru: "0",
//             en_fn: ")",
//             ru_fn: ")"
//         }
//     },
//     {
//         class: "key key_dash",
//         volume: {
//             en: "-",
//             ru: "-",
//             en_fn: "_",
//             ru_fn: "_"
//         }
//     },
//     {
//         class: "key key_equal",
//         volume: {
//             en: "=",
//             ru: "=",
//             en_fn: "+",
//             ru_fn: "+"
//         }
//     },
//     {
//         class: "key key_backspace",
//         volume: {
//             en: "Backspace",
//             ru: "Backspace",
//             en_fn: "Backspace",
//             ru_fn: "Backspace"
//         }
//     },
//     {
//         class: "key key_tab",
//         volume: {
//             en: "Tab",
//             ru: "Tab",
//             en_fn: "Tab",
//             ru_fn: "Tab"
//         }
//     },
//     {
//         class: "letter key key_q",
//         volume: {
//             en: "q",
//             ru: "й",
//             en_fn: "Q",
//             ru_fn: "Й"
//         }
//     },
//     {
//         class: "letter key key_w",
//         volume: {
//             en: "w",
//             ru: "ц",
//             en_fn: "W",
//             ru_fn: "Ц"
//         }
//     },
//     {
//         class: "letter key key_e",
//         volume: {
//             en: "e",
//             ru: "у",
//             en_fn: "E",
//             ru_fn: "У"
//         }
//     },
//     {
//         class: "letter key key_r",
//         volume: {
//             en: "r",
//             ru: "к",
//             en_fn: "R",
//             ru_fn: "К"
//         }
//     },
//     {
//         class: "letter key key_t",
//         volume: {
//             en: "t",
//             ru: "е",
//             en_fn: "T",
//             ru_fn: "Е"
//         }
//     },
//     {
//         class: "letter key key_y",
//         volume: {
//             en: "y",
//             ru: "н",
//             en_fn: "Y",
//             ru_fn: "Н"
//         }
//     },
//     {
//         class: "letter key key_u",
//         volume: {
//             en: "u",
//             ru: "г",
//             en_fn: "U",
//             ru_fn: "Г"
//         }
//     },
//     {
//         class: "letter key key_i",
//         volume: {
//             en: "i",
//             ru: "ш",
//             en_fn: "I",
//             ru_fn: "Ш"
//         }
//     },
//     {
//         class: "letter key key_o",
//         volume: {
//             en: "o",
//             ru: "щ",
//             en_fn: "O",
//             ru_fn: "Щ"
//         }
//     },
//     {
//         class: "letter key key_p",
//         volume: {
//             en: "p",
//             ru: "з",
//             en_fn: "P",
//             ru_fn: "З"
//         }
//     },
//     {
//         class: "letter key key_bracketLeft",
//         volume: {
//             en: "[",
//             ru: "х",
//             en_fn: "{",
//             ru_fn: "Х"
//         }
//     },
//     {
//         class: "letter key key_bracketRight",
//         volume: {
//             en: "]",
//             ru: "ъ",
//             en_fn: "}",
//             ru_fn: "Ъ"
//         }
//     },
//     {
//         class: "key key_backslash",
//         volume: {
//             en: "\\",
//             ru: "\\",
//             en_fn: "||",
//             ru_fn: "//"
//         }
//     },
//     {
//         class: "key key_capslock",
//         volume: {
//             en: "CapsLock",
//             ru: "CapsLock",
//             en_fn: "CapsLock",
//             ru_fn: "CapsLock"
//         }
//     },
//     {
//         class: "letter key key_a",
//         volume: {
//             en: "a",
//             ru: "ф",
//             en_fn: "A",
//             ru_fn: "Ф"
//         }
//     },
//     {
//         class: "letter key key_s",
//         volume: {
//             en: "s",
//             ru: "ы",
//             en_fn: "S",
//             ru_fn: "Ы"
//         }
//     },
//     {
//         class: "letter key key_d",
//         volume: {
//             en: "d",
//             ru: "в",
//             en_fn: "D",
//             ru_fn: "В"
//         }
//     },
//     {
//         class: "letter key key_f",
//         volume: {
//             en: "f",
//             ru: "а",
//             en_fn: "F",
//             ru_fn: "А"
//         }
//     },
//     {
//         class: "letter key key_g",
//         volume: {
//             en: "g",
//             ru: "п",
//             en_fn: "G",
//             ru_fn: "П"
//         }
//     },
//     {
//         class: "letter key key_h",
//         volume: {
//             en: "h",
//             ru: "р",
//             en_fn: "H",
//             ru_fn: "Р"
//         }
//     },
//     {
//         class: "letter key key_j",
//         volume: {
//             en: "j",
//             ru: "о",
//             en_fn: "J",
//             ru_fn: "О"
//         }
//     },
//     {
//         class: "letter key key_k",
//         volume: {
//             en: "k",
//             ru: "л",
//             en_fn: "K",
//             ru_fn: "Л"
//         }
//     },
//     {
//         class: "letter key key_l",
//         volume: {
//             en: "l",
//             ru: "д",
//             en_fn: "L",
//             ru_fn: "Д"
//         }
//     },
//     {
//         class: "letter key semicolon",
//         volume: {
//             en: ";",
//             ru: "ж",
//             en_fn: ":",
//             ru_fn: "Ж"
//         }
//     },
//     {
//         class: "letter key key_quote",
//         volume: {
//             en: "'",
//             ru: "э",
//             en_fn: "\"",
//             ru_fn: "Э"
//         }
//     },
//     {
//         class: "key key_enter",
//         volume: {
//             en: "Enter",
//             ru: "Enter",
//             en_fn: "Enter",
//             ru_fn: "Enter"
//         }
//     },
//     {
//         class: "key key_left_shift",
//         volume: {
//             en: "Shift",
//             ru: "Shift",
//             en_fn: "Shift",
//             ru_fn: "Shift"
//         }
//     },
//     {
//         class: "letter key key_z",
//         volume: {
//             en: "z",
//             ru: "я",
//             en_fn: "Z",
//             ru_fn: "Я"
//         }
//     },
//     {
//         class: "letter key key_x",
//         volume: {
//             en: "x",
//             ru: "ч",
//             en_fn: "X",
//             ru_fn: "Ч"
//         }
//     },
//     {
//         class: "letter key key_c",
//         volume: {
//             en: "c",
//             ru: "с",
//             en_fn: "C",
//             ru_fn: "С"
//         }
//     },
//     {
//         class: "letter key key_v",
//         volume: {
//             en: "v",
//             ru: "м",
//             en_fn: "V",
//             ru_fn: "М"
//         }
//     },
//     {
//         class: "letter key key_b",
//         volume: {
//             en: "b",
//             ru: "и",
//             en_fn: "B",
//             ru_fn: "И"
//         }
//     },
//     {
//         class: "letter key key_n",
//         volume: {
//             en: "n",
//             ru: "т",
//             en_fn: "N",
//             ru_fn: "Т"
//         }
//     },
//     {
//         class: "letter key key_m",
//         volume: {
//             en: "m",
//             ru: "ь",
//             en_fn: "M",
//             ru_fn: "Ь"
//         }
//     },
//     {
//         class: "letter key key_comma",
//         volume: {
//             en: ",",
//             ru: "б",
//             en_fn: "<",
//             ru_fn: "Б"
//         }
//     },
//     {
//         class: "letter key key_dot",
//         volume: {
//             en: ".",
//             ru: "ю",
//             en_fn: ">",
//             ru_fn: "Ю"
//         }
//     },
//     {
//         class: "key key_slash",
//         volume: {
//             en: "/",
//             ru: ".",
//             en_fn: "?",
//             ru_fn: ","
//         }
//     },
//     {
//         class: "key key_right_shift",
//         volume: {
//             en: "Shift",
//             ru: "Shift",
//             en_fn: "Shift",
//             ru_fn: "Shift"
//         }
//     },
//     {
//         class: "key key_control",
//         volume: {
//             en: "Control",
//             ru: "Control",
//             en_fn: "Control",
//             ru_fn: "Control"
//         }
//     },
//     {
//         class: "key key_left_option",
//         volume: {
//             en: "Option",
//             ru: "Option",
//             en_fn: "Option",
//             ru_fn: "Option"
//         }
//     },
//     {
//         class: "key key_left_command",
//         volume: {
//             en: "Command",
//             ru: "Command",
//             en_fn: "Command",
//             ru_fn: "Command"
//         }
//     },
//     {
//         class: "key key_space",
//         volume: {
//             en: " ",
//             ru: " ",
//             en_fn: " ",
//             ru_fn: " "
//         }
//     },
//     {
//         class: "key key_right_command",
//         volume: {
//             en: "Command",
//             ru: "Command",
//             en_fn: "Command",
//             ru_fn: "Command"
//         }
//     },
//     {
//         class: "key key_right_option",
//         volume: {
//             en: "Option",
//             ru: "Option",
//             en_fn: "Option",
//             ru_fn: "Option"
//         }
//     },
//     {
//         class: "letter key key_left",
//         volume: {
//             en: "&#x2190",
//             ru: "&#x2190",
//             en_fn: "&#x2190",
//             ru_fn: "&#x2190"
//         }
//     },
//     {
//         class: "letter key key_up",
//         volume: {
//             en: "&#x2191",
//             ru: "&#x2191",
//             en_fn: "&#x2191",
//             ru_fn: "&#x2191"
//         }
//     },
//     {
//         class: "letter key key_down",
//         volume: {
//             en: "&#x2193",
//             ru: "&#x2193",
//             en_fn: "&#x2193",
//             ru_fn: "&#x2193"
//         }
//     },
//     {
//         class: "letter key key_right",
//         volume: {
//             en: "&#x2192",
//             ru: "&#x2192",
//             en_fn: "&#x2192",
//             ru_fn: "&#x2192"
//         }
//     }
// ];
export default KEYS;



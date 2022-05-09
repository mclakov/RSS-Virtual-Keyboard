const KEYS = [
    {
        class: "key IntlBackslash",
        volume: {
            en: "`",
            ru: "ё",
            en_fn: "~",
            ru_fn: "Ё"
        }
    },
    {
        class: "key Digit1",
        volume: {
            en: "1",
            ru: "1",
            en_fn: "!",
            ru_fn: "!"
        }
    },
    {
        class: "key Digit2",
        volume: {
            en: "2",
            ru: "2",
            en_fn: "@",
            ru_fn: "\""
        }
    },
    {
        class: "key Digit3",
        volume: {
            en: "3",
            ru: "3",
            en_fn: "#",
            ru_fn: "№"
        }
    },
    {
        class: "key Digit4",
        volume: {
            en: "4",
            ru: "4",
            en_fn: "$",
            ru_fn: ";"
        }
    },
    {
        class: "key Digit5",
        volume: {
            en: "5",
            ru: "5",
            en_fn: "%",
            ru_fn: "%"
        }
    },
    {
        class: "key Digit6",
        volume: {
            en: "6",
            ru: "6",
            en_fn: "^",
            ru_fn: ":"
        }
    },
    {
        class: "key Digit7",
        volume: {
            en: "7",
            ru: "7",
            en_fn: "&",
            ru_fn: "?"
        }
    },
    {
        class: "key Digit8",
        volume: {
            en: "8",
            ru: "8",
            en_fn: "*",
            ru_fn: "*"
        }
    },
    {
        class: "key Digit9",
        volume: {
            en: "9",
            ru: "9",
            en_fn: "(",
            ru_fn: "("
        }
    },
    {
        class: "key Digit0",
        volume: {
            en: "0",
            ru: "0",
            en_fn: ")",
            ru_fn: ")"
        }
    },
    {
        class: "key Minus",
        volume: {
            en: "-",
            ru: "-",
            en_fn: "_",
            ru_fn: "_"
        }
    },
    {
        class: "key Equal",
        volume: {
            en: "=",
            ru: "=",
            en_fn: "+",
            ru_fn: "+"
        }
    },
    {
        class: "key Backspace",
        volume: {
            en: "Backspace",
            ru: "Backspace",
            en_fn: "Backspace",
            ru_fn: "Backspace"
        }
    },
    {
        class: "key Tab",
        volume: {
            en: "Tab",
            ru: "Tab",
            en_fn: "Tab",
            ru_fn: "Tab"
        }
    },
    {
        class: "letter key KeyQ",
        volume: {
            en: "q",
            ru: "й",
            en_fn: "Q",
            ru_fn: "Й"
        }
    },
    {
        class: "letter key KeyW",
        volume: {
            en: "w",
            ru: "ц",
            en_fn: "W",
            ru_fn: "Ц"
        }
    },
    {
        class: "letter key KeyE",
        volume: {
            en: "e",
            ru: "у",
            en_fn: "E",
            ru_fn: "У"
        }
    },
    {
        class: "letter key KeyR",
        volume: {
            en: "r",
            ru: "к",
            en_fn: "R",
            ru_fn: "К"
        }
    },
    {
        class: "letter key KeyT",
        volume: {
            en: "t",
            ru: "е",
            en_fn: "T",
            ru_fn: "Е"
        }
    },
    {
        class: "letter key KeyY",
        volume: {
            en: "y",
            ru: "н",
            en_fn: "Y",
            ru_fn: "Н"
        }
    },
    {
        class: "letter key KeyU",
        volume: {
            en: "u",
            ru: "г",
            en_fn: "U",
            ru_fn: "Г"
        }
    },
    {
        class: "letter key KeyI",
        volume: {
            en: "i",
            ru: "ш",
            en_fn: "I",
            ru_fn: "Ш"
        }
    },
    {
        class: "letter key KeyO",
        volume: {
            en: "o",
            ru: "щ",
            en_fn: "O",
            ru_fn: "Щ"
        }
    },
    {
        class: "letter key KeyP",
        volume: {
            en: "p",
            ru: "з",
            en_fn: "P",
            ru_fn: "З"
        }
    },
    {
        class: "letter key BracketLeft",
        volume: {
            en: "[",
            ru: "х",
            en_fn: "{",
            ru_fn: "Х"
        }
    },
    {
        class: "letter key BracketRight",
        volume: {
            en: "]",
            ru: "ъ",
            en_fn: "}",
            ru_fn: "Ъ"
        }
    },
    {
        class: "key Backslash",
        volume: {
            en: "\\",
            ru: "\\",
            en_fn: "|",
            ru_fn: "/"
        }
    },
    {
        class: "key CapsLock",
        volume: {
            en: "CapsLock",
            ru: "CapsLock",
            en_fn: "CapsLock",
            ru_fn: "CapsLock"
        }
    },
    {
        class: "letter key KeyA",
        volume: {
            en: "a",
            ru: "ф",
            en_fn: "A",
            ru_fn: "Ф"
        }
    },
    {
        class: "letter key KeyS",
        volume: {
            en: "s",
            ru: "ы",
            en_fn: "S",
            ru_fn: "Ы"
        }
    },
    {
        class: "letter key KeyD",
        volume: {
            en: "d",
            ru: "в",
            en_fn: "D",
            ru_fn: "В"
        }
    },
    {
        class: "letter key KeyF",
        volume: {
            en: "f",
            ru: "а",
            en_fn: "F",
            ru_fn: "А"
        }
    },
    {
        class: "letter key KeyG",
        volume: {
            en: "g",
            ru: "п",
            en_fn: "G",
            ru_fn: "П"
        }
    },
    {
        class: "letter key KeyH",
        volume: {
            en: "h",
            ru: "р",
            en_fn: "H",
            ru_fn: "Р"
        }
    },
    {
        class: "letter key KeyJ",
        volume: {
            en: "j",
            ru: "о",
            en_fn: "J",
            ru_fn: "О"
        }
    },
    {
        class: "letter key KeyK",
        volume: {
            en: "k",
            ru: "л",
            en_fn: "K",
            ru_fn: "Л"
        }
    },
    {
        class: "letter key KeyL",
        volume: {
            en: "l",
            ru: "д",
            en_fn: "L",
            ru_fn: "Д"
        }
    },
    {
        class: "letter key Semicolon",
        volume: {
            en: ";",
            ru: "ж",
            en_fn: ":",
            ru_fn: "Ж"
        }
    },
    {
        class: "letter key Quote",
        volume: {
            en: "'",
            ru: "э",
            en_fn: "\"",
            ru_fn: "Э"
        }
    },
    {
        class: "key Enter",
        volume: {
            en: "Enter",
            ru: "Enter",
            en_fn: "Enter",
            ru_fn: "Enter"
        }
    },
    {
        class: "key ShiftLeft",
        volume: {
            en: "Shift",
            ru: "Shift",
            en_fn: "Shift",
            ru_fn: "Shift"
        }
    },
    {
        class: "letter key KeyZ",
        volume: {
            en: "z",
            ru: "я",
            en_fn: "Z",
            ru_fn: "Я"
        }
    },
    {
        class: "letter key KeyX",
        volume: {
            en: "x",
            ru: "ч",
            en_fn: "X",
            ru_fn: "Ч"
        }
    },
    {
        class: "letter key KeyC",
        volume: {
            en: "c",
            ru: "с",
            en_fn: "C",
            ru_fn: "С"
        }
    },
    {
        class: "letter key KeyV",
        volume: {
            en: "v",
            ru: "м",
            en_fn: "V",
            ru_fn: "М"
        }
    },
    {
        class: "letter key KeyB",
        volume: {
            en: "b",
            ru: "и",
            en_fn: "B",
            ru_fn: "И"
        }
    },
    {
        class: "letter key KeyN",
        volume: {
            en: "n",
            ru: "т",
            en_fn: "N",
            ru_fn: "Т"
        }
    },
    {
        class: "letter key KeyM",
        volume: {
            en: "m",
            ru: "ь",
            en_fn: "M",
            ru_fn: "Ь"
        }
    },
    {
        class: "letter key Comma",
        volume: {
            en: ",",
            ru: "б",
            en_fn: "<",
            ru_fn: "Б"
        }
    },
    {
        class: "letter key Period",
        volume: {
            en: ".",
            ru: "ю",
            en_fn: ">",
            ru_fn: "Ю"
        }
    },
    {
        class: "key Slash",
        volume: {
            en: "/",
            ru: ".",
            en_fn: "?",
            ru_fn: ","
        }
    },
    {
        class: "key ShiftRight",
        volume: {
            en: "Shift",
            ru: "Shift",
            en_fn: "Shift",
            ru_fn: "Shift"
        }
    },
    {
        class: "key ControlLeft",
        volume: {
            en: "Control",
            ru: "Control",
            en_fn: "Control",
            ru_fn: "Control"
        }
    },
    {
        class: "key AltLeft",
        volume: {
            en: "Option",
            ru: "Option",
            en_fn: "Option",
            ru_fn: "Option"
        }
    },
    {
        class: "key MetaLeft",
        volume: {
            en: "Command",
            ru: "Command",
            en_fn: "Command",
            ru_fn: "Command"
        }
    },
    {
        class: "key Space",
        volume: {
            en: " ",
            ru: " ",
            en_fn: " ",
            ru_fn: " "
        }
    },
    {
        class: "key MetaLeft",
        volume: {
            en: "Command",
            ru: "Command",
            en_fn: "Command",
            ru_fn: "Command"
        }
    },
    {
        class: "key AltRight",
        volume: {
            en: "Option",
            ru: "Option",
            en_fn: "Option",
            ru_fn: "Option"
        }
    },
    {
        class: "letter key ArrowLeft",
        volume: {
            en: "&#x2190",
            ru: "&#x2190",
            en_fn: "&#x2190",
            ru_fn: "&#x2190"
        }
    },
    {
        class: "letter key ArrowUp",
        volume: {
            en: "&#x2191",
            ru: "&#x2191",
            en_fn: "&#x2191",
            ru_fn: "&#x2191"
        }
    },
    {
        class: "letter key ArrowDown",
        volume: {
            en: "&#x2193",
            ru: "&#x2193",
            en_fn: "&#x2193",
            ru_fn: "&#x2193"
        }
    },
    {
        class: "letter key ArrowRight",
        volume: {
            en: "&#x2192",
            ru: "&#x2192",
            en_fn: "&#x2192",
            ru_fn: "&#x2192"
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



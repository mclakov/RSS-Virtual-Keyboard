const KEYBORD_KEYS = [
    {
        class: "key key_backquote",
        volume: {
            en: "`",
            ru: "ё",
            en_fn: "~",
            ru_fn: "Ё"
        }
    },
    {
        class: "key key_1",
        volume: {
            en: "1",
            ru: "1",
            en_fn: "!",
            ru_fn: "!"
        }
    },
    {
        class: "key key_2",
        volume: {
            en: "2",
            ru: "",
            en_fn: "@",
            ru_fn: ""
        }
    },
    {
        class: "key key_3",
        volume: {
            en: "3",
            ru: "",
            en_fn: "#",
            ru_fn: ""
        }
    },
    {
        class: "key key_4",
        volume: {
            en: "4",
            ru: "",
            en_fn: "$",
            ru_fn: ""
        }
    },
    {
        class: "key key_5",
        volume: {
            en: "5",
            ru: "",
            en_fn: "%",
            ru_fn: ""
        }
    },
    {
        class: "key key_6",
        volume: {
            en: "6",
            ru: "",
            en_fn: "^",
            ru_fn: ""
        }
    },
    {
        class: "key key_7",
        volume: {
            en: "7",
            ru: "",
            en_fn: "&",
            ru_fn: ""
        }
    },
    {
        class: "key key_8",
        volume: {
            en: "8",
            ru: "",
            en_fn: "*",
            ru_fn: ""
        }
    },
    {
        class: "key key_9",
        volume: {
            en: "9",
            ru: "",
            en_fn: "(",
            ru_fn: ""
        }
    },
    {
        class: "key key_0",
        volume: {
            en: "0",
            ru: "",
            en_fn: ")",
            ru_fn: ""
        }
    },
    {
        class: "key key_dash",
        volume: {
            en: "-",
            ru: "",
            en_fn: "_",
            ru_fn: ""
        }
    },
    {
        class: "key key_equal",
        volume: {
            en: "=",
            ru: "",
            en_fn: "+",
            ru_fn: ""
        }
    },
    {
        class: "key key_backspace",
        volume: {
            en: "Backspace",
            ru: "Backspace",
            en_fn: "Backspace",
            ru_fn: "Backspace"
        }
    },
    {
        class: "key key_tab",
        volume: {
            en: "Tab",
            ru: "Tab",
            en_fn: "Tab",
            ru_fn: "Tab"
        }
    },
    {
        class: "letter key key_q",
        volume: {
            en: "q",
            ru: "",
            en_fn: "Q",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_w",
        volume: {
            en: "w",
            ru: "",
            en_fn: "W",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_e",
        volume: {
            en: "e",
            ru: "",
            en_fn: "E",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_r",
        volume: {
            en: "r",
            ru: "",
            en_fn: "R",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_t",
        volume: {
            en: "t",
            ru: "",
            en_fn: "T",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_y",
        volume: {
            en: "y",
            ru: "",
            en_fn: "Y",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_u",
        volume: {
            en: "u",
            ru: "",
            en_fn: "U",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_i",
        volume: {
            en: "i",
            ru: "",
            en_fn: "I",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_o",
        volume: {
            en: "o",
            ru: "",
            en_fn: "O",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_p",
        volume: {
            en: "p",
            ru: "",
            en_fn: "P",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_bracketLeft",
        volume: {
            en: "[",
            ru: "",
            en_fn: "{",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_bracketRight",
        volume: {
            en: "]",
            ru: "",
            en_fn: "}",
            ru_fn: ""
        }
    },
    {
        class: "key key_backslash",
        volume: {
            en: "\\",
            ru: "\\",
            en_fn: "||",
            ru_fn: "//"
        }
    },
    {
        class: "key key_capslock",
        volume: {
            en: "CapsLock",
            ru: "CapsLock",
            en_fn: "CapsLock",
            ru_fn: "CapsLock"
        }
    },
    {
        class: "letter key key_a",
        volume: {
            en: "a",
            ru: "",
            en_fn: "A",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_s",
        volume: {
            en: "s",
            ru: "",
            en_fn: "S",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_d",
        volume: {
            en: "d",
            ru: "",
            en_fn: "D",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_f",
        volume: {
            en: "f",
            ru: "",
            en_fn: "F",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_g",
        volume: {
            en: "g",
            ru: "",
            en_fn: "G",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_h",
        volume: {
            en: "h",
            ru: "",
            en_fn: "H",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_j",
        volume: {
            en: "j",
            ru: "",
            en_fn: "J",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_k",
        volume: {
            en: "k",
            ru: "",
            en_fn: "K",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_l",
        volume: {
            en: "l",
            ru: "",
            en_fn: "L",
            ru_fn: ""
        }
    },
    {
        class: "letter key semicolon",
        volume: {
            en: ";",
            ru: "",
            en_fn: ":",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_quote",
        volume: {
            en: "'",
            ru: "",
            en_fn: "\"",
            ru_fn: ""
        }
    },
    {
        class: "key key_enter",
        volume: {
            en: "Enter",
            ru: "Enter",
            en_fn: "Enter",
            ru_fn: "Enter"
        }
    },



    {
        class: "key key_left_shift",
        volume: {
            en: "",
            ru: "",
            en_fn: "",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_z",
        volume: {
            en: "z",
            ru: "",
            en_fn: "Z",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_x",
        volume: {
            en: "x",
            ru: "",
            en_fn: "X",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_c",
        volume: {
            en: "c",
            ru: "",
            en_fn: "C",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_v",
        volume: {
            en: "v",
            ru: "",
            en_fn: "V",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_b",
        volume: {
            en: "b",
            ru: "",
            en_fn: "B",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_n",
        volume: {
            en: "n",
            ru: "",
            en_fn: "N",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_m",
        volume: {
            en: "m",
            ru: "",
            en_fn: "M",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_comma",
        volume: {
            en: ",",
            ru: "",
            en_fn: "<",
            ru_fn: ""
        }
    },
    {
        class: "letter key key_dot",
        volume: {
            en: ".",
            ru: "",
            en_fn: ">",
            ru_fn: ""
        }
    },
    {
        class: "key key_slash",
        volume: {
            en: "/",
            ru: "",
            en_fn: "?",
            ru_fn: ""
        }
    },
    {
        class: "key key_right_shift",
        volume: {
            en: "Shift",
            ru: "Shift",
            en_fn: "Shift",
            ru_fn: "Shift"
        }
    },
    {
        class: "key key_left_control",
        volume: {
            en: "Control",
            ru: "Control",
            en_fn: "Control",
            ru_fn: "Control"
        }
    },
    {
        class: "key key_left_option",
        volume: {
            en: "Option",
            ru: "Option",
            en_fn: "Option",
            ru_fn: "Option"
        }
    },
    {
        class: "key key_left_command",
        volume: {
            en: "Command",
            ru: "Command",
            en_fn: "Command",
            ru_fn: "Command"
        }
    },
    {
        class: "key key_space",
        volume: {
            en: "",
            ru: "",
            en_fn: "",
            ru_fn: ""
        }
    },
    {
        class: "key key_right_command",
        volume: {
            en: "Command",
            ru: "Command",
            en_fn: "Command",
            ru_fn: "Command"
        }
    },
    {
        class: "key key_right_option",
        volume: {
            en: "Option",
            ru: "Option",
            en_fn: "Option",
            ru_fn: "Option"
        }
    },
    {
        class: "letter key key_left",
        volume: {
            en: "&#x2190",
            ru: "&#x2190",
            en_fn: "&#x2190",
            ru_fn: "&#x2190"
        }
    },
    {
        class: "letter key key_up",
        volume: {
            en: "&#x2191",
            ru: "&#x2191",
            en_fn: "&#x2191",
            ru_fn: "&#x2191"
        }
    },
    {
        class: "letter key key_down",
        volume: {
            en: "&#x2193",
            ru: "&#x2193",
            en_fn: "&#x2193",
            ru_fn: "&#x2193"
        }
    },
    {
        class: "letter key key_right",
        volume: {
            en: "&#x2192",
            ru: "&#x2192",
            en_fn: "&#x2192",
            ru_fn: "&#x2192"
        }
    }
];

export default KEYBORD_KEYS;



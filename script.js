let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

// Button click event handling
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    const key = e.key;

    // Allowed keys: numbers, operators, and special keys
    if (/[0-9+\-*/.%]/.test(key)) {
        string += key;
        input.value = string;
    } else if (key === 'Enter' || key === '=') {
        string = eval(string);
        input.value = string;
    } else if (key === 'Backspace') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else if (key === 'Escape') {
        string = "";
        input.value = string;
    } else if (key === '(' || key === ')') {
        string += key;
        input.value = string;
    }
});
let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}
function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;

        // Check if the expression contains '%'
        if (expression.includes('%')) {
            // Replace '%' with '/100*' for proper evaluation
            expression = expression.replace('%', '/100*');
        }

        display.value = eval(expression);
    } catch (e) {
        display.value = 'Error';
    }
}
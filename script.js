 const display = document.getElementById('display');

function appendValue(val) {
    if (display.value === '0' || display.value === 'Error') {
        display.value = val;
    } else {
        display.value += val;
    }
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let expression = display.value;
        
        // Halkaan waxaan ku baddalanaa calaamadaha shaashadda ka muuqda si JS u fahmo
        expression = expression.replace(/×/g, '*');
        expression = expression.replace(/÷/g, '/');
        
        if (expression.trim() === '') return;
        
        // Xisaabi koodhka
        let result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function toggleSign() {
    if (display.value !== '' && display.value !== '0') {
        if (display.value.startsWith('-')) {
            display.value = display.value.slice(1);
        } else {
            display.value = '-' + display.value;
        }
    }
}
function add() {
    const num1 = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
    const num2 = parseFloat((<HTMLInputElement>document.getElementById('num2')).value);
    const result = num1 + num2;
    displayResult(result);
}

function subtract() {
    const num1 = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
    const num2 = parseFloat((<HTMLInputElement>document.getElementById('num2')).value);
    const result = num1 - num2;
    displayResult(result);
}

function multiply() {
    const num1 = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
    const num2 = parseFloat((<HTMLInputElement>document.getElementById('num2')).value);
    const result = num1 * num2;
    displayResult(result);
}

function divide() {
    const num1 = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
    const num2 = parseFloat((<HTMLInputElement>document.getElementById('num2')).value);
    const result = num1 / num2;
    displayResult(result);
}

function exponent() {
    const num1 = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
    const num2 = parseFloat((<HTMLInputElement>document.getElementById('num2')).value);
    const result = Math.pow(num1, num2);
    displayResult(result);
}

function factorial() {
    const num1 = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
    let result = 1;
    for (let i = 2; i <= num1; i++) {
        result *= i;
    }
    displayResult(result);
}

function squareRoot() {
    const num1 = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
    const result = Math.sqrt(num1);
    displayResult(result);
}

function displayResult(result: number) {
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.textContent = `Result: ${result}`;
    }
}

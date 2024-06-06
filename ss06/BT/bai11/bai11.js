function add() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 + num2;
    displayResult(result);
}
function subtract() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 - num2;
    displayResult(result);
}
function multiply() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 * num2;
    displayResult(result);
}
function divide() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 / num2;
    displayResult(result);
}
function exponent() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = Math.pow(num1, num2);
    displayResult(result);
}
function factorial() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var result = 1;
    for (var i = 2; i <= num1; i++) {
        result *= i;
    }
    displayResult(result);
}
function squareRoot() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var result = Math.sqrt(num1);
    displayResult(result);
}
function displayResult(result) {
    var resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.textContent = "Result: ".concat(result);
    }
}

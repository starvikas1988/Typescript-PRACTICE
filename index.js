var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.subtract = function (x, y) {
        return x - y;
    };
    Calculator.prototype.multiply = function (x, y) {
        return x * y;
    };
    Calculator.prototype.divide = function (x, y) {
        if (y === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return x / y;
    };
    return Calculator;
}());
// Usage
var calculator = new Calculator();
console.log("Addition:", calculator.add(5, 3)); // Output: 8
console.log("Subtraction:", calculator.subtract(10, 4)); // Output: 6
console.log("Multiplication:", calculator.multiply(2, 6)); // Output: 12
console.log("Division:", calculator.divide(10, 2)); // Output: 5

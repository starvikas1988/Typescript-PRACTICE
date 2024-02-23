class Calculator {
    add(x: number, y: number): number {
        return x + y;
    }

    subtract(x: number, y: number): number {
        return x - y;
    }

    multiply(x: number, y: number): number {
        return x * y;
    }

    divide(x: number, y: number): number {
        if (y === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return x / y;
    }
}

// Usage
const calculator = new Calculator();
console.log("Addition:", calculator.add(5, 3)); // Output: 8
console.log("Subtraction:", calculator.subtract(10, 4)); // Output: 6
console.log("Multiplication:", calculator.multiply(2, 6)); // Output: 12
console.log("Division:", calculator.divide(10, 2)); // Output: 5

export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function divide(a: number, b: number): number | string {
    return b !== 0 ? a / b : "Cannot divide by zero";
}

console.log(add(5, 10)); // 15
console.log(divide(10, 2)); // 5

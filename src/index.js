const prompt = require('prompt-sync')();

const myFunction = (x) => x * x - x + 1;

function rightRiemannSum(func, a, b, n = 10000) {
    const dx = (b - a) / n;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += func(a + i * dx) * dx;
    }
    return sum;
}

console.log("--- Программа численного интегрирования ---");
console.log("Функция: F(x) = x^2 - x + 1");
console.log("Метод: правых прямоугольников\n");

const a = parseFloat(prompt("Введите нижнюю границу (a): "));
const b = parseFloat(prompt("Введите верхнюю границу (b): "));


const result = rightRiemannSum(myFunction, a, b);

console.log("\n--- РЕЗУЛЬТАТ ---");
console.log(`Интервал: [${a}, ${b}]`);
console.log(`Результат: ${result.toFixed(5)}`);

//npm install prompt-sync
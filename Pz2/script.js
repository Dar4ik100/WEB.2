"use strict";
console.log("Підключено JavaScript для Практичної роботи №2");

// 1. Функція-декларація
function greet() {
  console.log("Привіт, світ!");
}
greet();
greet();

// 2. Функціональний вираз
const multiply = function(a, b) {
  return a * b;
};
console.log("Добуток:", multiply(4, 5)); // 20

// 3. Стрілочна функція
const divide = (a, b) => a / b;
console.log("Ділення:", divide(20, 4)); // 5

// 4. Функція з параметром та return
function square(x) {
  return x * x;
}
console.log("Квадрат:", square(6)); // 36

// 5. Область видимості
if (true) {
  let localVar = "Я в блоці";
  console.log(localVar); // Працює
}
// console.log(localVar); // ReferenceError

// 6. Замикання - лічильник
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log("Лічильник:", counter()); // 1
console.log("Лічильник:", counter()); // 2

// 7. Контекст this
const person = {
  name: "Олена",
  sayHello() {
    console.log(`Привіт, мене звуть ${this.name}`);
  }
};
person.sayHello(); // Привіт, мене звуть Олена

// 8. Каррінг
function add(a) {
  return function(b) {
    return a + b;
  };
}
const addTen = add(10);
console.log("Каррінг (10 + 5):", addTen(5)); // 15

// 9. Комплексне завдання — анкета
function createSurvey() {
  const name = prompt("Введіть ваше ім’я:");
  const ageInput = prompt("Введіть ваш вік:");
  const city = prompt("Введіть місто проживання:");

  const age = Number(ageInput);
  const isAdult = age >= 18;

  return {
    name,
    age,
    city,
    isAdult
  };
}

function displaySurvey(surveyData) {
  const message = `Анкета користувача:
Ім’я: ${surveyData.name}
Вік: ${surveyData.age}
Місто: ${surveyData.city}
Повнолітній(я): ${surveyData.isAdult ? "Так" : "Ні"}`;

  console.log(message);
  alert(message);
}

const survey = createSurvey();
displaySurvey(survey);

// 10. Конвертер температур з каррінгом та замиканням
function createConverter(multiplier, offset) {
  return function(value) {
    return value * multiplier + offset;
  };
}

const cToF = createConverter(9/5, 32);   // (°C × 9/5) + 32
const fToC = createConverter(5/9, -160/9); // (°F - 32) × 5/9

const tempInput = Number(prompt("Введіть температуру:"));
const direction = prompt("Введіть напрямок (C to F або F to C):").trim();

let result;
if (direction === "C to F") {
  result = cToF(tempInput);
  alert(`${tempInput}°C = ${result.toFixed(2)}°F`);
  console.log(`${tempInput}°C = ${result.toFixed(2)}°F`);
} else if (direction === "F to C") {
  result = fToC(tempInput);
  alert(`${tempInput}°F = ${result.toFixed(2)}°C`);
  console.log(`${tempInput}°F = ${result.toFixed(2)}°C`);
} else {
  alert("Неправильний напрямок конвертації!");
}

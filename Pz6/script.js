"use strict";
import { greet, add, multiply } from "./utils.js";
import { user } from "./data.js";

const appDiv = document.getElementById("app");

function append(text) {
  const p = document.createElement("p");
  p.textContent = text;
  appDiv.appendChild(p);
}

console.log("Модульний код підключено!");
append("✅ Модульний код підключено!");

// Виклик функцій із модуля
greet(user.name);
append(`Привіт, ${user.name}!`);

const sum = add(10, 5);
const product = multiply(10, 5);
append(`10 + 5 = ${sum}`);
append(`10 * 5 = ${product}`);

// Шаблонні рядки та деструктуризація
const { name, age, city } = user;
const info = `Користувач: ${name}, Вік: ${age}, Місто: ${city}`;
console.log(info);
append(info);

// Spread оператор
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Об'єднаний масив:", combined);
append("Об'єднаний масив: " + combined.join(", "));

// Rest оператор
function sumAll(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}
const total = sumAll(1, 2, 3, 4, 5);
append(`Сума всіх чисел: ${total}`);

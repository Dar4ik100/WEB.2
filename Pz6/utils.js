"use strict";

// Функція оголошення
export function greet(name) {
  console.log(`Привіт, ${name}!`);
}

// Функціональний вираз
export const add = function(a, b) {
  return a + b;
};

// Стрілочна функція
export const multiply = (a, b) => a * b;

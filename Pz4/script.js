"use strict";

console.log("Підключено JavaScript для Практичної роботи №4");

// Завдання 2: Вибір елементів
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.querySelector("#addTask");
const taskList = document.getElementById("taskList");

console.log("Елементи:", taskInput, addTaskButton, taskList);

// Завдання 3: Обробка подій
addTaskButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    console.log("✅ Додано завдання:", taskText);
    taskInput.value = "";
  } else {
    alert("❗ Введіть текст завдання.");
  }
});

// Завдання 3.3: Фаза захоплення (опціонально, для демонстрації)
taskList.addEventListener(
  "click",
  function (event) {
    console.log("📌 Захоплення (capture):", event.target);
  },
  true
);

// Завдання 4: Делегування подій для видалення завдання
taskList.addEventListener("click", function (event) {
  if (event.target.nodeName === "LI") {
    const confirmDelete = confirm("Видалити це завдання?");
    if (confirmDelete) {
      taskList.removeChild(event.target);
      console.log("🗑️ Завдання видалено:", event.target.textContent);
    }
  }
});

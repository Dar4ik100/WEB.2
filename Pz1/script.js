"use strict";

let userName = prompt("Ваше ім'я?");
let userAge = Number(prompt("Ваш вік?"));
let userCity = prompt("Ваше місто?");
let favoriteColor = prompt("Ваш улюблений колір?");
let isWorking = confirm("Ви зараз працюєте?");

let isAdult = userAge >= 18;

console.log("Тип імені:", typeof userName);
console.log("Тип віку:", typeof userAge);
console.log("Тип міста:", typeof userCity);
console.log("Тип кольору:", typeof favoriteColor);
console.log("Тип статусу праці:", typeof isWorking);

let summary = `
👤 Ім'я: ${userName}
🎂 Вік: ${userAge} (${isAdult ? "повнолітній" : "неповнолітній"})
🏙️ Місто: ${userCity}
🎨 Колір: ${favoriteColor}
💼 Працює: ${isWorking ? "так" : "ні"}
`;

alert(summary);
console.log(summary);
document.getElementById("result").textContent = summary;

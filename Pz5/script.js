"use strict";
console.log("Підключено JavaScript для Практичної №5");

const loadPokemonBtn = document.getElementById("loadPokemon");
const pokemonCard = document.getElementById("pokemonCard");
const pokemonImage = document.getElementById("pokemonImage");
const pokemonInfo = document.getElementById("pokemonInfo");

function createInfoRow(label, value) {
  const row = document.createElement("div");
  row.className = "info-row";

  const labelElem = document.createElement("span");
  labelElem.className = "info-label";
  labelElem.textContent = label + ":";

  const valueElem = document.createElement("span");
  valueElem.className = "info-value";
  valueElem.textContent = value;

  row.appendChild(labelElem);
  row.appendChild(valueElem);
  return row;
}

async function loadPokemon() {
  const input = prompt("Введіть ім'я або ID покемона:");
  if (!input) return;

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase().trim()}`);
    if (!response.ok) throw new Error("Покемона не знайдено");

    const data = await response.json();

    // Очищаємо попередню інформацію
    pokemonInfo.innerHTML = "";

    // Додаємо фото
    pokemonImage.src = data.sprites.front_default || "";
    pokemonImage.alt = data.name;

    // Створюємо і додаємо інформаційні рядки
    pokemonInfo.appendChild(createInfoRow("Ім'я", data.name));
    pokemonInfo.appendChild(createInfoRow("ID", data.id));
    pokemonInfo.appendChild(createInfoRow("Вага", data.weight));
    pokemonInfo.appendChild(createInfoRow("Зріст", data.height));

    // Типи - виводимо через коми
    const types = data.types.map(t => t.type.name).join(", ");
    pokemonInfo.appendChild(createInfoRow("Типи", types));

    // Здібності
    const abilities = data.abilities.map(a => a.ability.name).join(", ");
    pokemonInfo.appendChild(createInfoRow("Здібності", abilities));

    pokemonCard.classList.remove("hidden");
  } catch (error) {
    console.error("Помилка при завантаженні покемона:", error);
    pokemonInfo.innerHTML = `<div style="color:red; font-weight:bold;">Покемона не знайдено або помилка завантаження.</div>`;
    pokemonImage.src = "";
    pokemonCard.classList.remove("hidden");
  }
}

loadPokemonBtn.addEventListener("click", loadPokemon);

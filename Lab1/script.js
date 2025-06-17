"use strict";

// ===== Класи для розділів резюме =====
class PersonalInfo {
  constructor(name, age, contact) {
    this.name = name;
    this.age = Number(age);
    this.contact = contact;
  }

  edit() {
    this.name = prompt("Введіть ім’я:", this.name);
    this.age = parseInt(prompt("Введіть вік:", this.age));
    this.contact = prompt("Введіть контактну інформацію:", this.contact);
  }

  display() {
    return `
      <h2>Особиста інформація</h2>
      <p><strong>Ім’я:</strong> ${this.name}</p>
      <p><strong>Вік:</strong> ${this.age}</p>
      <p><strong>Контакти:</strong> ${this.contact}</p>
    `;
  }
}

class Education {
  constructor(school, degree, year) {
    this.school = school;
    this.degree = degree;
    this.year = year;
  }

  edit() {
    this.school = prompt("Навчальний заклад:", this.school);
    this.degree = prompt("Спеціальність:", this.degree);
    this.year = prompt("Рік завершення:", this.year);
  }

  display() {
    return `
      <h2>Освіта</h2>
      <p>${this.school}, ${this.degree} (${this.year})</p>
    `;
  }
}

class Experience {
  constructor(position, company, years) {
    this.position = position;
    this.company = company;
    this.years = years;
  }

  edit() {
    this.position = prompt("Посада:", this.position);
    this.company = prompt("Компанія:", this.company);
    this.years = prompt("Роки досвіду:", this.years);
  }

  display() {
    return `
      <h2>Досвід роботи</h2>
      <p>${this.position} в ${this.company} (${this.years} років)</p>
    `;
  }
}

class Skills {
  constructor(skills) {
    this.skills = skills;
  }

  edit() {
    const input = prompt("Введіть навички через кому:", this.skills.join(", "));
    this.skills = input.split(",").map(skill => skill.trim());
  }

  display() {
    return `
      <h2>Навички</h2>
      <ul>${this.skills.map(skill => `<li>${skill}</li>`).join("")}</ul>
    `;
  }
}

class Resume {
  constructor(personal, education, experience, skills) {
    this.personal = personal;
    this.education = education;
    this.experience = experience;
    this.skills = skills;
  }

  display() {
    return `
      ${this.personal.display()}
      ${this.education.display()}
      ${this.experience.display()}
      ${this.skills.display()}
    `;
  }

  edit() {
    this.personal.edit();
    this.education.edit();
    this.experience.edit();
    this.skills.edit();
  }
}

// ===== Логіка створення та збереження =====
let resume = null;

function createResume() {
  const name = prompt("Введіть ім’я:");
  const age = parseInt(prompt("Введіть вік:"));
  const contact = prompt("Введіть контактну інформацію:");

  const school = prompt("Навчальний заклад:");
  const degree = prompt("Спеціальність:");
  const year = prompt("Рік завершення:");

  const position = prompt("Посада:");
  const company = prompt("Компанія:");
  const years = prompt("Скільки років досвіду?");

  const skillsInput = prompt("Навички через кому:");
  const skillsList = skillsInput.split(",").map(s => s.trim());

  const personal = new PersonalInfo(name, age, contact);
  const education = new Education(school, degree, year);
  const experience = new Experience(position, company, years);
  const skills = new Skills(skillsList);

  resume = new Resume(personal, education, experience, skills);

  localStorage.setItem("resume", JSON.stringify(resume));
  renderResume();
}

function renderResume() {
  if (!resume) {
    const stored = localStorage.getItem("resume");
    if (stored) resume = restoreResume(JSON.parse(stored));
    else return;
  }

  const display = document.getElementById("resume-display");
  display.innerHTML = resume.display();
}

function restoreResume(data) {
  return new Resume(
    new PersonalInfo(data.personal.name, data.personal.age, data.personal.contact),
    new Education(data.education.school, data.education.degree, data.education.year),
    new Experience(data.experience.position, data.experience.company, data.experience.years),
    new Skills(data.skills.skills)
  );
}

function editResume() {
  if (!resume) {
    alert("Спочатку створіть резюме.");
    return;
  }
  resume.edit();
  localStorage.setItem("resume", JSON.stringify(resume));
  renderResume();
}

function clearStorage() {
  localStorage.removeItem("resume");
  resume = null;
  document.getElementById("resume-display").innerHTML = "";
}

// ===== Події =====
document.getElementById("create-resume").addEventListener("click", createResume);
document.getElementById("edit-resume").addEventListener("click", editResume);
document.getElementById("clear-storage").addEventListener("click", clearStorage);

window.onload = renderResume;

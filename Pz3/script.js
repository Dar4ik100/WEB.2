"use strict";

console.log("Підключено JavaScript для Практичної роботи №3");

// 2.1 Об'єктний літерал
const car = {
  brand: "Toyota",
  year: 2020,
  displayInfo() {
    console.log(`🚗 Автомобіль: ${this.brand}, Рік: ${this.year}`);
  }
};
car.displayInfo();

// 2.2 Метод з this
const person = {
  name: "Іван",
  sayHello() {
    console.log(`👋 Привіт, мене звуть ${this.name}`);
  }
};
person.sayHello();

// 3.1 Функція-конструктор
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function () {
  console.log(`🙋‍♀️ Привіт, я ${this.name} і мені ${this.age} років.`);
};
const person1 = new Person("Олена", 28);
person1.greet();

// 3.2 ES6 клас + наслідування
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  displayInfo() {
    console.log(`🎓 Студент: ${this.name}, Вік: ${this.age}, Оцінка: ${this.grade}`);
  }
}
const student1 = new Student("Андрій", 22, "A");
student1.greet();
student1.displayInfo();

// 3.3 Інкапсуляція через геттери та сеттери
class User {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName) this._name = newName;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (newAge > 0) this._age = newAge;
  }

  display() {
    console.log(`👩‍💼 Користувач: ${this._name}, Вік: ${this._age}`);
  }
}

const user1 = new User("Марія", 30);
user1.display();
user1.name = "Оксана";
user1.age = 32;
user1.display();

// 4.1 Комплексне завдання: Бібліотека користувачів
class LibraryUser {
  constructor(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }

  display() {
    console.log(`📚 Користувач: ${this.name}, Вік: ${this.age}, Професія: ${this.profession}`);
    alert(`Користувач: ${this.name}\nВік: ${this.age}\nПрофесія: ${this.profession}`);
  }
}

class Admin extends LibraryUser {
  constructor(name, age, profession, role) {
    super(name, age, profession);
    this.role = role;
  }

  display() {
    console.log(`🛡️ Адмін: ${this.name}, Вік: ${this.age}, Професія: ${this.profession}, Роль: ${this.role}`);
    alert(`Адмін: ${this.name}\nВік: ${this.age}\nПрофесія: ${this.profession}\nРоль: ${this.role}`);
  }
}

// Ввід користувача
let name = prompt("Введіть ім’я:");
let age = Number(prompt("Введіть вік:"));
while (isNaN(age) || age <= 0) {
  age = Number(prompt("Введіть коректний вік (число більше 0):"));
}
let profession = prompt("Ваша професія?");
let isAdmin = confirm("Це адмін?");

let user;
if (isAdmin) {
  let role = prompt("Введіть роль (наприклад, 'SuperAdmin'):");
  user = new Admin(name, age, profession, role);
} else {
  user = new LibraryUser(name, age, profession);
}
user.display();

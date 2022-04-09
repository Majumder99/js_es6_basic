class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("Walk");
  }
}
// const person = new Person("Sourav");
// person.walk();
// Inheritance
class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("Teach");
  }
}

const teacher = new Teacher("Sourav", "Msc");
teacher.teach();
teacher.walk();

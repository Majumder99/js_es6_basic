// // let x = 2;
// // x = 43;
// // console.log(x);
// const person = {
//   name: "Sourav",
//   walk: function () {
//     console.log(this);
//   },
// };
// // It will return the object itself.
// person.walk();

// // If we use bind method it will create a instance of person and point this kwyword to the walk function
// // Value of the walk function is the value of person
// const walk = person.walk.bind(person);
// walk();
// Arrow function
// const square = (number) => {
//   return number * number;
// };
// const sqr = (number) => number * number;

// console.log(sqr(5));
// const jobs = [
//   { id: 1, isActive: true },
//   { id: 2, isActive: true },
//   { id: 3, isActive: false },
// ];
// // const activeJobs = jobs.filter((job) => {
// //   return job.isActive;
// // });

// const activeJobs = jobs.filter((job) => job.isActive);

// console.log(activeJobs);

// Arrow function and this
// Arrow functio don't rebind this
// const person = {
//   talk() {
//     // var self = this;
//     // setTimeout(function () {
//     //   console.log("self", self);
//     // }, 1000);
//     // Arrow function inherited the this keyword. That's why it returns the reference of the object
//     setTimeout(() => console.log("this", this), 1000);
//   },
// };
// person.talk();
const colors = ["red", "green", "blue"];
const item = colors.map((color) => `<li>${color}</li>`);
console.log(item);

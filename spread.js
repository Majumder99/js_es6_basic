// const first = [1, 2, 3];
// const second = [4, 5, 6];
// // const combined = first.concat(second);
// We have used [] because it is an array
// // const combined = [...first, ...second];
// const clone = [...first];
// console.log(first);
// console.log(clone);
const first = { name: "Sourav" };
const second = { job: "student" };
// We will use {} because it is an object
const combined = { ...first, ...second, location: "Bangladesh" };
console.log(combined);

// []
const animals = ["cat", "horse", "dog", "goat", "snake", "horse"];

// index notations; 0;

// console.log("animals[0]", animals[0]);
// console.log("animals[3]", animals[3]);

// method;
// at, push, pop, includes, unshift, slice, splice, findIndex, fill, indexof, forEach, map, filter, sort;

// let result = animals.at(1);
// let result = animals.at(-2);

// mutatable methods are methods that changes the original state of the array;
// let result = animals.push("fish");
// let result = animals.push("fish", "elephant");
// let result = animals.pop();
// let result = animals.unshift("elephant");
// let result = animals.shift();
// let result = animals.splice(1, 3);
// let result = animals.splice(0, 2, "elephant", "lion", "bull");
// let result = animals.fill("ebuka");
// let result = animals.fill("ebuka", 1, 3);
// let result = animals.sort();
let result = animals.sort(function (a, b) {
  return b.localeCompare(a);
});
// immutable methods are methods that does not changes the original state of the array
// let result = animals.includes("cat");
// let result = animals.includes("elephant");
// let result = animals.includes("dog", 2);
// let result = animals.slice(1, 3);

// let result = animals.indexOf("cat");
// let result = animals.indexOf("dog");

// let result = animals.findIndex(function (value, index, arr) {
//   //   console.log("value", value);
//   //   console.log("index", index);
//   //   console.log("arr", arr);
//   return value == "dog";
// });

// animals.forEach(function (val, index, arr) {
//   console.log("val", val);
// });

// let result = animals.map(function (value, idx) {
//   //   console.log("idx", idx);
//   //   console.log("value", value);
//   let split = value.split("").reverse().join("");
//   return split;
// });

// let result = animals.filter(function (value) {
//   return value === "dog";
// });
// let result = animals.filter(function (value) {
//   return value === "horse";
// });
// let result = animals.filter(function (value, idx, arr) {
//   return arr.indexOf(value) === idx;
// });

console.log("result", result);
console.log("animals", animals);

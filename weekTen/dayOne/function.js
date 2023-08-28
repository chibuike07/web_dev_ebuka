// function expression;

function cal() {
  //   console.log("2+3", 2 + 3);
  return 2 + 3;
}

// cal();
console.log("ca", cal());

function addition(num1, num2) {
  return num1 + num2;
}

console.log("name(2,3)", addition(2, 3));
console.log("name(2,3)", addition(5, 10));

// function declaration;
const mutiply = function (num1, num2) {
  return num1 * num2;
};

console.log("mutiply(3, 7)", mutiply(3, 7));
console.log("mutiply(3, 7)", mutiply(2, 3));

// arrow function;

// const divide = (num1, num2) => {
//   return num1 / num2; //explictly
// };
const divide = (num1, num2) => num1 / num2; //implicit return

console.log("divide(10, 2)", divide(10, 2));

const multiply = () => {
  console.log("i am here");
  const result = document.querySelector("#result");
  const input1 = document.querySelector("#input1");
  const input2 = document.querySelector("#input2");
  console.log("input1", input1.value);
  console.log("input2", input2.value);
  result.textContent = +input1.value * +input2.value;
};

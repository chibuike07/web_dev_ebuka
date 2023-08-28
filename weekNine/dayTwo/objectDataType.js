//
let userObject = { name: "ebuka", isFair: true, height: 1.7 };
let animal = { name: "cat", legs: 4, color: "white" };
// index notation and dot notation

console.log("userObject :>> ", userObject.name);
console.log("userObject.isFair :>> ", userObject.isFair);

// index notation

console.log("userObject :>> ", userObject["name"]);

console.log('userObject["height"]', userObject["height"]);

// get keys of an object
const keysOfUserProperties = Object.keys(userObject);
console.log("keysOfUserProperties", keysOfUserProperties);

// get values of an object

const valuesOfUserProperties = Object.values(userObject);

console.log("valuesOfUserProperties", valuesOfUserProperties);

// convert object properties to arrays

const convertToArray = Object.entries(userObject);

console.log("convertT", convertToArray);

// object destructuring;
// const { name } = userObject;

// rest ...
const { name, isFair, ...otherUserProps } = userObject;
console.log("name", name);
console.log("other", otherUserProps);

// merge objects;
// spread ...
const combinedObject = { ...userObject, ...animal };
console.log("combinedObject", combinedObject);

const combined = Object.assign({}, userObject, animal);
console.log("combined", combined);

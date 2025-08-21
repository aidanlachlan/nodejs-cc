// commonjs syntax
// const {generateRandomNumber, celciusToFahrenheit} = require('./utils');


// console.log(`Random Number: ${generateRandomNumber()}`);
// console.log(`Celsius to Fahrenheit: ${celciusToFahrenheit(25)}`);



// type = 'module' syntax
// import { getPosts } from "./postController.js";
import getPosts, {getPostsLength} from "./postController.js";

console.log(getPosts());
console.log(`Posts Length: ${getPostsLength()}`);
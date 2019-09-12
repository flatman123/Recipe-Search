// below are named exports
//export const func1 = (a,b) => console.log(`The sum is ${a + b}.`);
//export const func2 = (z,y) => console.log(`The answer is ${z * y}`);
import { elements } from "./base.js";

export const getInput = () => elements.searchInput.value;

const renderRecipe = () => {
	
}

export const renderResults = recipes => {
	recipes.forEach(renderRecipe)
}
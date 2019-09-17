// below are named exports
//export const func1 = (a,b) => console.log(`The sum is ${a + b}.`);
//export const func2 = (z,y) => console.log(`The answer is ${z * y}`);
import { elements } from "./base.js";

export const getInput = () => elements.searchInput.value;
export const clearInput = () => {
	elements.searchInput.value = '';
};

export const clearRecipeResults = () => {
	elements.searchResList.innerHTML = '';
};

const renderRecipe = recipe => {
	const markup = `
     <li>
        <a class="results__link results__link--active" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
	`;
	elements.searchResList.insertAdjacentHTML('beforeend',markup);
};

export const renderResults = r => {
	r.forEach(renderRecipe);
};
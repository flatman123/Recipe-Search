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

const limitRecipeTitle = (title, limit = 17) => {
	const newTitle = [];

	if (title.length > limit) {
		title.split(' ').reduce((acc, cur) => {
			if (acc + cur.length <= limit) {
				newTitle.push(cur);
			}
			return acc + cur.length;
		}, 0);

		return `${newTitle.join(' ')}...`;
	}

	return title;
}

const createButton = (page, type) => {

};

const renderButtons = (page, numResults, resPerPage) =>{
	const pages = Math.ceil(numResults / resPerPage);

	if(page === 1 && pages > 1){
		// Button should go to next page
	} else if(page < pages){
		//Both button

	} else if (page === pages && pages > 1){

	}


};

const renderRecipe = recipe => {
	const markup = `
     <li>
        <a class="results__link results__link--active" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
	`;
	elements.searchResList.insertAdjacentHTML('beforeend',markup);
};

export const renderResults = (recipes, page = 1,  resultsPerPage = 10) => {
	const start = (page - 1) * resultsPerPage;
	const end = 10;
	recipes.slice(start, end).forEach(renderRecipe);
};
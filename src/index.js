import Search from "./models/Search.js";
import * as searchView from "./view/searchView.js";
import { elements, renderLoader, removeLoader } from "./view/base.js";


/**Global state of the app
* - Search Object
* - Current recipe object
* - shoppingList object
* - Like recipes
*/

const state = {};

const controlSearch = async () => {
	// 1 .Get query from View.
	const query = searchView.getInput(); //this is a place holder ..this will be in the "View"

	//2 create new search object.
	if (query) {
		state.search = new Search(query);
	}
	//3 prepare user interface for what is about to happen(i.e clear previous results, and show 'loading' spinner).

	// Clear Recipe Results;
		// Clear input field
	searchView.clearInput();
	searchView.clearRecipeResults();

	//show loading icon
	renderLoader(elements.searchRes);

	//4. search for recipes.
	await state.search.getResults();
	removeLoader(elements.searchRes);

	//5. Render results to View
	console.log(state.search.recipes);
	
	searchView.renderResults(state.search.recipes); 

}

elements.searchForm.addEventListener('submit', event => {
	event.preventDefault();
	controlSearch();
})





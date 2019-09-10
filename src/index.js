import Search from "./models/Search.js";

/**Global state of the app
* - Search Object
* - Current recipe object
* - shoppingList object
* - Like recipes
*/

const state = {};

const controlSearch = async () => {
	// 1 .Get query from View.
	const query = 'Beef' //this is a place holder ..this will be in the "View"

	//2 create new search object.
	if (query) {
		state.search = new Search(query);
	}

	//3 prepare user interface for what is about to happen(i.e clear previous results, and show 'loading' spinner).


	//4. search for recipes.
	await state.search.getResults();

	//5. log the results ( show recipes (render results to View))
	console.log(state.search.recipes)

}

document.querySelector('.search').addEventListener('click', event => {
	event.preventDefault();
	controlSearch();

})



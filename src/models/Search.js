//export default "Jeffrey is now working with ES6";
		// we will be using axios instead of fetch because fetch is not supported in older browsers.
		//we don't have to convert axios into json like fetch ( another benefit)

		// after putting in the URL, go check the API to see how you're supposed to use it.
		//(i.e)
		//	key: API Key
		//	q: (optional) Search Query (Ingredients should be separated by commas). If this is omitted top rated recipes will be returned.
		//	sort: (optional) How the results should be sorted. See Below for details.
		//	page: (optional) Used to get additional results

import axios from 'axios';  //no need to put the location of the file

export default class Search {
	constructor(query) {
		this.query = query;
	}

	async getResults(query){
		const apiKey = '50b123c3dd9c12abc555a72f9add1c5e';
		const crossProxy = 'https://bypasscors.herokuapp.com/api/?url=';

		try {			
			const res = await axios(`${crossProxy}https://www.food2fork.com/api/search?key=${apiKey}&q=${this.query}`); //as per the instuctions the 'key' is required
			this.recipes = res.data.recipes;
			//console.log(`${this.recipes[11].title} and the URL is:${this.recipes[11].source_url}` );
		} catch (error) {
			alert(error);
		}
	}
}
console.log('Application started...')


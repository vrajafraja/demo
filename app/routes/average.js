import Ember from 'ember';
import RSVP from 'rsvp';
const Promise = RSVP.Promise;

/**  
* returns total amount of loans on marketplace for given rating
*/
async function getTotalLoansForRating(rating){
	const getTotalLoansPromise = new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();
		let url = 'https://api.zonky.cz/loans/marketplace?fields=amount&rating__eq=' + rating;
		request.open('GET', url);
		request.setRequestHeader("X-Size", 1);
		request.onload = () => resolve(request);
		request.onerror = () => reject(request.statusText)
		request.send();  
	});

	let totalLoansForRating = await getTotalLoansPromise;
	let totalLoans = totalLoansForRating.getResponseHeader("X-Total");
	return totalLoans;
}

/**
* returns JSON with loan objects on. Total amount of loans is determined by size parameter
* e.g. [{"amount":120000.00,"published":true},{"amount":200000.00,"published":true} ... {"amount":85000.00,"published":true}]
*/
function getLoansPageWithRating(rating, size){
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();
		let url = 'https://api.zonky.cz/loans/marketplace?fields=amount&rating__eq=' + rating;
		request.open('GET', url);
		request.setRequestHeader("X-Size", size);
		request.onload = () => resolve(JSON.parse(request.responseText));
		request.onerror = () => reject(request.statusText)
		request.send();  
	});
}

/**
* returns JSON with all loan objects marketplace.
*/
async function getLoansForSpecifiedRating(rating){
		let totalLoans = getTotalLoansForRating(rating);
		let loans = await getLoansPageWithRating(rating, totalLoans);
		return loans;
	}

/**
* returns average loans amount rounded by decimals parameter
*/
function countAverage(loans, decimals){
		let totalAmount = 0;
		if (loans){
			loans.forEach(function (loan){
				totalAmount += loan.amount;
			});	
		}

		let average = Number(totalAmount / loans.length);
		return average.toFixed(decimals);
}

/**
* for given rating, sets average loan amount as the average parameter in controller 
*/
async function setAverage(rating, controller){
	if (rating != null){
		let loans = await getLoansForSpecifiedRating(rating);
		let average = Number(countAverage(loans, 0)).toLocaleString();
		controller.set('average', average);
	}
}

export default Ember.Route.extend({
	queryParams: {
		rating: { refreshModel : true }
	},
	actions: {
		queryParamsDidChange: function(changed, all, removed) {
			if ('rating' in changed) {
				this.refresh();
			}
			else if('rating' in removed){
				this.controllerFor('average').set('average', null);
			}
		}
	},
	beforeModel: function(transition){
		let controller = this.controllerFor('average');
		let rating = transition.queryParams.rating;
		setAverage(rating, controller);
	},
	model(){
		return RSVP.hash({
			ratings: [{"display-name" : "A**", "url-param" : "AAAAA"},
						{"display-name" : "A*", "url-param" : "AAAA"},
						{"display-name" : "A++", "url-param" : "AAA"},
						{"display-name" : "A+", "url-param" : "AA"},
						{"display-name" : "A", "url-param" : "A"},
						{"display-name" : "B", "url-param" : "B"},
						{"display-name" : "C", "url-param" : "C"},
						{"display-name" : "D", "url-param" : "D"}],
		});
	}
});

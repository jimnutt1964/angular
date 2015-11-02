(function(){
	var app = angular.module('store', ['store-products']);

	app.controller('StoreController', function(){
		this.products = gems;
	});
	
	app.controller("ReviewController", function(){
		this.review={};
		
		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review={};
		};
	});

})();
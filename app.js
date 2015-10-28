(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});
	
	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;	
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;	
		};
	});
	app.controller("ReviewController", function(){
		this.review={};
		
		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review={};
		};
	});
	
	var gems = [ 
	{
		name: 'Dodecahedron',
		price: 2,
		description: 'This is the Dodecahedron',
		canPurchase: true,
		soldOut:true,
		review:'this is a cool gem',
		images: [
			{
				full: 'img/dodecahedron-01-full.jpg',
				thumb: 'img/dodecahedron-01-thumb.png'
			}
		],
		reviews: [
			{
				stars:5,
				body:"I love this product!",
				author: "joe@thomas.com"
			},
			{
				stars:1,
				body:"this product sucks",
				author: "jane@thomas.com"
			}
		],
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: 'This is the Pentagonal Gem',
		canPurchase: false,
		soldOut:true,
	}

	];
})();
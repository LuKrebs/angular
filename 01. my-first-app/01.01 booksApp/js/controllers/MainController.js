app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Awesome books, for you'; 
  $scope.promo = 'Click here!'; 
  $scope.products = [
    { 
      name: 'The Book of Trees', 
      price: 19, 
      pubdate: new Date('2014', '03', '08'), 
      cover: 'img/the-book-of-trees.jpg',
      likes: 0,
      dislikes: 0
  	}, 
  	{ 
      name: 'Program or be Programmed', 
      price: 8, 
      pubdate: new Date('2013', '08', '01'), 
      cover: 'img/program-or-be-programmed.jpg',
      likes: 0,
      dislikes: 0
  	},
  	{
      name: "Zero to one",
      price: 14,
      pubdate: new Date('2013', '08', '01'), 
      cover: 'https://images-na.ssl-images-amazon.com/images/I/41puRJbtwkL._SX331_BO1,204,203,200_.jpg',
      likes: 0,
      dislikes: 0
  	},
  	{
      name: "Click",
      price: 7,
      pubdate: new Date('2014', '03', '08'), 
      cover: 'http://images.gr-assets.com/books/1440355196l/3288064.jpg',
      likes: 0,
      dislikes: 0
  	}
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
	$scope.minusOne = function(index) {
		$scope.products[index].dislikes += 1;
	};
}]);
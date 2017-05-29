app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: "Bruschetta",
      description: "Grilled bread garlic, tomatoes, olive oil",
      price: 4.95
    }
  ];
  $scope.mains = [
    {
      name: 'Bacon',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Special',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: "The Best",
      description: "Grilled bread garlic, tomatoes, olive oil",
      price: 4.95
    }
  ];
  
  $scope.extras = [
    {
      name: "BREADSTICKS",
      description: "Served with marinara sauce.",
      price: 4.90
    },
    {
      name: "SOUP OF THE DAY",
      description: "Take a chance.",
      price: 4.90
    },
    {
      name: "BUFFALO WINGS",
      description: "Feel the power of wings.",
      price: 4.90
    }
  ];
}]);


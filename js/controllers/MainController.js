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
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];

  $scope.mains = [
    {
      name: 'Rigattoni ala Vodka',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 8.95
    },
    {
      name: 'Spaggetti with Meat Sauce',
      description: 'Served with marinara meat sauce.',
      price: 9.95
    },
    {
      name: 'Fettucinni Alfredo',
      description: 'Alfredo Sauce, Parmessan Cheese, olive oil.',
      price: 7.95
    }
  ];

  $scope.extras = [
    {
      name: 'Bread Sticks',
      description: 'Served with marinara meat sauce.',
      price: 4.95
    },
    {
      name: 'Soup of the Day',
      description: 'Take a chance.',
      price: 4.95
    },
    {
      name: 'Buffalo Wings',
      description: 'Feel the power of wings.',
      price: 6.95
    }
  ];

}]);
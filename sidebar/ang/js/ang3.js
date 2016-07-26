var app3=angular.module('app3',[]);
app3.controller('gListCtrl',function ($scope) {
  $scope.groceries=[

      {item:"tomatoes",purchased:false},
      {item:"Potatoes",purchased:true},
      {item:"Carrot",purchased:true},
      {item:"Mango",purchased:false},

  ];

  $scope.getList=function () {
    return $scope.showList?"ulgroceryList.html":"groceryList.html";
  };
})

app.controller("visitchartCtrl", function($scope, $http, $location, appService) {

  $scope.chartObject = {};
  
      $scope.onions = [
          {v: "Onions"},
          {v: 3},
      ];
  
      $scope.chartObject.data = {"cols": [
          {id: "t", label: "Topping", type: "string"},
          {id: "s", label: "Slices", type: "number"}
      ], "rows": [
          {c: [
              {v: "Mushrooms"},
              {v: 3},
          ]},
          {c: $scope.onions},
          {c: [
              {v: "Olives"},
              {v: 31}
          ]},
          {c: [
              {v: "Zucchini"},
              {v: 1},
          ]},
          {c: [
              {v: "Pepperoni"},
              {v: 2},
          ]}
      ]};

})
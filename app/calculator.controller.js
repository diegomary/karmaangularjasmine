angular.module('calculatorApp', []).controller('CalculatorController', function CalculatorController($scope) {
  $scope.sum = function() {
    $scope.z = $scope.x + $scope.y;
  };


  this.test=1000;
  this.test1=2000;
  this.test2=3000;


  this.doWork = function() {

    return true;
  }


});

(function(){
  'use strict';
  var list1 = ["Milk","Donuts","Chocolate","Bismol","Bismol(pancake)",
"Bismol(chocolate)","Bismol(milk)"];
  angular.module('webapp',[])
  .controller('webappcontroller',webappcontroller);

webappcontroller.$inject = ['$scope'];
function webappcontroller($scope){
  $scope.list1 = list1;
}
})();

(function(){
'use strict';
  angular.module('lunchApp', [])
    .controller('mainCtrl', ['$scope', mainCtrl]);

    mainCtrl.$inject = ['$scope'];
     function mainCtrl($scope) {
       $scope.itemArray = [];
       $scope.message = '';
       $scope.check = function(input) {
         if(!input) {
           $scope.message = 'Please enter data first';
         } else {
           $scope.itemArray = input.split(',');
           if ($scope.itemArray.length <= 3 ) {
            $scope.message = "Enjoy!";
           } else if ($scope.itemArray.length > 3) {
              $scope.message = "Too Much!";
            } 
          }
        }
      }
})();
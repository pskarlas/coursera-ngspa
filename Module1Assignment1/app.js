(function(){
'use strict';
  angular.module('lunchApp', [])
    .controller('mainCtrl', ['$scope', mainCtrl]);

    mainCtrl.$inject = ['$scope'];
     function mainCtrl($scope) {
       $scope.message = '';
       $scope.check = function(input) {
         if(!input) {
           $scope.message = 'Please enter data first';
           $scope.empty = true;
           $scope.answered = false;
         } else {
           var tempArray = input.split(',');
           //  do NOT consider and empty item
           $scope.correctArr = correctArray(tempArray);
          
           if ($scope.correctArr.length <= 3 ) {
            $scope.message = "Enjoy!";
            $scope.empty = false;
            $scope.answered = true;
            console.log($scope.correctArr);

           } else if ($scope.correctArr.length > 3) {
              $scope.message = "Too Much!";
              $scope.empty = false;
              $scope.answered = true;
              console.log($scope.correctArr);
            } 
          }
        }
        // do NOT consider and empty item
        function correctArray(arr) {
          var temp =[];	
	        for (let i=0; i<arr.length; i++){
		        if (arr[i].trim().length != 0) {
        	    temp.push(arr[i]);
		        }
          }
	        return arr = temp;
        }
      }
})();


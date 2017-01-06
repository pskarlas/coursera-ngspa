'use strict';
(function() {
  angular.module('ShoppingListCheckOff')
    .controller('alreadyBoughtCtrl',alreadyBoughtCtrl);
   
    alreadyBoughtCtrl.$inject=['ShoppingListCheckOffService'];

    function alreadyBoughtCtrl(ShoppingListCheckOffService) {
      var boughtList = this;
      boughtList.items = ShoppingListCheckOffService.boughtItems();
      
    };
})();
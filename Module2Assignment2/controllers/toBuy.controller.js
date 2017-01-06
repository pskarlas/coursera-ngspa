'use strict';
(function() {
  angular.module('ShoppingListCheckOff')
    .controller('toBuyCtrl', tobuyCtrl);
    
    tobuyCtrl.$inject = ['ShoppingListCheckOffService'];
    
    function tobuyCtrl(ShoppingListCheckOffService) {
      
      var buyList = this;
      
      buyList.items = ShoppingListCheckOffService.getItems();
      
      buyList.buyItem = function(index) {
        ShoppingListCheckOffService.buyItem(index);
      }
    }

})();
'use strict';
(function(){
  angular.module('ShoppingListCheckOff')
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  function ShoppingListCheckOffService() {
    var service = this;

    //List of Shopping items to buy
    var toBuyItems = 
      [
        {name: 'Biscuits', quantity: 10},
        {name: 'Coffee', quantity: 2},
        {name: 'Sugar', quantity: 2},
        {name: 'Chocolate', quantity: 3},
        {name: 'Wine', quantity: 1},
        {name: 'Beer', quantity: 10},
        {name: 'Batteries', quantity: 6},
        {name: 'Cotton', quantity: 10},
      ];
    var boughtItems = [];

    service.getItems = function() {
      return toBuyItems;
    }
    service.boughtItems = function() {
      return boughtItems;
      
    };
    service.buyItem = function(index) {
      boughtItems.push(toBuyItems[index]);
      toBuyItems.splice(index, 1);
      
    };
  }

})();

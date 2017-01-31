(function(){
  'use strict';
  angular.module('menuApp')
  .controller('DishListController', DishListController);

  DishListController.$inject = ['dishes'];
  function DishListController(dishes) {
    var list = this;
    list.category = dishes.data.category.name;
    list.items = dishes.data.menu_items;
  }

})();
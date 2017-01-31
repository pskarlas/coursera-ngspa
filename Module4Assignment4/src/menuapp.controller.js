(function(){
  'use strict';

  angular.module('menuApp')
    .controller('MenuAppController', MenuAppController);

   MenuAppController.$inject = ['categories'];
   function MenuAppController(categories){
     var main = this;
     main.categories = categories.data;
     console.log(categories.data);
   }
})();
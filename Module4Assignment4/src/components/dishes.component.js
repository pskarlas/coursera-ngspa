(function(){
  'use strict';
  angular.module('menuApp')
    .component('dishes', {
      templateUrl: 'src/components/dishes.template.html',
      bindings: {
       list:'<',
       title: '@' 
      }
    });
})();
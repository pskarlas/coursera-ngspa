(function(){
  'use strict';
  angular.module('menuApp')
    .component('categories', {
      templateUrl: 'src/components/categories.template.html',
      bindings: {
        list: '<'
      }
    });
})();
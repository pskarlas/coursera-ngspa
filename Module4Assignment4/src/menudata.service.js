(function(){
  'use strict';
  angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiCategoriesPath', 'https://davids-restaurant.herokuapp.com/categories.json')
    .constant('ApiMenuItemsPath', 'https://davids-restaurant.herokuapp.com/menu_items.json');
    
    MenuDataService.$inject = ['$http', 'ApiCategoriesPath', 'ApiMenuItemsPath'];
    function MenuDataService($http, ApiCategoriesPath, ApiMenuItemsPath) {
      var service = this;
      service.getAllCategories = function() {
        var response = $http({
          method: 'GET',
          url: ApiCategoriesPath
        });
         return response;
      };

      service.getItemsForCategory = function(categoryShortName){
        var response = $http({
          method: 'GET',
          url: ApiMenuItemsPath,
          params: {category: categoryShortName}
        })
        return response;
      };

    };
})();
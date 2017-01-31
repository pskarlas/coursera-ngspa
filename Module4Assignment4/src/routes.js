(function(){
  'use strict';

  angular.module('menuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'src/templates/home.template.html',
          controller: 'MenuAppController as main',
          resolve: {
            categories: ['MenuDataService', function(MenuDataService){
              return MenuDataService.getAllCategories();
            }]
          }
        })
        .state('dishList',{
          url: '/dish-list/{categoryShortName}',
          templateUrl: 'src/templates/dish-list.template.html',
          controller: 'DishListController as list',
          resolve: {
            dishes: ['$stateParams', 'MenuDataService', 
            function($stateParams, MenuDataService){
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
          }
        });
    }
})()
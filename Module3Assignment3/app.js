(function(){
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', foundItems)
  .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com/menu_items.json');

//CONTROLLER
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list= this;
  list.term = '';
  list.found = [];
  //Search Item
  list.search = function(searchTerm) {
    if(searchTerm) {
      list.found= list.found.splice(0, list.found.length);
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
        promise.then(function(response){
          console.info(response);
          if(response.length > 0) {
            return list.found = response;
          } else {
            return list.found=0;
          }
        })
        .catch(function(error){
        console.error(error);
        });
    } else {
         return list.found = 0;
      }
  };
  // Delete Item 
  list.deleteItem = function(index) {
    list.found.splice(index, 1);
  }

};
//SERVICE
 MenuSearchService.$inject=['$http', 'ApiBasePath'];
 function MenuSearchService($http, ApiBasePath) {
   var service = this;
   var arrItems =[];
   service.getMatchedMenuItems = function(searchTerm){
     var response = $http({
       method: 'GET',
       url: (ApiBasePath)
     });
  
     return response.then(function(result) {
      for(var i=0; i < result.data.menu_items.length; i++) {
         if (result.data.menu_items[i].description.match(searchTerm)) {
           arrItems.push(result.data.menu_items[i]);
         }
       }
       return arrItems;
     });
   }
 };



//DIRECTIVE
function foundItems() {
 var ddo = {
   templateUrl: 'found-items.html',
   scope: {
     list: '=theItems',
   }
 }
 return ddo;
};


 
})();
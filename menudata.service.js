(function () {
    'use strict';

    angular.module('data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];

    function MenuDataService($http) {
        var service = this;

        service.getAllCategories = function () {
            // Implement this method to retrieve categories from the API
        };

        service.getItemsForCategory = function (categoryShortName) {
            // Implement this method to retrieve items for a specific category from the API
        };
    }
})();

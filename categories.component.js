(function () {
    'use strict';

    angular.module('MenuApp')
    .component('categories', {
        templateUrl: 'categories.template.html',
        bindings: {
            categoriesData: '<' // Input data binding for categories
        }
    });
})();

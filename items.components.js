(function () {
    'use strict';

    angular.module('MenuApp')
    .component('items', {
        templateUrl: 'items.template.html',
        bindings: {
            itemsData: '<' // Input data binding for items
        }
    });
})();

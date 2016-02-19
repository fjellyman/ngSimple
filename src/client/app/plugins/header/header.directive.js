(function() {
    'use strict';

    angular
        .module('plugins.header')
        .directive('simpleHeader', simpleHeader);

    simpleHeader.$inject = [];
    
    function simpleHeader () {
        var directive = {
            bindToController: true,
            controller: 'HeaderController',
            controllerAs: 'HeaderController',
            templateUrl: '/app/plugins/header/header.html'
        };
        
        return directive;
    }
})();
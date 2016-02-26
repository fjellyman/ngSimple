(function() {
    'use strict';

    angular
        .module('material.navigationDrawer')
        .directive('mdNavigationDrawerGroup', mdNavigationDrawerGroup);

    mdNavigationDrawerGroup.$inject = [];
    function mdNavigationDrawerGroup() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: {
                mdSubtitle: '@'
            },
            controller: NavigationDrawerGroupController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {},
            templateUrl: '/app/plugins/mdNavigationDrawer/group/mdNavigationDrawerGroup.html',
            transclude: true
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function NavigationDrawerGroupController () {
        
    }
})();
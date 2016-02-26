(function() {
    'use strict';

    angular
        .module('material.navigationDrawer')
        .directive('mdNavigationDrawerItem', mdNavigationDrawerItem);

    mdNavigationDrawerItem.$inject = [];
    function mdNavigationDrawerItem() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: {
                mdActive: '=',
                mdIcon: '@',
                mdTitle: '@',
                mdUiSref: '@'
            },
            controller: NavigationDrawerItemController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {},
            templateUrl:'/app/plugins/mdNavigationDrawer/item/mdNavigationDrawerItem.html'
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function NavigationDrawerItemController () {
        
    }
})();
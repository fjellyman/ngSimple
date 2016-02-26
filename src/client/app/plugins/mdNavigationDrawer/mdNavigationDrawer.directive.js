(function () {
    'use strict';

    angular
        .module('material.navigationDrawer')
        .directive('mdNavigationDrawer', mdNavigationDrawer);

    mdNavigationDrawer.$inject = [];
    function mdNavigationDrawer() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: NavigationDrawerController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
            },
            templateUrl: '/app/plugins/mdNavigationDrawer/mdNavigationDrawer.html',
            transclude: true
        };
        return directive;

        function link(scope, element, attrs) {
            (function ($, _) {
                'use strict';

                var navigationDrawer = 'div.navigation-drawer';
                var triggerButton = 'button.navigation-drawer-trigger';

                $(document).click(function (event) {
                    if (!isClickedElements([triggerButton, navigationDrawer], event)) {
                        $(navigationDrawer).removeClass('active');
                    }
                });

                $(triggerButton).click(function () {
                    $(navigationDrawer).addClass('active');
                });

                function isClickedElement(element, event) {
                    return $(event.target).closest(element).length;
                }

                function isClickedElements(elements, event) {
                    return _.some(elements, function (element) {
                        return isClickedElement(element, event);
                    });
                }
            })(jQuery, _);
        }
    }
    
    NavigationDrawerController.$inject = ['$rootScope'];
    function NavigationDrawerController($rootScope) {
        
    }
})();
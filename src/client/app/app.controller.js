(function () {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope'];

    function AppController($scope) {
        var vm = this;
        
        vm.loading = false;
        
        $scope.$on('$stateChangeStart', function (event, toState) {
            if (toState.resolve) {
                vm.loading = true;
            }
        });
        $scope.$on('$stateChangeSuccess', function (event, toState) {
            if (toState.resolve) {
                vm.loading = false;
            }
        });
    }
})();
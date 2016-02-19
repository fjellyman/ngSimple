(function () {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$rootScope'];

    function AppController($rootScope) {
        var vm = this;
        
        vm.loading = false;
        
        $rootScope.$on('$stateChangeStart', function (event, toState) {
            if (toState.resolve) {
                vm.loading = true;
            }
        });
        
        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            if (toState.resolve) {
                vm.loading = false;
            }
        });
        
        $rootScope.$on('$stateChangeError', function (event, toState) {
            console.log('error in call');
            vm.loading = false;
        });
    }
})();
(function() {
'use strict';

    angular
        .module('app.logout')
        .controller('LogoutController', LogoutController);

    LogoutController.$inject = ['$state', 'tokenService'];
    function LogoutController($state, tokenService) {
        tokenService.removeToken();
        $state.go('home');
    }
})();
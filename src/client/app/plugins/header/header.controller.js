(function() {
'use strict';

    angular
        .module('plugins.header')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['tokenService'];
    function HeaderController(tokenService) {
        var vm = this;
        
        vm.isAuthenticated = tokenService.isAuthenticated;
        
        activate();

        ////////////////

        function activate() { }
    }
})();
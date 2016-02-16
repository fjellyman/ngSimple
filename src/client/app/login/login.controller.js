(function () {
    'use strict';
    
    angular
        .module('app.login')
        .controller('LoginController', LoginController);
        
    LoginController.$inject = [];        
        
    function LoginController() {
        var vm = this;
        
        vm.submit = function () {
            console.log('submitted login form');
        };
    }
})();
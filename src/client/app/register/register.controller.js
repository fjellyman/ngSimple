(function () {
    'use strict';
    
    angular
        .module('app.register')
        .controller('RegisterController', RegisterController);
        
    RegisterController.$inject = ['$http', '$log', '$q', '$state', 'tokenService'];        
        
    function RegisterController($http, $log, $q, $state, tokenService) {
        var vm = this;
        
        vm.newUser = {};
        
        vm.submit = function () {
            $http.post('http://localhost:3010/user', vm.newUser)
                .then(function (res) {
                    $log.info(res);
                    tokenService.setToken(res.data.data.token);
                    $state.go('home');
                })
                .catch(function (err) {
                    $log.error(err);
                });;
        };
    }
})();
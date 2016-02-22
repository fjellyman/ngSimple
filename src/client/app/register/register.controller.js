(function () {
    'use strict';
    
    angular
        .module('app.register')
        .controller('RegisterController', RegisterController);
        
    RegisterController.$inject = ['$http', '$log', '$q', '$state', 'tokenService', 'USER_URL'];        
        
    function RegisterController($http, $log, $q, $state, tokenService, USER_URL) {
        var vm = this;
        
        vm.newUser = {};
        
        vm.submit = function () {
            $http.post(USER_URL + 'user', vm.newUser)
                .then(function (res) {
                    tokenService.setToken(res.data.data.token);
                    $state.go('home');
                })
                .catch(function (err) {
                    $log.error(err);
                });;
        };
    }
})();
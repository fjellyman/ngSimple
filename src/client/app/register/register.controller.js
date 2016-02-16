(function () {
    'use strict';
    
    angular
        .module('app.register')
        .controller('RegisterController', RegisterController);
        
    RegisterController.$inject = ['$http', '$log', '$q'];        
        
    function RegisterController($http, $log, $q) {
        var vm = this;
        
        vm.newUser = {};
        
        vm.submit = function () {
            $http.post('http://localhost:3010/user', vm.newUser)
                .then(function (res) {
                    $log.info(res);
                })
                .catch(function (err) {
                    $log.error(err);
                });;
        };
    }
})();
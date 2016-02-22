(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$http', '$log', '$state', 'tokenService', 'AUTH_URL'];

    function LoginController($http, $log, $state, tokenService, AUTH_URL) {
        var vm = this;

        vm.user = {};

        vm.submit = function () {
            $http.post(AUTH_URL + 'login', vm.user)
                .then(function (res) {
                    if (res.status === 204) {
                        $log.warn(res.info, res);
                    } else if (res.status === 401) {
                        $log.warn(res.info, res);
                        return;
                    } else {
                        tokenService.setToken(res.data.data.token);
                        $state.go('home');
                    }
                })
                .catch(function (err) {
                    $log.error(err);
                });
        };
    }
})();
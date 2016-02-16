(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$log', '$q', '$state'];

    function dataservice($http, $log, $q, $state) {

        var service = {
            getUser: getUser,
            getUsers: getUsers
        };
        
        return service;

        function getUser(id) {
            return $http.get('http://localhost:3010/user/' + id)
                .then(function (res) {
	                $log.info(res);
                    return res.data.data;
                })
                .catch(function (err) {
                    $log.error(err);
                    $state.go('home');
                });            
        }

        function getUsers() {
            return $http.get('http://localhost:3010/user')
                .then(function (res) {
	                $log.info(res);
                    return res.data.data;
                })
                .catch(function (err) {
                    $log.error(err);
                    $state.go('home');
                });
        }
    }
})();
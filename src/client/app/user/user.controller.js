(function () {
    'use strict';

    angular
        .module('app.user')
        .controller('UserController', UserController);

    UserController.$inject = ['$http', '$log', '$q', '$stateParams', 'dataservice'];

    function UserController($http, $log, $q, $stateParams, dataservice) {
        var vm = this;

        vm.user = {};
        
        activate();
        
        ////////////////////
        
        function activate() {
            var promises = [getUser($stateParams.id)];
            
            return $q.all(promises).then(function () {
                $log.info('Activated UserController');
            });
        }
        
        function getUser(id) {
            return $http.get('http://localhost:3010/user/' + id)
                .then(function (res) {
	                   $log.info(res); 
                       vm.user = res.data.data;
                })
                .catch(function (err) {
	                   $log.error(err);
                });
        }
    }
})();
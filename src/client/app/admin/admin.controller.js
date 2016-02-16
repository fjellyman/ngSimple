(function () {
    'use strict';

    angular
        .module('app.admin')
        .controller('AdminController', AdminController);

    AdminController.$inject = ['$log', '$q', 'dataservice', 'users'];

    function AdminController($log, $q, dataservice, users) {
        var vm = this;

        vm.users = users;

        activate();
        
        ////////////////////
        
        function activate() {
            $log.info('Activated AdminController');
        }
    }
})();
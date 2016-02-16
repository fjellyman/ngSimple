(function () {
    'use strict';

    angular
        .module('app.user')
        .factory('userDataservice', UserDataService);

    UserDataService.$inject = ['dataservice'];

    function UserDataService(dataservice) {
        return angular.extend(dataservice, {
            getPeople: getPeople
        });

        function getPeople() {
	       return [{ name: "Jordan" }, { name: "Jessica" }];
        }
    }
})();
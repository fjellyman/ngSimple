(function() {
'use strict';

    angular
        .module('plugins.token')
        .factory('interceptorService', interceptorService);

    interceptorService.$inject = ['tokenService'];
    function interceptorService(tokenService) {
        var service = {
            request:request,
            response:response
        };
        
        return service;

        ////////////////
        function request(config) {
            var token = tokenService.getToken();
            
            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
            }
            
            return config;
        }
        
        function response(res) {
            return res;
        }
    }
})();
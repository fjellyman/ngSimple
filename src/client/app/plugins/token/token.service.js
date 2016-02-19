(function() {
'use strict';

    angular
        .module('plugins.token')
        .factory('tokenService', TokenService);

    TokenService.$inject = ['$window'];
    
    function TokenService($window) {
        var storage = $window.localStorage;
        var tokenName = 'userToken';
        var cachedToken;
        
        var service = {
            getToken: getToken,
            setToken: setToken,
            isAuthenticated: isAuthenticated,
            removeToken: removeToken
        };
        
        return service;

        ////////////////
        
        function getToken() {
            if (!cachedToken) {
                cachedToken = storage.getItem(tokenName)
            }
            
            return cachedToken;
        }
        
        function setToken(token) {
            cachedToken = token;
            storage.setItem(tokenName, token);
        }
        
        function isAuthenticated () {
            return !!service.getToken();
        }
        
        function removeToken() {
            cachedToken = null;
            storage.removeItem(tokenName);
        }
    }
})();
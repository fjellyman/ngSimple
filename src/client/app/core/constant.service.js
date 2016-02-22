(function () {
    'use strict';
    
    angular
        .module('app.core')
        .constant('AUTH_URL', 'http://localhost:3040/')
        .constant('USER_URL', 'http://localhost:3010/');
})();
(function () {
    'use strict';

    angular
        .module('app', [
            /* shared */
            'app.core',
            
            /* featured */
            'app.admin',
            'app.home',
            'app.login',
            'app.logout',
            'app.register',
            'app.user'
        ]);
})();
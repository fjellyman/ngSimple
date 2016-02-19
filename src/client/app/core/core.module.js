(function () {
    'use strict';
    
    angular
        .module('app.core', [
           /* angular */
           
           /* third party */
           'ui.router',
           
           /* external */ 
           'plugins.header',
           'plugins.token'
        ]);
})();
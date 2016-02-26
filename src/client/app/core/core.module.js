(function () {
    'use strict';
    
    angular
        .module('app.core', [
           /* angular */
           
           /* third party */
           'ui.router',
           
           /* external */ 
           'material.navigationDrawer',
           'plugins.header',
           'plugins.token'
        ]);
})();
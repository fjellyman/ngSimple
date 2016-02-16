(function () {
    'use strict';

    angular
        .module('app.core')
        .config(router);

    router.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    function router($locationProvider, $stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $locationProvider.html5Mode({
            enabled: true
            //requireBase: false
        });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeController',
                controllerAs: 'HomeController',
                templateUrl: '/app/home/home.html'
            })
            .state('admin', {
                url: '/admin',
                controller: 'AdminController',
                controllerAs: 'AdminController',
                templateUrl: '/app/admin/admin.html',
                resolve: {
                    users: function (dataservice) {
                        return dataservice.getUsers();
                    }
                }
            })
            .state('login', {
                url: '/login',
                controller: 'LoginController',
                controllerAs: 'LoginController',
                templateUrl: '/app/login/login.html'
            })
            .state('register', {
                url: '/register',
                controller: 'RegisterController',
                controllerAs: 'RegisterController',
                templateUrl: '/app/register/register.html'
            })
            .state('user-detail', {
                url: '/user/{id}',
                controller: 'UserController',
                controllerAs: 'UserController',
                templateUrl: '/app/user/user.html'
            });
    }
})();
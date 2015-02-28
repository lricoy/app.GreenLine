'use strict';

/**
 * @ngdoc overview
 * @name greenLineApp
 * @description
 * # greenLineApp
 *
 * Main module of the application.
 */

var domain = 'http://localhost:8000/';

angular
    .module('greenLineApp', [
        'ngAnimate',
        'ngAria',
        'ngMessages',
        'ngRoute',
        'ngMaterial',
        'ngResource'
    ])
    .run(function ($rootScope, AuthService, $location) {
        var checkIsLogged = AuthService.isLogged;
        AuthService.checkStoredAuth();

        $rootScope.$on('routeChangeSuccess', function () {
            if (!checkIsLogged()){
                $location.path("/login");
            }
        });
    })
    .config(function ($routeProvider, $resourceProvider, $mdThemingProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/login',{
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/entries/employee', {
                templateUrl: 'views/employee.html',
                controller: 'EntriesCtrl',
                resolve: {
                    objects: function (EntrieService) {
                        return EntrieService.get('funcionario/');
                    }
                }
            })
            .otherwise({
                redirectTo: '/'
            });

        $resourceProvider.defaults.stripTrailingSlashes = false;

        $mdThemingProvider.theme('default')
            .primaryPalette('light-blue')
    });

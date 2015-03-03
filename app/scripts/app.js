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
        'ngMaterial',
        'ngResource',
        'ui.router'
    ])
    .config(function ($stateProvider,
                      $urlRouterProvider,
                      $resourceProvider,
                      $mdThemingProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .state('main', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('employee', {
                url: '/employee',
                templateUrl: 'views/employee.html',
                controller: 'EmployeeCtrl'
            })
            .state('employee.list', {
                url: '/',
                templateUrl: 'views/employee/list.html'
            })
            .state('employee.new', {
                url: '/new',
                templateUrl: 'views/employee/form.html'
            });

        $resourceProvider.defaults.stripTrailingSlashes = false;


        $mdThemingProvider.theme('default')
            .primaryPalette('light-blue');
    })
    .run(function ($rootScope, $timeout, AuthService) {
        console.log("Runing app...");
        AuthService.checkStoredAuth();

    });
